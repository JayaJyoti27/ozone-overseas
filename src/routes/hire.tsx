import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  MapPin,
  GraduationCap,
  FileText,
  CircleDot,
  Stethoscope,
  Wrench,
  HeartPulse,
  HardHat,
  Activity,
  Zap,
  X,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

type Search = { focus?: "form" | "pool" };

export const Route = createFileRoute("/hire")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    focus: s.focus === "form" || s.focus === "pool" ? s.focus : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Hire Talent — Browse pool or post a requirement | Ozone" },
      {
        name: "description",
        content:
          "240+ pre-screened candidates across healthcare and technical roles. Submit a requirement and get a match in 48 hours.",
      },
      { property: "og:title", content: "Hire Through Ozone" },
      {
        property: "og:description",
        content: "Browse verified talent. Post a requirement. First match in 48 hours.",
      },
    ],
  }),
  component: HirePage,
});

/* ============================================================
   TALENT DATA
   ============================================================ */
const TALENT = [
  {
    id: "OZ-4471",
    role: "ICU Staff Nurse",
    category: "Healthcare",
    roleGroup: "Nursing",
    location: "Kerala, India",
    exp: 6,
    expBucket: "5+ years",
    license: "SCFHS Eligible",
    availability: "Immediate",
    inGcc: false,
    icon: Stethoscope,
  },
  {
    id: "OZ-4488",
    role: "OT Technician",
    category: "Healthcare",
    roleGroup: "Allied Health (Lab, Radiology, OT Tech)",
    location: "Tamil Nadu, India",
    exp: 4,
    expBucket: "2–5 years",
    license: "DHA Eligible",
    availability: "Within 30 days",
    inGcc: false,
    icon: Activity,
  },
  {
    id: "OZ-4502",
    role: "Biomedical Engineer",
    category: "Healthcare",
    roleGroup: "Biomedical / Engineering",
    location: "Karnataka, India",
    exp: 5,
    expBucket: "5+ years",
    license: "GCC-Compliant Certification",
    availability: "Immediate",
    inGcc: false,
    icon: Wrench,
  },
  {
    id: "OZ-4519",
    role: "Staff Nurse (General)",
    category: "Healthcare",
    roleGroup: "Nursing",
    location: "Kerala, India",
    exp: 3,
    expBucket: "2–5 years",
    license: "HAAD Eligible",
    availability: "Immediate",
    inGcc: false,
    icon: Stethoscope,
  },
  {
    id: "OZ-4533",
    role: "Civil Site Engineer",
    category: "Technical / Engineering",
    roleGroup: "Construction & Trades",
    location: "Maharashtra, India",
    exp: 7,
    expBucket: "5+ years",
    license: "GCC Experience",
    availability: "Within 60 days",
    inGcc: false,
    icon: HardHat,
  },
  {
    id: "OZ-4547",
    role: "Radiology Technician",
    category: "Healthcare",
    roleGroup: "Allied Health (Lab, Radiology, OT Tech)",
    location: "Punjab, India",
    exp: 4,
    expBucket: "2–5 years",
    license: "DHA Eligible",
    availability: "Within 30 days",
    inGcc: false,
    icon: Activity,
  },
  {
    id: "OZ-4561",
    role: "Mechanical Technician",
    category: "Technical / Engineering",
    roleGroup: "Construction & Trades",
    location: "Gujarat, India",
    exp: 5,
    expBucket: "5+ years",
    license: "Gulf-Ready Certification",
    availability: "Immediate",
    inGcc: false,
    icon: Wrench,
  },
  {
    id: "OZ-4575",
    role: "Pediatric Nurse",
    category: "Healthcare",
    roleGroup: "Nursing",
    location: "Kerala, India",
    exp: 8,
    expBucket: "5+ years",
    license: "SCFHS Licensed",
    availability: "Immediate",
    inGcc: false,
    icon: HeartPulse,
  },
  {
    id: "OZ-4588",
    role: "Lab Technician",
    category: "Healthcare",
    roleGroup: "Allied Health (Lab, Radiology, OT Tech)",
    location: "Telangana, India",
    exp: 2,
    expBucket: "2–5 years",
    license: "DHA Eligible",
    availability: "Within 30 days",
    inGcc: false,
    icon: Activity,
  },
  {
    id: "OZ-4602",
    role: "Electrical Supervisor",
    category: "Technical / Engineering",
    roleGroup: "Construction & Trades",
    location: "Delhi NCR, India",
    exp: 6,
    expBucket: "5+ years",
    license: "GCC Experience",
    availability: "Within 60 days",
    inGcc: false,
    icon: Zap,
  },
  {
    id: "OZ-4616",
    role: "Physiotherapist",
    category: "Healthcare",
    roleGroup: "Allied Health (Lab, Radiology, OT Tech)",
    location: "Kerala, India",
    exp: 1,
    expBucket: "0–2 years",
    license: "Training Provided",
    availability: "Immediate",
    inGcc: false,
    icon: HeartPulse,
  },
  {
    id: "OZ-4630",
    role: "Head Nurse",
    category: "Healthcare",
    roleGroup: "Nursing",
    location: "Currently in UAE, open to relocate",
    exp: 9,
    expBucket: "5+ years",
    license: "DHA Licensed",
    availability: "Immediate",
    inGcc: true,
    icon: Stethoscope,
  },
];

