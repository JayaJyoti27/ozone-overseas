import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

const FAQS = [
  {
    q: "Do I need a license before I apply to roles in Saudi Arabia?",
    a: "No. Candidates can apply before securing an SCFHS license — Ozone guides eligible candidates through the licensing process after shortlisting.",
  },
  {
    q: "What is the typical salary range for nursing roles in Saudi Arabia?",
    a: "Salary varies by role, specialty, and experience. ICU nursing roles typically range from SAR 6,000–8,500 per month; exact figures are confirmed per employer.",
  },
  {
    q: "How long does the visa process take for Saudi Arabia?",
    a: "Most candidates complete the full process, including visa processing, within 6 to 8 weeks of being shortlisted.",
  },
  {
    q: "Is accommodation provided for placements in Saudi Arabia?",
    a: "Most of Ozone's hospital partners in Saudi Arabia provide accommodation or a housing allowance; this is confirmed as part of each specific role's offer.",
  },
  {
    q: "Does Ozone charge candidates any fee for Saudi Arabia placements?",
    a: "No. Ozone does not charge candidates at any stage of the Saudi Arabia recruitment process; fees are paid by the hiring employer.",
  },
];

const JOBS = [
  {
    title: "ICU Staff Nurse",
    tag: "Healthcare",
    employer: "Leading Tertiary Hospital",
    city: "Riyadh",
    meta: ["Full-time", "2+ yrs experience", "SCFHS required"],
    salary: "SAR 6,500–8,500 / month",
  },
  {
    title: "Mechanical Technician",
    tag: "Technical",
    employer: "Industrial Engineering Group",
    city: "Dammam",
    meta: ["Full-time", "ITI/Diploma", "3+ yrs experience"],
    salary: "SAR 4,000–5,500 / month",
  },
  {
    title: "Pediatric Nurse",
    tag: "Healthcare",
    employer: "Private Hospital Network",
    city: "Jeddah",
    meta: ["Full-time", "BSc Nursing", "SCFHS required"],
    salary: "SAR 6,000–7,800 / month",
  },
  {
    title: "OT Nurse",
    tag: "Healthcare",
    employer: "Multi-specialty Hospital",
    city: "Riyadh",
    meta: ["Full-time", "2+ yrs OT exp.", "SCFHS required"],
    salary: "SAR 6,800–8,800 / month",
  },
];

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ozone Overseas",
  url: "/",
  logo: "/og-image.png",
  description:
    "Licensed (MEA, Government of India) international recruitment partner placing healthcare and technical professionals into verified roles across the Gulf since 2009.",
  areaServed: "Saudi Arabia",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "/countries" },
    { "@type": "ListItem", position: 3, name: "Saudi Arabia", item: "/countries/saudi-arabia" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const JOB_SCHEMAS = JOBS.map((j) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: j.title,
  description: `${j.title} role with ${j.employer} in ${j.city}, Saudi Arabia. ${j.meta.join(". ")}.`,
  datePosted: new Date().toISOString().split("T")[0],
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: j.employer,
    sameAs: "/",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: j.city,
      addressCountry: "SA",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "SAR",
    value: { "@type": "QuantitativeValue", unitText: "MONTH" },
  },
}));

export const Route = createFileRoute("/country-pages/Saudi")({
  head: () => ({
    meta: [
      { title: "Healthcare & Technical Recruitment to Saudi Arabia | Ozone Overseas" },
      {
        name: "description",
        content:
          "Ozone Overseas places nurses, allied health & technical professionals from India into verified roles in Saudi Arabia. SCFHS licensing & visa handled.",
      },
      {
        property: "og:title",
        content: "Healthcare & Technical Recruitment to Saudi Arabia | Ozone Overseas",
      },
      {
        property: "og:description",
        content:
          "482 placements since 2009. Verified employer partners across Riyadh, Jeddah & Dammam. SCFHS-compliant nursing and technical recruitment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/countries/saudi-arabia" },
      { property: "og:image", content: "/og-saudi-arabia.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Healthcare & Technical Recruitment to Saudi Arabia" },
      {
        name: "twitter:description",
        content:
          "Ozone Overseas places healthcare and technical talent from India into verified Saudi Arabia roles.",
      },
    ],
    links: [{ rel: "canonical", href: "/countries/saudi-arabia" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_SCHEMA) },
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_SCHEMA) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
      ...JOB_SCHEMAS.map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    ],
  }),
  component: SaudiArabiaPage,
});

