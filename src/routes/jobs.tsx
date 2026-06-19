import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Nav } from "../components/home/Nav";
import { Footer } from "@/components/home/Footer";
export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs Abroad — Healthcare & Technical Roles | Ozone" },
      {
        name: "description",
        content:
          "32 live vacancies across 10 countries. Apply directly — no third-party agents. ICU, OT, Lab, Engineering and more.",
      },
      { property: "og:title", content: "Jobs Abroad — Healthcare & Technical Roles | Ozone" },
      {
        property: "og:description",
        content:
          "Browse live vacancies across the Gulf and Canada. Direct employer applications, full visa sponsorship.",
      },
    ],
  }),
  component: JobsPage,
});

type Tag = "NEW" | "CLOSING SOON" | null;
type Job = {
  id: string;
  title: string;
  category: "Healthcare" | "Technical";
  country: string;
  flag: string;
  hospital: string;
  city: string;
  experience: "No Experience" | "1-3 years" | "3-5 years" | "5+ years";
  roleType: "Full-time" | "Contract";
  salaryMin: number;
  salaryMax: number;
  currency: string;
  tag: Tag;
  postedDays: number;
  closingDays: number;
  description: string;
  responsibilities: string[];
  benefits: string[];
};

const JOBS: Job[] = [
  {
    id: "j1",
    title: "ICU Staff Nurse",
    category: "Healthcare",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hospital: "King Fahad Medical City",
    city: "Riyadh",
    experience: "1-3 years",
    roleType: "Full-time",
    salaryMin: 9500,
    salaryMax: 12000,
    currency: "SAR",
    tag: "NEW",
    postedDays: 2,
    closingDays: 28,
    description:
      "Join a 1,200-bed quaternary facility supporting one of the region's busiest critical care units.",
    responsibilities: [
      "Manage ventilated patients in a 24-bed ICU",
      "Collaborate with multidisciplinary critical care teams",
      "Maintain DataMar charting standards",
    ],
    benefits: [
      "Full visa & licensing sponsorship",
      "Furnished accommodation",
      "Annual return ticket",
      "Medical insurance for self",
    ],
  },
  {
    id: "j2",
    title: "OT Staff Nurse",
    category: "Healthcare",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hospital: "Saudi German Hospital",
    city: "Jeddah",
    experience: "3-5 years",
    roleType: "Full-time",
    salaryMin: 8500,
    salaryMax: 11000,
    currency: "SAR",
    tag: null,
    postedDays: 6,
    closingDays: 21,
    description: "Theatre nurses for a 14-OT complex covering cardiac, ortho, and general surgery.",
    responsibilities: [
      "Scrub & circulate across specialty lists",
      "Anaesthesia assistance and recovery handover",
      "Sterile field & instrument accountability",
    ],
    benefits: ["Visa sponsorship", "Shared accommodation", "Joining bonus", "30 days annual leave"],
  },
  {
    id: "j3",
    title: "ICU Staff Nurse",
    category: "Healthcare",
    country: "UAE",
    flag: "🇦🇪",
    hospital: "Cleveland Clinic Abu Dhabi",
    city: "Abu Dhabi",
    experience: "3-5 years",
    roleType: "Full-time",
    salaryMin: 11000,
    salaryMax: 14500,
    currency: "AED",
    tag: "CLOSING SOON",
    postedDays: 18,
    closingDays: 5,
    description: "World-class quaternary care provider hiring experienced critical care nurses.",
    responsibilities: [
      "Care of complex post-surgical ICU patients",
      "Mentor junior team members",
      "Participate in Magnet practice initiatives",
    ],
    benefits: [
      "DHA license sponsorship",
      "Family accommodation eligible",
      "Education stipend",
      "End-of-service gratuity",
    ],
  },
  {
    id: "j4",
    title: "Biomedical Technician",
    category: "Healthcare",
    country: "Qatar",
    flag: "🇶🇦",
    hospital: "Hamad Medical Corporation",
    city: "Doha",
    experience: "1-3 years",
    roleType: "Full-time",
    salaryMin: 8000,
    salaryMax: 10500,
    currency: "QAR",
    tag: "NEW",
    postedDays: 3,
    closingDays: 27,
    description: "Maintain and calibrate biomedical equipment across the HMC network.",
    responsibilities: [
      "Preventive maintenance of patient monitors and pumps",
      "First-line incident response",
      "Vendor escalation and reporting",
    ],
    benefits: ["Visa sponsorship", "Bachelor accommodation", "Annual ticket", "Performance bonus"],
  },
  {
    id: "j5",
    title: "Radiology Technologist",
    category: "Healthcare",
    country: "Oman",
    flag: "🇴🇲",
    hospital: "Royal Hospital",
    city: "Muscat",
    experience: "1-3 years",
    roleType: "Full-time",
    salaryMin: 700,
    salaryMax: 950,
    currency: "OMR",
    tag: null,
    postedDays: 9,
    closingDays: 19,
    description: "CT and MR-experienced technologists for a tertiary referral centre.",
    responsibilities: [
      "Operate CT, MR, and fluoroscopy modalities",
      "Protocol optimisation under radiologist supervision",
      "Patient safety screening",
    ],
    benefits: ["Omani Prometric support", "Visa & flight", "Accommodation allowance"],
  },
  {
    id: "j6",
    title: "Physiotherapist",
    category: "Healthcare",
    country: "Kuwait",
    flag: "🇰🇼",
    hospital: "Dar Al Shifa Hospital",
    city: "Kuwait City",
    experience: "1-3 years",
    roleType: "Full-time",
    salaryMin: 800,
    salaryMax: 1100,
    currency: "KWD",
    tag: null,
    postedDays: 12,
    closingDays: 18,
    description: "Outpatient and inpatient musculoskeletal rehab roles available.",
    responsibilities: [
      "Assessment, planning, and delivery of physio care",
      "Coordinate with orthopaedic surgeons",
      "Documentation in Cerner",
    ],
    benefits: ["MOH licensing support", "Furnished single accommodation", "Medical insurance"],
  },
  {
    id: "j7",
    title: "Lab Technologist (Microbiology)",
    category: "Healthcare",
    country: "UAE",
    flag: "🇦🇪",
    hospital: "Mediclinic City Hospital",
    city: "Dubai",
    experience: "No Experience",
    roleType: "Full-time",
    salaryMin: 6500,
    salaryMax: 8500,
    currency: "AED",
    tag: "NEW",
    postedDays: 1,
    closingDays: 29,
    description: "Entry-level positions for fresh BSc MLT graduates with DHA eligibility.",
    responsibilities: [
      "Sample processing across micro and serology",
      "Quality control and equipment calibration",
      "Adherence to JCI standards",
    ],
    benefits: ["Full DHA sponsorship", "Joining ticket", "Shared housing", "Mentorship programme"],
  },
  {
    id: "j8",
    title: "Mechanical Maintenance Technician",
    category: "Technical",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hospital: "Aramco Project Site",
    city: "Dammam",
    experience: "3-5 years",
    roleType: "Contract",
    salaryMin: 7500,
    salaryMax: 10000,
    currency: "SAR",
    tag: null,
    postedDays: 14,
    closingDays: 16,
    description: "Rotating shifts across compressor and turbine maintenance.",
    responsibilities: [
      "Planned shutdown participation",
      "Vibration analysis and root-cause work",
      "HSE compliance reporting",
    ],
    benefits: ["Camp accommodation", "Food provided", "Visa sponsorship", "Overtime"],
  },
  {
    id: "j9",
    title: "Civil Site Engineer",
    category: "Technical",
    country: "Qatar",
    flag: "🇶🇦",
    hospital: "Lusail Infrastructure",
    city: "Lusail",
    experience: "5+ years",
    roleType: "Full-time",
    salaryMin: 12000,
    salaryMax: 16000,
    currency: "QAR",
    tag: "CLOSING SOON",
    postedDays: 22,
    closingDays: 4,
    description: "Lead site execution for a mixed-use infrastructure package.",
    responsibilities: [
      "Daily progress and quality oversight",
      "Subcontractor coordination",
      "RFI/IR closure with consultant",
    ],
    benefits: ["Family status", "Annual ticket for dependents", "Schooling allowance"],
  },
  {
    id: "j10",
    title: "Electrical Supervisor",
    category: "Technical",
    country: "Oman",
    flag: "🇴🇲",
    hospital: "Sohar Industrial Estate",
    city: "Sohar",
    experience: "5+ years",
    roleType: "Contract",
    salaryMin: 900,
    salaryMax: 1250,
    currency: "OMR",
    tag: null,
    postedDays: 11,
    closingDays: 19,
    description: "Supervise LV/MV electrical installation across a brownfield expansion.",
    responsibilities: [
      "Team of 12 technicians",
      "Method statements and PTW",
      "Client and consultant interface",
    ],
    benefits: ["Bachelor camp", "Transport provided", "Mob/demob tickets"],
  },
  {
    id: "j11",
    title: "ICU Registered Nurse",
    category: "Healthcare",
    country: "Canada",
    flag: "🇨🇦",
    hospital: "Vancouver General Hospital",
    city: "Vancouver",
    experience: "3-5 years",
    roleType: "Full-time",
    salaryMin: 78000,
    salaryMax: 96000,
    currency: "CAD",
    tag: "NEW",
    postedDays: 4,
    closingDays: 26,
    description: "BCCNM-eligible nurses for one of Canada's largest adult ICUs.",
    responsibilities: [
      "1:1 / 1:2 critical care ratios",
      "Participate in NCLEX-RN supported pathway",
      "Engage in evidence-based practice rounds",
    ],
    benefits: ["IEN bridging support", "PR pathway guidance", "Relocation reimbursement"],
  },
  {
    id: "j12",
    title: "OT Nurse",
    category: "Healthcare",
    country: "Kuwait",
    flag: "🇰🇼",
    hospital: "Al Salam International Hospital",
    city: "Salmiya",
    experience: "No Experience",
    roleType: "Full-time",
    salaryMin: 600,
    salaryMax: 850,
    currency: "KWD",
    tag: "CLOSING SOON",
    postedDays: 19,
    closingDays: 6,
    description: "Trainee theatre nurse intake — structured 6-month onboarding.",
    responsibilities: [
      "Rotational scrub training",
      "Supervised circulating duties",
      "Sterile-services exposure",
    ],
    benefits: ["Full MOH licensing", "Single accommodation", "Two-year contract"],
  },
];