const FILTER_GROUPS = {
  Category: ["Healthcare", "Technical / Engineering"],
  Role: [
    "Nursing",
    "Allied Health (Lab, Radiology, OT Tech)",
    "Biomedical / Engineering",
    "Admin / Support",
    "Construction & Trades",
  ],
  Experience: ["0–2 years", "2–5 years", "5+ years"],
  Location: ["India", "Currently in GCC, open to relocate"],
} as const;

const COUNTS: Record<string, number> = {
  Healthcare: 180,
  "Technical / Engineering": 60,
  Nursing: 95,
  "Allied Health (Lab, Radiology, OT Tech)": 45,
  "Biomedical / Engineering": 40,
  "Admin / Support": 20,
  "Construction & Trades": 40,
  "0–2 years": 50,
  "2–5 years": 110,
  "5+ years": 80,
  India: 210,
  "Currently in GCC, open to relocate": 30,
};

const ROLE_OPTIONS = [
  "ICU Nurse",
  "OT Nurse",
  "Staff Nurse",
  "Biomedical Technician",
  "Civil Engineer",
  "Mechanical Technician",
  "Electrical Supervisor",
  "Other",
];
const COUNTRY_OPTIONS = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "India",
  "Singapore",
  "UK",
  "Other",
];
const EXP_OPTIONS = ["Fresher", "1–3 years", "3–5 years", "5+ years"];

/* ============================================================
   HEADER
   ============================================================ */
function PageHeader({ onJump }: { onJump: (id: string) => void }) {
  const [activeTab, setActiveTab] = useState<"pool" | "form">("pool");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target.id === "talent-pool") setActiveTab("pool");
            if (e.target.id === "requirement-form") setActiveTab("form");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    const pool = document.getElementById("talent-pool");
    const form = document.getElementById("requirement-form");
    if (pool) observer.observe(pool);
    if (form) observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-navy pt-16 pb-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
          <span className="h-px w-8 bg-teal" />
          <span>Hire Through Ozone</span>
        </div>
        <h1 className="mt-5 max-w-[680px] text-[36px] font-extrabold leading-[1.15] text-surface md:text-[44px]">
          Browse verified talent.
          <br />
          <span className="text-teal">Post a requirement.</span>
        </h1>
        <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed text-white/65">
          240+ pre-screened candidates currently available across healthcare and technical roles.
          Submit a requirement and we'll match you directly — no marketplace, no noise.
        </p>
        <div className="mt-8 flex max-w-[480px] gap-3">
          <button
            onClick={() => {
              setActiveTab("pool");
              onJump("talent-pool");
            }}
            className={`flex-1 rounded-[10px] px-6 py-3.5 text-center text-[14px] font-semibold transition-all ${activeTab === "pool" ? "bg-surface text-navy-text" : "border-[1.5px] border-white/20 bg-transparent text-surface hover:bg-white/5"}`}
          >
            Browse Talent Pool
          </button>
          <button
            onClick={() => {
              setActiveTab("form");
              onJump("requirement-form");
            }}
            className={`flex-1 rounded-[10px] px-6 py-3.5 text-center text-[14px] font-semibold transition-all ${activeTab === "form" ? "bg-surface text-navy-text" : "border-[1.5px] border-white/20 bg-transparent text-surface hover:bg-white/5"}`}
          >
            Post a Requirement
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FILTER SIDEBAR
   ============================================================ */