function SaudiArabiaPage() {
  return (
    <div className="bg-[#EEF2F7] text-[#0D1B2A]">
      <Nav />

      {/* SECTION 1 — HERO */}
      <section className="relative bg-[#0F1C2E] pt-[148px] pb-[70px] overflow-hidden">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #0BAF8A 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.35fr_1fr] gap-14 items-center">
          {/* LEFT */}
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#94A3B8]">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href="/countries" className="hover:text-white transition">
                    Countries
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/90" aria-current="page">
                  Saudi Arabia
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 ozone-anim">
              <span className="block w-8 h-px bg-[#0BAF8A]" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8]">
                RECRUITMENT TO SAUDI ARABIA
              </span>
            </div>

            <h1 className="text-white font-extrabold text-[36px] md:text-[52px] leading-[1.15] ozone-anim">
              <span aria-hidden="true">🇸🇦</span> Healthcare &amp; Technical
              <br className="hidden md:block" />
              <span className="text-[#0BAF8A]"> Recruitment to Saudi Arabia.</span>
            </h1>

            <p className="mt-[18px] text-[17px] leading-[1.75] text-white/75 max-w-[560px]">
              Ozone Overseas places nurses, allied health professionals, and technical specialists
              from India into verified roles across Saudi Arabia's hospitals, construction, and
              engineering sectors. Since 2009, we've placed 482 candidates in the Kingdom, managing
              SCFHS licensing, visa sponsorship, and relocation from application to boarding.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["482", "Placed in Saudi Arabia"],
                ["42", "Open Roles"],
                ["35+", "Employer Partners"],
                ["6–8 wk", "Avg. Process"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-[20px] font-extrabold text-white leading-none">{n}</div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-wider text-[#64748B]">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-[14px]">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 bg-[#0BAF8A] hover:bg-[#099d7b] transition text-white font-semibold text-[14px] px-6 py-3 rounded-full"
              >
                View Open Roles ↓
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 transition text-white font-semibold text-[14px] px-6 py-3 rounded-full"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* RIGHT — visual: stacked floating cards */}
          <div className="hidden lg:block relative h-[460px]">
            {/* main card */}
            <div
              className="absolute top-0 right-0 w-[360px] bg-white rounded-[16px] p-6 ozone-anim"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-[10px] bg-[#0F1C2E] flex items-center justify-center text-xl"
                  aria-hidden="true"
                >
                  🇸🇦
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                    Live Roles Today
                  </div>
                  <div className="text-[20px] font-extrabold text-[#0D1B2A] leading-none mt-1">
                    42 Open Positions
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["ICU Staff Nurse", "Riyadh", "SAR 6.5–8.5k"],
                  ["Mechanical Tech.", "Dammam", "SAR 4–5.5k"],
                  ["Pediatric Nurse", "Jeddah", "SAR 6–7.8k"],
                ].map(([t, c, s]) => (
                  <div
                    key={t}
                    className="flex items-center justify-between gap-3 py-2 border-b border-[#DDE3ED] last:border-0"
                  >
                    <div>
                      <div className="text-[13px] font-bold text-[#0D1B2A]">{t}</div>
                      <div className="text-[11px] text-[#94A3B8]">{c} · Full-time</div>
                    </div>
                    <div className="text-[12px] font-semibold text-[#0BAF8A]">{s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0BAF8A] font-semibold">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0BAF8A] animate-pulse"
                    aria-hidden="true"
                  />
                  Updated today
                </span>
                <a
                  href="#open-roles"
                  className="text-[12px] font-semibold text-[#0D1B2A] hover:text-[#0BAF8A]"
                >
                  View all →
                </a>
              </div>
            </div>

            {/* badge card 1 */}
            <div
              className="absolute bottom-6 left-0 w-[220px] bg-[#0BAF8A] rounded-[14px] p-5 text-white"
              style={{ boxShadow: "0 20px 50px rgba(11,175,138,0.35)" }}
            >
              <div className="text-[11px] uppercase tracking-wider opacity-80 font-semibold">
                SCFHS Licensed
              </div>
              <div className="mt-2 text-[22px] font-extrabold leading-none">100% Compliant</div>
              <div className="mt-1.5 text-[12px] opacity-80">Every healthcare placement</div>
            </div>

            {/* badge card 2 */}
            <div className="absolute top-[60%] right-10 w-[200px] bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-[14px] p-4 text-white">
              <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                Active Since
              </div>
              <div className="mt-1 text-[26px] font-extrabold leading-none">2009</div>
              <div className="mt-1 text-[11px] text-white/60">MEA Licensed, Govt. of India</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="bg-white py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0D1B2A] leading-tight">
              Recruiting healthcare and technical talent for the Saudi market.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-[#4A5568]">
              <p>
                Saudi Arabia's Vision 2030 healthcare expansion has driven sustained demand for
                qualified nurses, allied health professionals, and technical specialists,
                particularly across Riyadh, Jeddah, and Dammam. Hospitals and companies operating
                under Ministry of Health and private healthcare networks require internationally
                sourced talent to meet growth targets, with India remaining one of the largest
                source countries for licensed nursing staff in the Kingdom.
              </p>
              <p>
                Ozone Overseas has operated as a licensed recruitment partner for Saudi Arabia
                placements since 2009, working directly with hospital groups including Al Hammadi
                Hospital and other verified employer partners. Every candidate is screened for
                qualification authenticity, license eligibility, and relocation readiness before
                being shared with an employer — reducing time-to-hire and compliance risk on the
                employer side. Employers can{" "}
                <a href="/for-employers" className="text-[#0BAF8A] font-semibold hover:underline">
                  partner with our Saudi Arabia recruitment desk
                </a>{" "}
                for ongoing hiring needs.
              </p>
              <p>
                Placements span ICU and general nursing, operating theatre staff, biomedical
                technicians, radiology and lab technicians, and pediatric nursing on the healthcare
                side, alongside mechanical, civil, and electrical technical roles supporting Saudi
                Arabia's construction and infrastructure sector. Candidates can{" "}
                <a href="/jobs" className="text-[#0BAF8A] font-semibold hover:underline">
                  browse open nursing roles in Saudi Arabia
                </a>{" "}
                or explore the full{" "}
                <a href="/countries" className="text-[#0BAF8A] font-semibold hover:underline">
                  Gulf countries hub
                </a>
                .
              </p>
              <p>
                All healthcare placements require SCFHS (Saudi Commission for Health Specialties)
                license eligibility, which Ozone supports candidates through as part of the standard
                process, alongside Prometric exam coaching where applicable. Detailed candidate
                guidance is available on the{" "}
                <a href="/for-candidates" className="text-[#0BAF8A] font-semibold hover:underline">
                  for-candidates page
                </a>
                .
              </p>
            </div>
          </div>

          {/* At-a-glance card */}
          <aside className="md:col-span-2">
            <div
              className="bg-[#F8FAFC] border border-[#DDE3ED] rounded-[14px] p-7"
              style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
            >
              <h3 className="text-[14px] font-bold text-[#0D1B2A] mb-5">
                Saudi Arabia at a Glance
              </h3>
              <dl className="space-y-3 text-[13.5px]">
                {[
                  ["Capital", "Riyadh"],
                  ["Primary Hiring Cities", "Riyadh, Jeddah, Dammam"],
                  ["Core Sectors", "Healthcare, Construction, Engineering"],
                  ["Key License", "SCFHS"],
                  ["Avg. Process Time", "6–8 weeks"],
                  ["Active Since", "2009"],
                  ["Currency", "Saudi Riyal (SAR)"],
                  ["Working Hours", "48 hrs/week typical"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 pb-3 border-b border-[#DDE3ED] last:border-0 last:pb-0"
                  >
                    <dt className="text-[#94A3B8]">{k}</dt>
                    <dd className="text-[#0D1B2A] font-semibold text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 3 — REQUIREMENTS */}
      <section className="bg-[#F0F4F9] py-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(11,175,138,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
            {/* LEFT — sticky header */}
            <div className="lg:sticky lg:top-24">
              <div
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-[#0BAF8A] px-3 py-1.5 rounded-full"
                style={{ background: "rgba(11,175,138,0.1)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BAF8A]" aria-hidden="true" />
                ELIGIBILITY
              </div>
              <h2 className="mt-5 text-[28px] md:text-[40px] font-extrabold text-[#0D1B2A] leading-[1.1]">
                What it takes <br />
                to qualify.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4A5568] max-w-[380px]">
                General requirements for healthcare and technical roles in Saudi Arabia. Exact
                criteria vary by specific position and employer — confirmed during screening.
              </p>
              <div
                className="mt-6 p-4 bg-white border border-[#DDE3ED] rounded-[12px]"
                style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
              >
                <div className="text-[12px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                  Not sure if you qualify?
                </div>
                <a
                  href="/contact"
                  className="mt-1 inline-flex items-center gap-1 text-[14px] font-bold text-[#0D1B2A] hover:text-[#0BAF8A]"
                >
                  Get a free eligibility check →
                </a>
              </div>
            </div>

            {/* RIGHT — numbered requirement cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  t: "Recognized Nursing or Technical Qualification",
                  b: "A government-recognized nursing degree/diploma or technical certification relevant to the applied role.",
                  icon: "🎓",
                },
                {
                  t: "SCFHS or Relevant License Eligibility",
                  b: "Healthcare candidates must be eligible for Saudi Commission for Health Specialties licensing; Ozone supports the application and exam process.",
                  icon: "📜",
                },
                {
                  t: "English Proficiency",
                  b: "Functional spoken and written English sufficient for clinical or technical communication in a multinational team environment.",
                  icon: "🗣️",
                },
                {
                  t: "Relevant Experience",
                  b: "Minimum 1–2 years of relevant experience for most roles; entry-level positions with training support are available for some categories.",
                  icon: "⏱️",
                },
              ].map((r, i) => (
                <article
                  key={r.t}
                  className="group relative bg-white border border-[#DDE3ED] rounded-[16px] p-6 hover:border-[#0BAF8A]/50 hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
                      style={{ background: "rgba(11,175,138,0.1)" }}
                      aria-hidden="true"
                    >
                      {r.icon}
                    </div>
                    <span
                      className="text-[28px] font-extrabold text-[#0D1B2A]/[0.06] leading-none"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0D1B2A] leading-snug">{r.t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#4A5568]">{r.b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[28px] md:text-[36px] font-extrabold text-[#0D1B2A] leading-tight max-w-[720px] mx-auto">
            How the process works, step by step.
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            {[
              {
                n: "01",
                t: "Apply",
                b: "Submit your application or browse current Saudi Arabia openings.",
              },
              {
                n: "02",
                t: "Document & License Verification",
                b: "Our team verifies qualifications and SCFHS eligibility.",
              },
              {
                n: "03",
                t: "Visa & Documentation",
                b: "We manage the visa file, attestation, and embassy paperwork.",
              },
              {
                n: "04",
                t: "Relocation & Boarding",
                b: "Pre-departure orientation and travel coordination through your first day.",
              },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div
                  className="bg-white border border-[#DDE3ED] rounded-[14px] p-6 h-full"
                  style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
                >
                  <div className="text-[12px] font-bold text-[#0BAF8A] tracking-wider">
                    STEP {s.n}
                  </div>
                  <h3 className="mt-3 text-[17px] font-bold text-[#0D1B2A]">{s.t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#4A5568]">{s.b}</p>
                </div>
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-[#DDE3ED]"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 mx-auto max-w-[600px] text-center text-[15px] leading-[1.8] text-[#4A5568]">
            Most candidates complete the full process — from initial application to boarding a
            flight to Saudi Arabia — within 6 to 8 weeks, depending on the role and licensing
            timeline.
          </p>
        </div>
      </section>

      {/* SECTION 5 — OPEN ROLES */}
      <section id="open-roles" className="bg-[#EEF2F7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[28px] md:text-[36px] font-extrabold text-[#0D1B2A] leading-tight">
            Current openings in Saudi Arabia.
          </h2>
          <p className="mt-4 text-center text-[15px] leading-[1.75] text-[#4A5568] max-w-[460px] mx-auto">
            A sample of roles currently open with our Saudi Arabia employer partners.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-[1040px] mx-auto">
            {JOBS.map((j) => (
              <article
                key={j.title}
                className="group relative bg-white border border-[#DDE3ED] rounded-[16px] p-6 md:p-7 flex flex-col hover:border-[#0BAF8A]/50 hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-[#0BAF8A] px-2 py-1 rounded"
                    style={{ background: "rgba(11,175,138,0.1)" }}
                  >
                    {j.tag}
                  </span>
                  <span className="text-[11px] text-[#94A3B8] font-semibold">📍 {j.city}</span>
                </div>
                <h3 className="text-[19px] font-extrabold text-[#0D1B2A] leading-snug">
                  {j.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-[#4A5568]">{j.employer}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {j.meta.map((m) => (
                    <span
                      key={m}
                      className="text-[11.5px] text-[#4A5568] bg-[#F0F4F9] border border-[#DDE3ED] px-2.5 py-1 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 mt-5 border-t border-[#DDE3ED] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                      Salary
                    </div>
                    <div className="text-[14px] font-bold text-[#0D1B2A] mt-0.5">{j.salary}</div>
                  </div>
                  <a
                    href="/jobs"
                    className="inline-flex items-center gap-1 text-[#0BAF8A] hover:text-[#099d7b] font-semibold text-[13px] group-hover:gap-2 transition-all"
                  >
                    View Role →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/jobs?country=saudi-arabia"
              className="inline-flex items-center gap-2 border border-[#0D1B2A]/20 hover:border-[#0BAF8A] hover:text-[#0BAF8A] transition text-[#0D1B2A] font-semibold text-[14px] px-6 py-3 rounded-full"
            >
              See All Saudi Arabia Roles →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#0D1B2A] leading-tight">
            A track record built in the Kingdom.
          </h2>
          <p className="mt-5 mx-auto max-w-[600px] text-[15px] leading-[1.8] text-[#4A5568]">
            Since 2009, Ozone has placed 482 healthcare and technical professionals into roles
            across Saudi Arabia, maintaining active partnerships with 35+ hospitals and companies in
            Riyadh, Jeddah, and Dammam. Every placement is MEA licensed and SCFHS-compliant where
            applicable.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-x-12 gap-y-5">
            {[
              ["482", "Placed Since 2009"],
              ["35+", "Employer Partners"],
              ["100%", "SCFHS-Compliant Placements"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-[22px] font-extrabold text-[#0D1B2A]">{n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-[#94A3B8]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="bg-[#F0F4F9] py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="text-center text-[28px] md:text-[36px] font-extrabold text-[#0D1B2A] leading-tight">
            Frequently asked questions about working in Saudi Arabia.
          </h2>

          <div className="mt-12 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-[#DDE3ED] rounded-[14px] p-6 open:shadow-md transition"
                style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)" }}
              >
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                  <h3 className="text-[16px] font-bold text-[#0D1B2A] leading-snug">{f.q}</h3>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full bg-[#F0F4F9] flex items-center justify-center text-[#0BAF8A] font-bold text-lg group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14.5px] leading-[1.8] text-[#4A5568]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-[#0F1C2E] py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="relative rounded-[20px] ozone-conic-border">
            <div className="relative z-10 bg-[#0F1C2E] rounded-[18px] p-10 md:p-14 text-center border border-white/10">
              <h2 className="text-[22px] md:text-[26px] font-extrabold text-white leading-snug">
                Ready to start your Saudi Arabia journey?
              </h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/65 max-w-[460px] mx-auto">
                Browse open roles or talk to our team about what's currently available.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="/jobs"
                  className="inline-flex items-center gap-2 bg-[#0BAF8A] hover:bg-[#099d7b] transition text-white font-semibold text-[14px] px-6 py-3 rounded-full"
                >
                  Browse Open Roles →
                </a>
                <a
                  href="https://wa.me/910000000000"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 transition text-white font-semibold text-[14px] px-6 py-3 rounded-full"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