const COUNTRY_COUNTS = [
  { name: "Saudi Arabia", count: 9 },
  { name: "UAE", count: 6 },
  { name: "Qatar", count: 5 },
  { name: "Oman", count: 4 },
  { name: "Kuwait", count: 3 },
  { name: "Canada", count: 2 },
  { name: "Bahrain", count: 1 },
  { name: "Germany", count: 1 },
  { name: "Ireland", count: 1 },
  { name: "UK", count: 0 },
];
const TOTAL_NOTIONAL = 32;
const EXP_LEVELS: Job["experience"][] = ["No Experience", "1-3 years", "3-5 years", "5+ years"];
const ROLE_TYPES: Job["roleType"][] = ["Full-time", "Contract"];

function useAnimatedCount(target: number) {
  const [val, setVal] = useState(target);
  const ref = useRef(target);
  useEffect(() => {
    const from = ref.current;
    const start = performance.now();
    const dur = 500;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setVal(Math.round(from + (target - from) * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
      else ref.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

function JobsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState<string>("All");
  const [category, setCategory] = useState<"All" | "Healthcare" | "Technical">("All");
  const [countries, setCountries] = useState<string[]>([]);
  const [exp, setExp] = useState<string[]>([]);
  const [roleType, setRoleType] = useState<string>("");
  const [closingThisWeek, setClosingThisWeek] = useState(false);
  const [sponsorship] = useState(true);
  const [sort, setSort] = useState<"recent" | "closing" | "salary">("recent");
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [drawer, setDrawer] = useState<Job | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = JOBS.filter((j) => {
      if (q && !`${j.title} ${j.hospital} ${j.city}`.toLowerCase().includes(q)) return false;
      if (country !== "All" && j.country !== country) return false;
      if (category !== "All" && j.category !== category) return false;
      if (countries.length && !countries.includes(j.country)) return false;
      if (exp.length && !exp.includes(j.experience)) return false;
      if (roleType && j.roleType !== roleType) return false;
      if (closingThisWeek && j.closingDays > 7) return false;
      return true;
    });
    if (sort === "recent") list = [...list].sort((a, b) => a.postedDays - b.postedDays);
    if (sort === "closing") list = [...list].sort((a, b) => a.closingDays - b.closingDays);
    if (sort === "salary") list = [...list].sort((a, b) => b.salaryMax - a.salaryMax);
    return list;
  }, [search, country, category, countries, exp, roleType, closingThisWeek, sort]);

  const animatedCount = useAnimatedCount(filtered.length);

  const activeChips = [
    country !== "All"
      ? { key: "country-main", label: country, clear: () => setCountry("All") }
      : null,
    category !== "All" ? { key: "cat", label: category, clear: () => setCategory("All") } : null,
    ...countries.map((c) => ({
      key: `c-${c}`,
      label: c,
      clear: () => setCountries((p) => p.filter((x) => x !== c)),
    })),
    ...exp.map((e) => ({
      key: `e-${e}`,
      label: e,
      clear: () => setExp((p) => p.filter((x) => x !== e)),
    })),
    roleType ? { key: "role", label: roleType, clear: () => setRoleType("") } : null,
    closingThisWeek
      ? { key: "cls", label: "Closing this week", clear: () => setClosingThisWeek(false) }
      : null,
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const clearAll = () => {
    setSearch("");
    setCountry("All");
    setCategory("All");
    setCountries([]);
    setExp([]);
    setRoleType("");
    setClosingThisWeek(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-ozone-bg)]">
      <Nav />

      {/* SECTION 1 — Hero / Search */}
      <section
        className="
  relative
  overflow-hidden
  bg-gradient-to-b
  from-[#07182A]
  via-[#0A213B]
  to-[#0F2947]
  text-white
"
      >
        {/* BG */}

        <div className="absolute inset-0">
          <div
            className="
      absolute
      right-[-220px]
      top-[-260px]
      w-[700px]
      h-[700px]
      rounded-full
      bg-[#0BAF8A]/10
      blur-[180px]
    "
          />

          <div
            className="
      absolute
      left-[-200px]
      bottom-[-250px]
      w-[550px]
      h-[550px]
      rounded-full
      bg-[#7AB8FF]/8
      blur-[180px]
    "
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <p
            className="
      text-[12px]
      tracking-[0.3em]
      text-[#66E2C0]
      font-semibold
      mb-5
      ozone-fade-up
    "
          >
            LIVE VACANCIES
          </p>

          <h1
            className="
      text-[54px]
      md:text-[76px]
      font-black
      leading-[0.95]
      tracking-[-0.05em]
      max-w-4xl
      ozone-fade-up
    "
          >
            Find your next role
            <span className="block text-[#0BAF8A]">abroad.</span>
          </h1>

          <p
            className="
      mt-7
      text-white/65
      text-[20px]
      leading-[1.8]
      max-w-[760px]
    "
          >
            Browse verified international opportunities and apply directly — without agents, hidden
            fees, or unnecessary delays.
          </p>

          {/* SEARCH */}

          <div
            className="
      mt-12
      bg-white
      rounded-[28px]
      p-3
      flex
      flex-col
      md:flex-row
      gap-2
      shadow-[0_40px_100px_rgba(0,0,0,.25)]
    "
          >
            <div className="flex-1 flex items-center gap-3 px-5">
              <svg
                className="h-5 w-5 text-[#7A8DA6] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search role, hospital, or keyword…"
                className="
          flex-1
          py-4
          outline-none
          text-[#081A30]
          placeholder:text-[#98A8BA]
          bg-transparent
        "
              />
            </div>

            <div
              className="
        flex
        items-center
        gap-3
        px-5
        md:border-l
        border-[#E8EDF4]
      "
            >
              <svg
                className="h-5 w-5 text-[#7A8DA6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s-8-7.58-8-13a8 8 0 0 1 16 0c0 5.42-8 13-8 13Z" />
                <circle cx="12" cy="9" r="3" />
              </svg>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="
          bg-transparent
          py-4
          outline-none
          text-[#081A30]
        "
              >
                <option value="All">All countries</option>

                {COUNTRY_COUNTS.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="
        bg-[#0BAF8A]
        hover:bg-[#089877]
        text-white
        font-semibold
        px-8
        rounded-[18px]
        transition
      "
            >
              Search
            </button>
          </div>

          {/* FILTERS */}

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              {
                label: "ICU Nurses",
                apply: () => setSearch("ICU"),
              },

              {
                label: "Saudi Arabia",
                apply: () => setCountry("Saudi Arabia"),
              },

              {
                label: "Closing This Week",
                apply: () => setClosingThisWeek(true),
              },

              {
                label: "Technical Roles",
                apply: () => setCategory("Technical"),
              },

              {
                label: "No Experience Required",
                apply: () => setExp(["No Experience"]),
              },
            ].map((c) => (
              <button
                key={c.label}
                onClick={c.apply}
                className="
          px-5
          py-3
          rounded-full
          bg-white/6
          border
          border-white/10
          text-white/85
          hover:bg-[#0BAF8A]
          hover:border-[#0BAF8A]
          transition
        "
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className="bg-[#F7FAFD]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            {/* SIDEBAR */}

            <aside className="hidden lg:block">
              <div
                className="
sticky
top-24
rounded-[28px]
bg-[#081A30]
text-white
border border-white/6
shadow-[0_40px_100px_rgba(8,26,48,.08)]
backdrop-blur-xl

p-7
space-y-8

"
              >
                <FilterGroup title="Category">
                  {["All", "Healthcare", "Technical"].map((c) => (
                    <label
                      key={c}
                      className="
flex
items-center
gap-3
cursor-pointer
text-[15px]
"
                    >
                      <input
                        type="radio"
                        name="cat"
                        checked={category === c}
                        onChange={() => setCategory(c as typeof category)}
                        className="accent-[#0BAF8A]"
                      />

                      <span className="text-[#334155]">{c}</span>
                    </label>
                  ))}
                </FilterGroup>

                <FilterGroup title="Country">
                  {(showAllCountries ? COUNTRY_COUNTS : COUNTRY_COUNTS.slice(0, 6)).map((c) => (
                    <label
                      key={c.name}
                      className="
flex
items-center
justify-between
cursor-pointer
"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={countries.includes(c.name)}
                          onChange={(e) =>
                            setCountries((p) =>
                              e.target.checked ? [...p, c.name] : p.filter((x) => x !== c.name),
                            )
                          }
                          className="accent-[#0BAF8A]"
                        />

                        <span className="text-[#334155]">{c.name}</span>
                      </div>

                      <span className="text-[#94A3B8] text-sm">{c.count}</span>
                    </label>
                  ))}

                  <button
                    onClick={() => setShowAllCountries((v) => !v)}
                    className="
text-[#0BAF8A]
font-semibold
text-sm
"
                  >
                    {showAllCountries ? "Show less" : `+ ${COUNTRY_COUNTS.length - 6} more`}
                  </button>
                </FilterGroup>

                <FilterGroup title="Experience">
                  {EXP_LEVELS.map((e) => (
                    <label
                      key={e}
                      className="
flex
items-center
gap-3
cursor-pointer
"
                    >
                      <input
                        type="checkbox"
                        checked={exp.includes(e)}
                        onChange={(ev) =>
                          setExp((p) => (ev.target.checked ? [...p, e] : p.filter((x) => x !== e)))
                        }
                        className="accent-[#0BAF8A]"
                      />

                      <span className="text-[#334155]">{e}</span>
                    </label>
                  ))}
                </FilterGroup>

                <button
                  onClick={clearAll}
                  className="
w-full
h-[52px]
rounded-[16px]
border
border-[#E2E8F0]
hover:border-[#0BAF8A]
transition
font-semibold
"
                >
                  Clear Filters
                </button>
              </div>
            </aside>

            {/* RESULTS */}

            <div>
              <div
                className="
flex
justify-between
items-center
mb-6
flex-wrap
gap-4
"
              >
                <div>
                  <p className="text-[#64748B]">
                    Showing
                    <span className="mx-1 font-black text-[#081A30]">{animatedCount}</span>
                    of {TOTAL_NOTIONAL} roles
                  </p>
                </div>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  className="
bg-white
rounded-[16px]
px-5
h-[50px]
border
border-[#E5EDF5]
"
                >
                  <option value="recent">Most recent</option>

                  <option value="closing">Closing soonest</option>

                  <option value="salary">Highest salary</option>
                </select>
              </div>

              {/* CHIPS */}

              {activeChips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeChips.map((c) => (
                    <button
                      key={c.key}
                      onClick={c.clear}
                      className="
px-4
py-2
rounded-full
bg-white
border
border-[#E5EDF5]
hover:border-[#0BAF8A]
text-[#334155]
transition
"
                    >
                      {c.label} ×
                    </button>
                  ))}
                </div>
              )}

              {/* EMPTY */}

              {filtered.length === 0 ? (
                <div
                  className="
bg-white
rounded-[30px]
p-16
text-center
border
border-[#E8EEF5]
"
                >
                  <h3
                    className="
text-[28px]
font-black
text-[#081A30]
"
                  >
                    No roles found
                  </h3>

                  <p className="mt-3 text-[#64748B]">Try removing some filters.</p>

                  <button
                    onClick={clearAll}
                    className="
mt-6
bg-[#0BAF8A]
text-white
rounded-[16px]
px-6
h-[52px]
"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-5">
                  {filtered.slice(0, visibleCount).map((job) => (
                    <JobCard key={job.id} job={job} onOpen={() => setDrawer(job)} />
                  ))}

                  {visibleCount < filtered.length && (
                    <button
                      onClick={() => setVisibleCount((v) => v + 8)}
                      className="
mx-auto
mt-4
bg-[#081A30]
text-white
rounded-[18px]
px-7
h-[56px]
"
                    >
                      Load More Roles
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter sheet */}
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-auto bg-white rounded-t-3xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setFiltersOpen(false)} className="text-2xl">
                ×
              </button>
            </div>
            <div className="space-y-6">
              <FilterGroup title="Category">
                {["All", "Healthcare", "Technical"].map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="mcat"
                      checked={category === c}
                      onChange={() => setCategory(c as typeof category)}
                    />
                    <span>{c}</span>
                  </label>
                ))}
              </FilterGroup>
              <FilterGroup title="Country">
                {COUNTRY_COUNTS.map((c) => (
                  <label key={c.name} className="flex items-center justify-between text-sm">
                    <span className="flex gap-2">
                      <input
                        type="checkbox"
                        checked={countries.includes(c.name)}
                        onChange={(e) =>
                          setCountries((p) =>
                            e.target.checked ? [...p, c.name] : p.filter((x) => x !== c.name),
                          )
                        }
                      />
                      {c.name}
                    </span>
                    <span className="text-xs text-[var(--color-ozone-muted)]">{c.count}</span>
                  </label>
                ))}
              </FilterGroup>
              <FilterGroup title="Experience">
                {EXP_LEVELS.map((e) => (
                  <label key={e} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={exp.includes(e)}
                      onChange={(ev) =>
                        setExp((p) => (ev.target.checked ? [...p, e] : p.filter((x) => x !== e)))
                      }
                    />
                    {e}
                  </label>
                ))}
              </FilterGroup>
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-[var(--color-ozone-teal)] text-white font-semibold py-3 rounded-xl"
              >
                Show {filtered.length} roles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drawer */}
      {drawer && <JobDrawer job={drawer} onClose={() => setDrawer(null)} />}

      <Footer />
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-wider uppercase text-[var(--color-ozone-muted)] mb-3">
        {title}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function JobCard({ job, onOpen }: { job: Job; onOpen: () => void }) {
  return (
    <article
      className="group bg-white border border-[var(--color-ozone-border)] rounded-2xl p-6 hover:border-[var(--color-ozone-teal)] hover:shadow-lg hover:shadow-[var(--color-ozone-teal)]/5 transition-all duration-300"
      style={{ animation: "ozone-fade-up 0.4s ease-out both" }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{job.flag}</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-[var(--color-ozone-navy)]">{job.title}</h3>
              {job.tag === "NEW" && (
                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-ozone-teal)]/15 text-[var(--color-ozone-teal)]">
                  NEW
                </span>
              )}
              {job.tag === "CLOSING SOON" && (
                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                  CLOSING SOON
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--color-ozone-body)] mt-1">
              {job.hospital} · {job.city}, {job.country}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <Pill>{job.experience}</Pill>
              <Pill>{job.roleType}</Pill>
              <Pill tone="teal">Visa Sponsored</Pill>
              <Pill>{job.category}</Pill>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-[var(--color-ozone-muted)]">Salary</p>
          <p className="font-bold text-[var(--color-ozone-navy)]">
            {job.salaryMin.toLocaleString()}–{job.salaryMax.toLocaleString()}
          </p>
          <p className="text-xs text-[var(--color-ozone-muted)]">{job.currency} / month</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-[var(--color-ozone-border)]">
        <p className="text-xs text-[var(--color-ozone-muted)]">
          Posted {job.postedDays}d ago · Closes in {job.closingDays}d
        </p>
        <button
          onClick={onOpen}
          className="text-sm font-semibold text-[var(--color-ozone-teal)] hover:gap-3 inline-flex items-center gap-2 transition-all"
        >
          View Role <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  );
}

function Pill({ children, tone }: { children: React.ReactNode; tone?: "teal" }) {
  const cls =
    tone === "teal"
      ? "bg-[var(--color-ozone-teal)]/10 text-[var(--color-ozone-teal)] border-[var(--color-ozone-teal)]/20"
      : "bg-[var(--color-ozone-alt)] text-[var(--color-ozone-body)] border-[var(--color-ozone-border)]";
  return (
    <span className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${cls}`}>
      {children}
    </span>
  );
}

function JobDrawer({ job, onClose }: { job: Job; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-xl bg-white overflow-auto shadow-2xl"
        style={{ animation: "ozone-fade-up 0.3s ease-out" }}
      >
        <div className="sticky top-0 bg-white border-b border-[var(--color-ozone-border)] px-8 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{job.flag}</span>
            <div>
              <p className="text-xs text-[var(--color-ozone-muted)]">{job.country}</p>
              <h3 className="font-bold text-[var(--color-ozone-navy)]">{job.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[var(--color-ozone-border)] hover:bg-[var(--color-ozone-alt)] grid place-items-center text-xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="px-8 py-6 space-y-7">
          <div>
            <p className="text-sm text-[var(--color-ozone-body)]">
              {job.hospital} · {job.city}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <Pill>{job.experience}</Pill>
              <Pill>{job.roleType}</Pill>
              <Pill tone="teal">Visa Sponsored</Pill>
            </div>
          </div>
          <div className="bg-[var(--color-ozone-alt)] rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-ozone-muted)] uppercase tracking-wider">
                Monthly Salary
              </p>
              <p className="text-2xl font-bold text-[var(--color-ozone-navy)] mt-1">
                {job.salaryMin.toLocaleString()}–{job.salaryMax.toLocaleString()} {job.currency}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--color-ozone-muted)]">Closes in</p>
              <p className="font-bold text-[var(--color-ozone-navy)]">{job.closingDays} days</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-ozone-navy)] mb-2">About the role</h4>
            <p className="text-sm text-[var(--color-ozone-body)] leading-relaxed">
              {job.description}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-ozone-navy)] mb-3">Responsibilities</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((r) => (
                <li key={r} className="text-sm text-[var(--color-ozone-body)] flex gap-3">
                  <span className="text-[var(--color-ozone-teal)] mt-1">•</span> {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-ozone-navy)] mb-3">What we provide</h4>
            <ul className="space-y-2">
              {job.benefits.map((b) => (
                <li key={b} className="text-sm text-[var(--color-ozone-body)] flex gap-3">
                  <svg
                    className="h-4 w-4 mt-0.5 text-[var(--color-ozone-teal)] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-[var(--color-ozone-teal)] hover:bg-[var(--color-ozone-teal)]/90 text-white font-semibold py-4 rounded-xl text-sm transition-colors inline-flex items-center justify-center gap-2">
            Apply for this Role <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