type Filters = {
  Category: Set<string>;
  Role: Set<string>;
  Experience: Set<string>;
  Location: Set<string>;
  Availability: string;
};

function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[13px] text-body hover:text-navy-text">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-line text-teal focus:ring-teal"
      />
      <span className="flex-1">{label}</span>
      <span className="text-[12px] text-muted">({count})</span>
    </label>
  );
}

function Sidebar({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
  const toggle = (group: keyof Omit<Filters, "Availability">, value: string) => {
    const next = new Set(filters[group]);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setFilters({ ...filters, [group]: next });
  };

  const clearAll = () =>
    setFilters({
      Category: new Set(),
      Role: new Set(),
      Experience: new Set(),
      Location: new Set(),
      Availability: "Immediate",
    });

  return (
    <aside className="sticky top-[88px] h-fit w-full max-w-[280px] rounded-[14px] border border-line bg-surface p-6 card-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-navy-text">Filter Talent Pool</h3>
        <button onClick={clearAll} className="text-[13px] font-semibold text-teal hover:underline">
          Clear all
        </button>
      </div>

      {(Object.keys(FILTER_GROUPS) as Array<keyof typeof FILTER_GROUPS>).map((group) => (
        <div key={group} className="mt-6 border-t border-line pt-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted">{group}</p>
          <div className="mt-2 flex flex-col">
            {FILTER_GROUPS[group].map((opt) => (
              <FilterCheckbox
                key={opt}
                label={opt}
                count={COUNTS[opt] ?? 0}
                checked={filters[group as keyof Omit<Filters, "Availability">].has(opt)}
                onChange={() => toggle(group as keyof Omit<Filters, "Availability">, opt)}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-6 border-t border-line pt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted">Availability</p>
        <div className="mt-2 flex flex-col gap-2">
          {["Immediate", "Within 30 days", "Within 60 days"].map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2.5 text-[13px] text-body"
            >
              <input
                type="radio"
                name="availability"
                checked={filters.Availability === opt}
                onChange={() => setFilters({ ...filters, Availability: opt })}
                className="h-4 w-4 border-line text-teal focus:ring-teal"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-lg bg-alt p-3">
        <ShieldCheck className="h-4 w-4 flex-none text-teal" />
        <p className="text-[12px] leading-relaxed text-muted">
          Every profile below has passed our document and license verification.
        </p>
      </div>
    </aside>
  );
}

/* ============================================================
   TALENT POOL
   ============================================================ */
function TalentCard({
  candidate,
  onRequest,
}: {
  candidate: (typeof TALENT)[number];
  onRequest: () => void;
}) {
  const Icon = candidate.icon;
  const availColor =
    candidate.availability === "Immediate" ? "text-success-text" : "text-amber-600";
  return (
    <div className="group flex flex-col rounded-xl border border-line bg-surface p-[22px] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:card-shadow">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-alt">
          <Icon className="h-[22px] w-[22px] text-navy-text" />
        </div>
        <span className="rounded-md bg-success-bg px-2 py-[3px] text-[11px] font-bold text-success-text">
          Verified ✓
        </span>
      </div>
      <h3 className="mt-4 text-[16px] font-bold text-navy-text">{candidate.role}</h3>
      <p className="text-[13px] text-muted">Candidate #{candidate.id}</p>

      <div className="mt-3 flex flex-col gap-1.5 text-[13px] text-body">
        <p className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-muted" /> Currently in: {candidate.location}
        </p>
        <p className="flex items-center gap-2">
          <GraduationCap className="h-3.5 w-3.5 text-muted" /> Experience: {candidate.exp} years
        </p>
        <p className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-muted" /> License: {candidate.license}
        </p>
        <p className="flex items-center gap-2">
          <CircleDot className={`h-3.5 w-3.5 ${availColor}`} /> Availability:{" "}
          {candidate.availability}
        </p>
      </div>

      <button
        onClick={onRequest}
        className="mt-4 border-t border-[#F0F4F9] pt-4 text-left text-[14px] font-semibold text-teal hover:underline"
      >
        Request This Profile →
      </button>
    </div>
  );
}

function TalentPool({
  filters,
  setFilters,
  onRequest,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  onRequest: (c: (typeof TALENT)[number]) => void;
}) {
  const filtered = useMemo(() => {
    return TALENT.filter((c) => {
      if (filters.Category.size && !filters.Category.has(c.category)) return false;
      if (filters.Role.size && !filters.Role.has(c.roleGroup)) return false;
      if (filters.Experience.size && !filters.Experience.has(c.expBucket)) return false;
      if (filters.Location.size) {
        const tag = c.inGcc ? "Currently in GCC, open to relocate" : "India";
        if (!filters.Location.has(tag)) return false;
      }
      return true;
    });
  }, [filters]);

  const chips: { group: keyof Omit<Filters, "Availability">; value: string }[] = [];
  (Object.keys(FILTER_GROUPS) as Array<keyof Omit<Filters, "Availability">>).forEach((g) => {
    filters[g].forEach((v) => chips.push({ group: g, value: v }));
  });

  const removeChip = (group: keyof Omit<Filters, "Availability">, value: string) => {
    const next = new Set(filters[group]);
    next.delete(value);
    setFilters({ ...filters, [group]: next });
  };

  return (
    <section id="talent-pool" className="bg-bg py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <Sidebar filters={filters} setFilters={setFilters} />

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-body">
                Showing <span className="font-bold text-navy-text">{filtered.length}</span> of{" "}
                {TALENT.length} candidates
              </p>
              <select className="rounded-md border border-line bg-surface px-3 py-1.5 text-[13px] text-navy-text focus:border-teal focus:outline-none">
                <option>Sort by: Most Recently Verified</option>
                <option>Sort by: Experience (High to Low)</option>
                <option>Sort by: Availability (Immediate first)</option>
              </select>
            </div>

            {chips.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <button
                    key={chip.group + chip.value}
                    onClick={() => removeChip(chip.group, chip.value)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3 py-1 text-[12px] font-semibold text-teal hover:bg-teal hover:text-surface"
                  >
                    {chip.value} <X className="h-3 w-3" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <TalentCard key={c.id} candidate={c} onRequest={() => onRequest(c)} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-line bg-surface p-12 text-center">
                <p className="text-[16px] font-semibold text-navy-text">
                  No candidates match these filters.
                </p>
                <p className="mt-2 text-[14px] text-body">
                  Try clearing a filter or post a requirement and we'll source for you.
                </p>
              </div>
            )}

            {filtered.length > 0 && (
              <div className="mt-10 flex justify-center">
                <button className="rounded-[10px] border border-line bg-surface px-6 py-3 text-[14px] font-semibold text-navy-text hover:border-teal">
                  Load More Candidates
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REQUIREMENT FORM
   ============================================================ */
type FormData = {
  role: string;
  positions: number;
  country: string;
  experience: string;
  orgName: string;
  yourName: string;
  email: string;
  phoneCode: string;
  phone: string;
  orgType: string;
};

const INITIAL_FORM: FormData = {
  role: "",
  positions: 1,
  country: "",
  experience: "",
  orgName: "",
  yourName: "",
  email: "",
  phoneCode: "+971",
  phone: "",
  orgType: "",
};

function RequirementForm({
  prefill,
  clearPrefill,
}: {
  prefill: (typeof TALENT)[number] | null;
  clearPrefill: () => void;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [emailError, setEmailError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill) {
      const map: Record<string, string> = {
        "ICU Staff Nurse": "ICU Nurse",
        "OT Technician": "OT Nurse",
        "Staff Nurse (General)": "Staff Nurse",
        "Head Nurse": "Staff Nurse",
        "Pediatric Nurse": "Staff Nurse",
        "Biomedical Engineer": "Biomedical Technician",
        "Civil Site Engineer": "Civil Engineer",
        "Mechanical Technician": "Mechanical Technician",
        "Electrical Supervisor": "Electrical Supervisor",
      };
      setForm((f) => ({ ...f, role: map[prefill.role] || "Other" }));
    }
  }, [prefill]);

  const canStep1 = form.role && form.country;
  const canStep2 =
    form.orgName &&
    form.yourName &&
    form.email &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone &&
    form.orgType;

  if (submitted) {
    return (
      <div className="mx-auto max-w-[640px] rounded-2xl border border-line bg-soft p-10 text-center">
        <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-teal-light">
          <CheckCircle2 className="h-14 w-14 text-teal" strokeWidth={1.8} />
        </div>
        <h3 className="mt-6 text-[20px] font-extrabold text-navy-text">Requirement Received</h3>
        <p className="mx-auto mt-3 max-w-[400px] text-[14px] leading-relaxed text-body">
          Our team is reviewing your requirement now. Expect your first pre-screened candidate
          profile within 48 hours — we'll reach out on the email and number you provided.
        </p>
        <p className="mt-4 text-[13px] text-muted">
          Reference: REQ-2026-{Math.floor(1000 + Math.random() * 8999)}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(INITIAL_FORM);
            setStep(1);
            document.getElementById("talent-pool")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 rounded-[10px] border border-line bg-surface px-6 py-3 text-[14px] font-semibold text-navy-text hover:border-teal"
        >
          Browse Talent Pool
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px] rounded-2xl border border-line bg-soft p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-extrabold text-navy-text">Post a Requirement</h2>
        <span className="text-[13px] text-muted">Free to submit · No obligation</span>
      </div>

      {prefill && (
        <div className="mt-5 flex items-start justify-between gap-3 rounded-lg border border-success-border bg-success-bg p-3 anim-slide-up">
          <p className="text-[13px] text-success-text">
            Profile #{prefill.id} referenced — we'll prioritize matching this profile to your
            requirement.
          </p>
          <button onClick={clearPrefill} className="text-success-text hover:opacity-70">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Progress */}
      <div className="mt-6 mb-8">
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s < step ? "bg-teal" : s === step ? "bg-teal pulse-dot" : "bg-line"
              }`}
            />
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          {["Role Details", "Your Organization", "Review & Submit"].map((label, i) => (
            <p
              key={label}
              className={`flex-1 text-[11px] uppercase tracking-[0.04em] ${step === i + 1 ? "font-bold text-navy-text" : "text-muted"}`}
            >
              {label}
            </p>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div key="s1" className="flex flex-col gap-5 anim-slide-x">
          <Field label="Role / Category">
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className={inputCls}
            >
              <option value="">Select a role</option>
              {ROLE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <Field label="Number of Positions">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setForm({ ...form, positions: Math.max(1, form.positions - 1) })}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line hover:border-teal"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-12 text-center text-[15px] font-bold text-navy-text">
                {form.positions}
              </span>
              <button
                onClick={() => setForm({ ...form, positions: form.positions + 1 })}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line hover:border-teal"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </Field>

          <Field label="Preferred Location / Country">
            <select
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className={inputCls}
            >
              <option value="">Select a country</option>
              {COUNTRY_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <Field label="Experience Required">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {EXP_OPTIONS.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-[13px] font-semibold transition-all ${form.experience === opt ? "border-teal bg-teal-light text-teal" : "border-line bg-surface text-body hover:border-teal/40"}`}
                >
                  <input
                    type="radio"
                    name="exp"
                    className="hidden"
                    checked={form.experience === opt}
                    onChange={() => setForm({ ...form, experience: opt })}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </Field>

          <div className="flex justify-end pt-2">
            <button
              disabled={!canStep1}
              onClick={() => setStep(2)}
              className={`inline-flex items-center gap-2 rounded-[10px] px-6 py-3 text-[14px] font-semibold transition-all ${canStep1 ? "bg-teal text-surface hover:opacity-90" : "cursor-not-allowed bg-line text-muted"}`}
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div key="s2" className="flex flex-col gap-5 anim-slide-x">
          <Field label="Organization Name">
            <input
              value={form.orgName}
              onChange={(e) => setForm({ ...form, orgName: e.target.value })}
              className={inputCls}
              placeholder="e.g. Al Hammadi Hospital"
            />
          </Field>
          <Field label="Your Name">
            <input
              value={form.yourName}
              onChange={(e) => setForm({ ...form, yourName: e.target.value })}
              className={inputCls}
              placeholder="Full name"
            />
          </Field>
          <Field label="Work Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setEmailError("");
              }}
              onBlur={() => {
                if (form.email && !/\S+@\S+\.\S+/.test(form.email))
                  setEmailError("Please enter a valid email address.");
              }}
              className={inputCls}
              placeholder="you@company.com"
            />
            {emailError && <p className="mt-1 text-[12px] text-red-600">{emailError}</p>}
          </Field>
          <Field label="Phone / WhatsApp Number">
            <div className="flex gap-2">
              <select
                value={form.phoneCode}
                onChange={(e) => setForm({ ...form, phoneCode: e.target.value })}
                className={`${inputCls} max-w-[100px]`}
              >
                {["+91", "+971", "+966", "+974"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputCls}
                placeholder="Phone number"
              />
            </div>
          </Field>
          <Field label="Organization Type">
            <div className="grid grid-cols-2 gap-2">
              {["Hospital / Healthcare", "Construction / Engineering", "Oil & Gas", "Other"].map(
                (o) => (
                  <label
                    key={o}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-[13px] transition-all ${form.orgType === o ? "border-teal bg-teal-light text-teal font-semibold" : "border-line bg-surface text-body hover:border-teal/40"}`}
                  >
                    <input
                      type="radio"
                      name="orgType"
                      className="hidden"
                      checked={form.orgType === o}
                      onChange={() => setForm({ ...form, orgType: o })}
                    />
                    {o}
                  </label>
                ),
              )}
            </div>
          </Field>
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-body hover:text-navy-text"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              disabled={!canStep2}
              onClick={() => setStep(3)}
              className={`inline-flex items-center gap-2 rounded-[10px] px-6 py-3 text-[14px] font-semibold transition-all ${canStep2 ? "bg-teal text-surface hover:opacity-90" : "cursor-not-allowed bg-line text-muted"}`}
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div key="s3" className="flex flex-col gap-5 anim-slide-x">
          <div className="rounded-[10px] border border-line bg-surface p-5">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-navy-text">Role Details</p>
              <button onClick={() => setStep(1)} className="text-[13px] font-semibold text-teal">
                Edit
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Summary label="Role" value={form.role} />
              <Summary label="Positions" value={String(form.positions)} />
              <Summary label="Country" value={form.country} />
              <Summary label="Experience" value={form.experience || "—"} />
            </div>
          </div>
          <div className="rounded-[10px] border border-line bg-surface p-5">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-navy-text">Your Organization</p>
              <button onClick={() => setStep(2)} className="text-[13px] font-semibold text-teal">
                Edit
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Summary label="Organization" value={form.orgName} />
              <Summary label="Your Name" value={form.yourName} />
              <Summary label="Email" value={form.email} />
              <Summary label="Phone" value={`${form.phoneCode} ${form.phone}`} />
              <Summary label="Type" value={form.orgType} />
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-2 text-[13px] text-body">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-line text-teal"
            />
            I confirm the above details are accurate
          </label>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-body hover:text-navy-text"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              disabled={!confirmed}
              onClick={() => setSubmitted(true)}
              className={`w-full rounded-[10px] px-6 py-4 text-[16px] font-semibold transition-all ${confirmed ? "bg-teal text-surface hover:opacity-90" : "cursor-not-allowed bg-line text-muted"}`}
            >
              Submit Requirement →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-line bg-surface px-3 py-2.5 text-[14px] text-navy-text focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] text-muted">{label}</p>
      <p className="text-[14px] font-semibold text-navy-text">{value || "—"}</p>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
function HirePage() {
  const search = Route.useSearch();
  const [filters, setFilters] = useState<Filters>({
    Category: new Set(),
    Role: new Set(),
    Experience: new Set(),
    Location: new Set(),
    Availability: "Immediate",
  });
  const [prefill, setPrefill] = useState<(typeof TALENT)[number] | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (search.focus === "form") setTimeout(() => scrollTo("requirement-form"), 100);
    else if (search.focus === "pool") setTimeout(() => scrollTo("talent-pool"), 100);
  }, [search.focus]);

  const handleRequest = (c: (typeof TALENT)[number]) => {
    setPrefill(c);
    setTimeout(() => scrollTo("requirement-form"), 50);
  };

  return (
    <>
      <PageHeader onJump={scrollTo} />
      <TalentPool filters={filters} setFilters={setFilters} onRequest={handleRequest} />
      <section id="requirement-form" className="bg-surface py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <RequirementForm prefill={prefill} clearPrefill={() => setPrefill(null)} />
        </div>
      </section>
    </>
  );
}
