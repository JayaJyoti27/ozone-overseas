import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/home/Nav";
import {
  ShieldCheck,
  Clock,
  FileCheck,
  Phone,
  Briefcase,
  ChevronDown,
  Hospital,
  HardHat,
  Fuel,
  Cog,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire verified talent in 48 hours | Ozone" },
      {
        name: "description",
        content:
          "Submit a requirement, get your first pre-screened candidate in 48 hours. 200+ hospitals and companies trust Ozone for compliant hiring.",
      },
      { property: "og:title", content: "For Employers — Hire verified talent | Ozone" },
      {
        property: "og:description",
        content: "200+ employer partners. 48-hour first match. Zero compliance risk.",
      },
    ],
  }),
  component: ForEmployersPage,
});

/* ------------------------------------------------------------------ */
/* SHARED PRIMITIVES                                                  */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-muted ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-muted/50" />
      <span>{children}</span>
      {center && <span className="h-px w-8 bg-muted/50" />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 1 — HERO                                                   */
/* ------------------------------------------------------------------ */
const PIPELINE = [
  {
    initials: "AN",
    role: "ICU Nurse",
    meta: "6 yrs · SCFHS Licensed",
    match: 98,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "RK",
    role: "OT Technician",
    meta: "4 yrs · DHA Eligible",
    match: 95,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    initials: "PS",
    role: "Biomedical Engineer",
    meta: "5 yrs · GCC Exp",
    match: 92,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    initials: "MV",
    role: "Staff Nurse",
    meta: "3 yrs · BLS Certified",
    match: 97,
    tone: "bg-rose-100 text-rose-700",
  },
];

function LivePipelineCard() {
  const [items, setItems] = useState(PIPELINE);
  useEffect(() => {
    const t = setInterval(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <div className="w-full max-w-[460px] overflow-hidden rounded-2xl bg-surface card-shadow-lg">
        <div className="flex items-center justify-between border-b border-bg px-6 py-[18px]">
          <span className="text-[13px] font-semibold text-navy-text">Incoming Candidates</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal pulse-dot" />
            <span className="text-[11px] font-bold text-teal">Live</span>
          </div>
        </div>
        <div className="divide-y divide-[#F8FAFC]">
          {items.map((c, i) => (
            <div key={c.initials + i} className="flex items-center gap-3 px-6 py-[14px] anim-fade">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${c.tone}`}
              >
                {c.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-navy-text">{c.role}</p>
                <p className="truncate text-[12px] text-muted">{c.meta}</p>
              </div>
              <span className="rounded-md bg-success-bg px-2 py-[3px] text-[11px] font-bold text-success-text">
                {c.match}% Match
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between bg-soft px-6 py-[14px]">
          <span className="text-[12px] text-muted">48h avg. first candidate</span>
          <Link to="/hire" className="text-[12px] font-semibold text-teal">
            View Talent Pool →
          </Link>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy px-4 py-3 card-shadow-lg">
        <p className="text-[11px] font-bold text-teal">✅ Just Verified</p>
        <p className="text-[12px] text-surface">12 ICU Nurses · SCFHS Pass</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid min-h-[90vh] max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pt-24 pb-20 md:grid-cols-[55%_45%] md:pt-[140px]">
        <div>
          <Eyebrow>For Employers</Eyebrow>
          <h1 className="mt-6 text-[44px] font-extrabold leading-[1.1] text-navy-text md:text-[60px]">
            Hire verified talent,
            <br />
            <span className="text-teal">not resumes.</span>
          </h1>
          <p className="mt-5 max-w-[460px] text-[18px] leading-[1.7] text-body">
            Submit a requirement, get your first pre-screened candidate in 48 hours. 200+ hospitals
            and companies trust Ozone for compliant, verified hiring across the GCC and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/hire"
              search={{ focus: "form" } as never}
              className="rounded-[10px] bg-navy px-7 py-4 text-[15px] font-semibold text-surface transition-opacity hover:opacity-90"
            >
              Post a Requirement
            </Link>
            <Link
              to="/hire"
              search={{ focus: "pool" } as never}
              className="rounded-[10px] border-[1.5px] border-navy-text px-7 py-4 text-[15px] font-semibold text-navy-text hover:bg-navy-text hover:text-surface"
            >
              Browse Talent Pool
            </Link>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-rose-200", "bg-amber-200", "bg-sky-200", "bg-emerald-200"].map((c, i) => (
                <div key={i} className={`h-7 w-7 rounded-full border-2 border-bg ${c}`} />
              ))}
            </div>
            <span className="text-[13px] text-muted">Trusted by 200+ hospitals & companies</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <LivePipelineCard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 2 — STATS STRIP                                            */
/* ------------------------------------------------------------------ */
function Sparkline({ points, flat }: { points?: number[]; flat?: boolean }) {
  const pts = flat ? [10, 10, 10, 10, 10, 10, 10] : points || [12, 8, 14, 10, 16, 12, 18];
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const range = max - min || 1;
  const path = pts
    .map((v, i) => {
      const x = (i / (pts.length - 1)) * 100;
      const y = 30 - ((v - min) / range) * 28;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="mt-3 h-10 w-full" preserveAspectRatio="none">
      <path d={path} fill="none" stroke="#0BAF8A" strokeWidth="1.5" />
      {flat && <circle cx="100" cy="2" r="2.5" fill="#0BAF8A" />}
    </svg>
  );
}

function StatsStrip() {
  return (
    <section className="bg-navy py-[72px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[26px] font-bold leading-[1.5] text-surface">
            200+ employer partners. 48-hour first match. Zero compliance risk. Every time.
          </p>
          <p className="mt-4 text-[14px] text-[#64748B]">
            Every candidate we send has already passed verification. You're never the first line of
            defense.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { num: "200+", label: "Employer Partners" },
            { num: "48h", label: "Avg. First Candidate" },
            { num: "MEA", label: "Licensed & Compliant", flat: true },
          ].map((s, i) => (
            <div key={i} className="border-l border-white/10 pl-4">
              <p className="text-[34px] font-extrabold text-surface">{s.num}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white/50">
                {s.label}
              </p>
              <Sparkline flat={s.flat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 3 — WHY EMPLOYERS CHOOSE US                                */
/* ------------------------------------------------------------------ */
const WHY_ROWS = [
  {
    icon: ShieldCheck,
    title: "Zero Compliance Risk",
    body: "Every placement is fully MEA compliant. We carry the regulatory burden so your HR team doesn't have to.",
  },
  {
    icon: Clock,
    title: "48-Hour First Match",
    body: "Submit your requirement and receive your first pre-screened candidate profile within two business days, on average.",
  },
  {
    icon: FileCheck,
    title: "Documentation, Fully Managed",
    body: "We handle HAAD/DHA/SCFHS licensing, attestation, and visa paperwork end-to-end — you only sign where required.",
  },
  {
    icon: Phone,
    title: "One Dedicated Contact",
    body: "A single account manager owns your requirement from submission to boarding. No call centers, no hand-offs.",
  },
];

function WhyEmployers() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-surface py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex justify-center">
          <Eyebrow center>Why Employers Choose Us</Eyebrow>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-[40px] font-extrabold leading-[1.1] text-navy-text">
              We screen so you
              <br />
              don't have to.
            </h2>
            <p className="mt-5 max-w-[380px] text-[16px] leading-relaxed text-body">
              Every candidate arrives pre-verified — qualifications, license eligibility, and
              relocation readiness already checked.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                to="/hire"
                className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-[14px] font-semibold text-surface hover:opacity-90"
              >
                Post a Requirement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/hire"
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-teal px-6 py-3.5 text-[14px] font-semibold text-teal hover:bg-teal hover:text-surface"
              >
                Browse Talent Pool <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {WHY_ROWS.map((row, i) => {
              const Icon = row.icon;
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpen(i)}
                  className={`group rounded-2xl border p-6 text-left transition-all ${isOpen ? "border-teal bg-soft" : "border-line bg-surface hover:border-teal/40"}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${isOpen ? "bg-teal text-surface" : "bg-alt text-navy-text"}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-bold text-navy-text">{row.title}</h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14px] leading-relaxed text-body">{row.body}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 4 — HOW HIRING WORKS                                       */
/* ------------------------------------------------------------------ */
const STEPS = [
  {
    n: "01",
    icon: FileCheck,
    title: "Submit Requirement",
    body: "Tell us the role, location, and headcount. Takes under 5 minutes, no fee to post.",
    tags: ["Same day start", "No fee"],
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Receive Shortlist",
    body: "We manually verify candidates against your requirement and send your first match within 48 hours.",
    tags: ["48 hours", "Pre-screened"],
  },
  {
    n: "03",
    icon: Check,
    title: "Interview & Select",
    body: "Review profiles, interview shortlisted candidates, and confirm your hires.",
    tags: ["Weeks 1–3", "Your call"],
  },
  {
    n: "04",
    icon: Briefcase,
    title: "Docs, Visa & Boarding",
    body: "We manage licensing, attestation, and visa processing through to your candidate's first day.",
    tags: ["Weeks 3–8", "Fully managed"],
  },
];

function Process() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const sec = document.getElementById("process");
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.5 - rect.top) / rect.height),
      );
      setActive(Math.min(3, Math.floor(progress * 4)));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="bg-alt py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex justify-center">
          <Eyebrow center>The Process</Eyebrow>
        </div>
        <h2 className="mt-6 text-center text-[48px] font-extrabold leading-[1.1] text-navy-text">
          Requirement to onboarding,
          <br />
          in 6–8 weeks.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-[16px] text-body">
          A transparent pipeline. You'll always know exactly how many candidates are in motion and
          where they stand.
        </p>
        <div className="relative mt-14 grid grid-cols-1 gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="absolute right-[-10px] top-[60px] hidden h-px w-5 border-t-2 border-dashed border-line md:block" />
                )}
                <div
                  className={`h-full rounded-2xl border p-6 transition-all ${isActive ? "border-teal bg-surface card-shadow-lg -translate-y-1" : "border-line bg-surface card-shadow"}`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.08em] ${isActive ? "bg-teal text-surface" : "bg-alt text-muted"}`}
                  >
                    STEP {s.n}
                  </span>
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-alt">
                    <Icon className="h-5 w-5 text-navy-text" />
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-navy-text">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-alt px-2 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 5 — INDUSTRIES                                             */
/* ------------------------------------------------------------------ */
const INDUSTRIES = [
  { icon: Hospital, label: "Hospitals & Healthcare Networks", tags: ["120+ Partners", "GCC-Wide"] },
  { icon: HardHat, label: "Construction & Infrastructure", tags: ["40+ Partners", "Saudi & UAE"] },
  { icon: Fuel, label: "Oil & Gas", tags: ["25+ Partners", "Technical Roles"] },
  { icon: Cog, label: "Engineering & Manufacturing", tags: ["15+ Partners", "Multi-Country"] },
  { icon: Wrench, label: "Facilities & Technical Services", tags: ["Regional", "On-Demand"] },
];

function Industries() {
  return (
    <section className="bg-surface py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Eyebrow>Industries We Serve</Eyebrow>
        <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-[40%_55%]">
          <div>
            <h2 className="text-[48px] font-extrabold leading-[1.1] text-navy-text">
              Built for the sectors
              <br />
              that can't
              <br />
              <span className="text-teal">afford a bad hire.</span>
            </h2>
            <p className="mt-5 max-w-[360px] text-[16px] leading-relaxed text-body">
              Healthcare and technical roles carry real compliance and safety stakes. We've built
              our verification process around that.
            </p>
            <ul className="mt-6 space-y-2 text-[14px] text-body">
              {[
                "Hospitals & healthcare networks",
                "Construction & infrastructure",
                "Oil & gas",
                "Engineering & manufacturing",
                "Facilities & technical services",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/hire"
              className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-[14px] font-semibold text-surface hover:opacity-90"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-all hover:border-teal/40 hover:card-shadow"
                >
                  <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-teal transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alt">
                    <Icon className="h-5 w-5 text-navy-text" />
                  </div>
                  <h3 className="flex-1 text-[16px] font-bold text-navy-text">{ind.label}</h3>
                  <div className="hidden gap-2 md:flex">
                    {ind.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-alt px-2 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 6 — SUCCESS STORIES                                        */
/* ------------------------------------------------------------------ */
function SuccessStories() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex justify-center">
          <Eyebrow center>Success Stories</Eyebrow>
        </div>
        <h2 className="mt-6 text-center text-[48px] font-extrabold leading-[1.1] text-navy-text">
          From requirement
          <br />
          to <span className="text-teal">fully staffed.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-[60%_1fr]">
          {/* Featured */}
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 card-shadow-lg">
            <div className="absolute inset-0 shimmer-bg" />
            <div className="relative">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-teal">
                Employer · Saudi Arabia
              </span>
              <h3 className="mt-6 text-[28px] font-extrabold leading-tight text-surface">
                12 ICU Nurses Placed
                <br />
                In Just <span className="text-teal">8 Weeks.</span>
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-white/75">
                "Ozone delivered 12 verified ICU nurses to our Riyadh facility within 8 weeks. Every
                single one passed SCFHS licensing. The documentation was flawless."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-[13px] font-bold text-navy">
                  AR
                </div>
                <div>
                  <p className="text-[14px] font-bold text-surface">Dr. Ahmed Al-Rashidi</p>
                  <p className="text-[12px] text-white/60">
                    HR Director, Al Hammadi Hospital, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 small cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                metric: "3 Hires",
                label: "In 45 Days",
                quote:
                  "Highly relevant profiles, no resume noise. Exactly what we asked for, delivered fast.",
                name: "Priya Menon",
                role: "Hiring Manager, UAE",
              },
              {
                metric: "0",
                label: "Compliance Issues",
                quote:
                  "Every license check, every attestation — handled before the candidate even landed. Zero surprises.",
                name: "Khalid Al-Mutairi",
                role: "Operations Director, Kuwait",
              },
              {
                metric: "48h",
                label: "First Candidate",
                quote:
                  "We posted on a Tuesday morning. By Thursday we had three qualified profiles to review.",
                name: "Fatima Al-Zaabi",
                role: "Talent Acquisition Lead, Qatar",
              },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-line bg-surface p-5 card-shadow">
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted">
                  Employer
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[26px] font-extrabold text-teal">{c.metric}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                    {c.label}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-body">"{c.quote}"</p>
                <p className="mt-3 text-[12px] font-semibold text-navy-text">
                  {c.name} <span className="font-normal text-muted">· {c.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 7 — FAQ                                                    */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "Is there a fee to post a requirement?",
    a: "No. Posting a requirement and receiving candidate profiles is free. Our fee structure is discussed only once you're ready to proceed with a hire.",
  },
  {
    q: "How fast can we actually get candidates?",
    a: "Most employers receive their first pre-screened profile within 48 hours of submitting a requirement, though specialized or senior roles can take slightly longer.",
  },
  {
    q: "Who handles visa and licensing compliance?",
    a: "We do, end-to-end. HAAD/DHA/SCFHS licensing, attestation, and visa processing are managed by our team — you're kept informed but not burdened with the paperwork.",
  },
  {
    q: "Can we interview candidates ourselves?",
    a: "Always. We send you verified, shortlisted profiles — final interviews and hiring decisions remain entirely yours.",
  },
  {
    q: "What if a placed candidate doesn't work out?",
    a: "We stay engaged through the first 30 days on the job specifically to catch and resolve early issues before they become a problem.",
  },
  {
    q: "Do you only work with hospitals?",
    a: "No — while healthcare is our largest vertical, we also place technical and engineering talent in construction, oil & gas, and manufacturing.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface py-[100px]">
      <div className="mx-auto max-w-[720px] px-6">
        <div className="flex justify-center">
          <Eyebrow center>Common Questions</Eyebrow>
        </div>
        <h2 className="mt-6 text-center text-[40px] font-extrabold leading-[1.1] text-navy-text">
          Questions employers
          <br />
          actually ask us.
        </h2>
        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl border bg-surface ${isOpen ? "border-teal" : "border-line"}`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 origin-top bg-teal transition-transform duration-300 ${isOpen ? "scale-y-100" : "scale-y-0"}`}
                />
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-navy-text">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-muted transition-transform ${isOpen ? "rotate-180 text-teal" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-[1.7] text-body">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 8 — FINAL CTA                                              */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section id="final-cta" className="bg-alt py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="text-center text-[48px] font-extrabold leading-[1.1] text-navy-text">
          Ready to hire
          <br />
          <span className="text-teal">verified talent?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-[16px] text-body">
          Post a requirement or browse our talent pool first. Either way, your first match is 48
          hours away.
        </p>
        <div className="mx-auto mt-12 max-w-[720px]">
          <div className="conic-border rounded-2xl bg-navy p-12 card-shadow-lg">
            <span className="conic-border-inner" />
            <div className="relative">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white/[0.06]">
                <Briefcase className="h-6 w-6 text-surface" />
              </div>
              <h3 className="mt-6 text-[26px] font-extrabold text-surface">
                Hire Faster, Hire Smarter.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                Stop waiting weeks for unqualified CVs. Submit your requirement once — our team
                delivers pre-screened candidates in 48 hours.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate({ to: "/hire", search: { focus: "form" } as never })}
                  className="rounded-[10px] bg-teal px-6 py-3.5 text-[14px] font-semibold text-surface hover:opacity-90"
                >
                  Post a Requirement →
                </button>
                <button
                  onClick={() => navigate({ to: "/hire", search: { focus: "pool" } as never })}
                  className="rounded-[10px] border border-white/30 px-6 py-3.5 text-[14px] font-semibold text-surface hover:bg-white/10"
                >
                  Browse Talent Pool
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */

function ForEmployersPage() {
  return (
    <>
      <Nav />

      <Hero />
      <StatsStrip />
      <WhyEmployers />
      <Process />
      <Industries />
      <SuccessStories />
      <FAQ />
      <FinalCTA />
    </>
  );
}
