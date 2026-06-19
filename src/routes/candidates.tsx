import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/candidates")({
  head: () => ({
    meta: [
      { title: "For Candidates — Your Career Abroad | Ozone" },
      {
        name: "description",
        content:
          "Free applications, zero candidate fees, 94% visa success. Ozone places healthcare and technical professionals across 10 countries.",
      },
      { property: "og:title", content: "For Candidates — Your Career Abroad | Ozone" },
      {
        property: "og:description",
        content:
          "5,000+ placed. Free Prometric coaching. Full visa & licensing handled. Apply directly to verified roles abroad.",
      },
    ],
  }),
  component: ForCandidatesPage,
});

function ForCandidatesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ozone-bg)]">
      <Nav />

      <main className="pt-[68px]">
        <Hero />
        <StatsStrip />
        <WhySection />
        <JourneySection />
        <SuccessStories />
        <CountriesSection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
/* ───────── 1. Hero ───────── */
function Hero() {
  const stages = [
    {
      label: "Applied",
      time: "Day 1",
      state: "done",
    },

    {
      label: "Verified",
      time: "Week 1",
      state: "done",
    },

    {
      label: "Visa",
      time: "Week 6",
      state: "active",
    },

    {
      label: "Placed",
      time: "Week 10",
      state: "pending",
    },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#F7FAFD]
      min-h-[calc(100vh-68px)]
      flex
      items-center
    "
    >
      {/* BG */}

      <div className="absolute inset-0">
        <div
          className="
          absolute
          right-[-200px]
          top-[-150px]
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#0BAF8A]/10
          blur-[180px]
        "
        />
      </div>

      <div
        className="
        relative
        max-w-[1300px]
        mx-auto
        px-6
        py-12
        grid
        lg:grid-cols-[.95fr_1.05fr]
        gap-10
        items-center
      "
      >
        {/* LEFT */}

        <div>
          <div
            className="
            uppercase
            tracking-[.3em]
            text-[#0BAF8A]
            text-[12px]
            font-semibold
          "
          >
            FOR CANDIDATES
          </div>

          <h1
            className="
            mt-6
            text-[52px]
            lg:text-[70px]
            leading-[0.92]
            tracking-[-.06em]
            font-black
            text-[#081A30]
          "
          >
            Your career abroad starts
            <span className="block text-[#0BAF8A]">here.</span>
          </h1>

          <p
            className="
            mt-7
            text-[18px]
            leading-[1.8]
            text-[#64748B]
            max-w-[560px]
          "
          >
            Applications are free. We handle licensing, visa, flight and onboarding — through one
            coordinator.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              to="/jobs"
              className="
              h-[58px]
              px-8
              rounded-[18px]
              bg-[#081A30]
              text-white
              inline-flex
              items-center
              font-semibold
              hover:-translate-y-[2px]
              transition
            "
            >
              Browse Roles →
            </Link>

            <a
              href="#journey"
              className="
              h-[58px]
              px-8
              rounded-[18px]
              bg-white
              border
              border-[#E7EDF5]
              text-[#081A30]
              inline-flex
              items-center
              font-semibold
            "
            >
              How It Works
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <div
            className="
            rounded-[18px]
            bg-[#081A30]
            p-8
            shadow-[0_40px_120px_rgba(8,26,48,.18)]
          "
          >
            {/* top */}

            <div className="flex justify-between items-start">
              <div>
                <div
                  className="
                  text-[11px]
                  tracking-[.22em]
                  uppercase
                  text-white/40
                "
                >
                  Candidate Tracker
                </div>

                <div
                  className="
                  mt-3
                  text-[30px]
                  font-black
                  text-white
                "
                >
                  ICU Nurse
                </div>

                <div className="mt-2 text-[#59E4BF]">Riyadh · Saudi Arabia</div>
              </div>

              <div
                className="
                rounded-full
                px-4
                py-2
                bg-[#0BAF8A]/15
                text-[#59E4BF]
                text-sm
              "
              >
                On Track
              </div>
            </div>

            {/* horizontal tracker */}

            <div
              className="
              mt-3
              grid
              grid-cols-2
              gap-2
            "
            >
              {stages.map((s, i) => {
                const active = s.state === "active";

                const done = s.state === "done";

                return (
                  <div
                    key={s.label}
                    className="
                    rounded-[20px]
                    bg-white/[0.04]
                    border
                    border-white/6
                    p-5
                    min-h-[140px]
                  "
                  >
                    <div
                      className={`
                      w-[38px]
                      h-[38px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold

                      ${
                        done
                          ? "bg-[#0BAF8A] text-white"
                          : active
                            ? "bg-white text-[#081A30]"
                            : "bg-white/10 text-white/50"
                      }
                    `}
                    >
                      {done ? "✓" : i + 1}
                    </div>

                    <div
                      className={`
                      mt-5
                      font-semibold

                      ${active ? "text-[#59E4BF]" : "text-white"}
                    `}
                    >
                      {s.label}
                    </div>

                    <div className="mt-2 text-white/45">{s.time}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 2. Stats ───────── */
function useCounter(target: number, run: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now(),
      dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setVal(target * eased);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return val;
}

function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), {
      threshold: 0.35,
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const placed = useCounter(5000, run);
  const fees = useCounter(0, run);
  const visa = useCounter(94, run);
  return (
    <section ref={ref} className="bg-[#0F1C2E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Stat
          label="Candidates Placed"
          value={`${Math.round(placed).toLocaleString()}+`}
          caption="Across healthcare & technical roles"
        />
        <Stat
          label="Candidate Fees Ever"
          value={`₹${Math.round(fees)}`}
          caption="You never pay us — employers do"
        />
        <Stat
          label="Visa Success Rate"
          value={`${Math.round(visa)}%`}
          caption="First-attempt approvals, 2024"
        />
      </div>
    </section>
  );
}

function Stat({ label, value, caption }: { label: string; value: string; caption: string }) {
  return (
    <div className="relative pb-6">
      <p className="text-xs tracking-[0.25em] text-[#0BAF8A] font-semibold">
        {label.toUpperCase()}
      </p>
      <p className="text-5xl font-extrabold tracking-tight mt-3">{value}</p>
      <p className="text-sm text-white/60 mt-2">{caption}</p>
      <svg
        viewBox="0 0 200 40"
        className="mt-4 w-full h-10 text-[#0BAF8A]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 L20 28 L40 24 L60 26 L80 18 L100 20 L120 12 L140 14 L160 8 L180 10 L200 4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 30 L20 28 L40 24 L60 26 L80 18 L100 20 L120 12 L140 14 L160 8 L180 10 L200 4 L200 40 L0 40 Z"
          fill="currentColor"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}

/* ───────── 3. Why ───────── */
function WhySection() {
  const rows = [
    {
      title: "Free Prometric Coaching",
      body: "Live cohort + recorded sessions for DHA / HAAD / SCFHS / QCHP / MOH-Oman. Mock exams scored within 48 hours, instructor feedback inside our WhatsApp study room.",
    },
    {
      title: "Zero Candidate Fees",
      body: "You never pay Ozone a rupee. Employers pay our placement fee — period. We sign that into your offer letter so it's contractual, not a promise.",
    },
    {
      title: "We Handle Every Document",
      body: "Dataflow, embassy attestations, MOH/DHA portal submissions, medicals, police clearance, visa file — handled in-house by a coordinator you can call by name.",
    },
    {
      title: "A Real Person on WhatsApp",
      body: "No chatbots. Your coordinator is on WhatsApp every working day, with average reply time under 38 minutes during your active application window.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14">
      <div>
        <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">
          WHY CANDIDATES CHOOSE US
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1C2E] leading-tight">
          Built around the candidate — not the commission.
        </h2>
        <ul className="mt-7 space-y-3 text-[var(--color-ozone-body)]">
          {[
            "Direct employer relationships, no sub-agents",
            "Transparent fee policy in writing",
            "Same coordinator through visa & landing",
          ].map((b) => (
            <li key={b} className="flex gap-3">
              <svg
                className="h-5 w-5 mt-0.5 text-[#0BAF8A] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <Link
          to="/jobs"
          className="mt-8 inline-flex items-center gap-2 bg-[#0F1C2E] hover:bg-[#0BAF8A] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
        >
          See open roles <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => {
          const active = open === i;
          return (
            <button
              key={r.title}
              onClick={() => setOpen(i)}
              onMouseEnter={() => setOpen(i)}
              className={`w-full text-left bg-white rounded-2xl border transition-all overflow-hidden ${active ? "border-[#0BAF8A] shadow-lg shadow-[#0BAF8A]/10" : "border-[#E2E8F0]"}`}
            >
              <div className="px-6 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-bold tabular-nums ${active ? "text-[#0BAF8A]" : "text-[#64748B]"}`}
                  >
                    0{i + 1}
                  </span>
                  <span className={`font-bold ${active ? "text-[#0BAF8A]" : "text-[#0F1C2E]"}`}>
                    {r.title}
                  </span>
                </div>
                <span
                  className={`h-7 w-7 rounded-full grid place-items-center text-xs transition-transform ${active ? "bg-[#0BAF8A] text-white rotate-45" : "bg-[#E2E8F0] text-[#64748B]"}`}
                >
                  +
                </span>
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm text-[#475569] leading-relaxed">{r.body}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ───────── 4. Journey ───────── */
function JourneySection() {
  const steps = [
    {
      title: "Apply",
      desc: "Pick a role from /jobs and submit your CV in under 90 seconds.",
      tags: ["Free", "No CV format needed"],
    },
    {
      title: "Get Verified",
      desc: "Coordinator review, shortlist call, employer-side interview within 10–14 days.",
      tags: ["Mock interview prep", "Dedicated coordinator"],
    },
    {
      title: "License & Visa",
      desc: "Dataflow + Prometric + MOH/DHA portal + embassy stamping — handled for you.",
      tags: ["Free Prometric coaching", "Doc tracker"],
    },
    {
      title: "Board & Settle",
      desc: "Pre-departure briefing, airport pickup, accommodation handover, first-week check-ins.",
      tags: ["Flight booked", "Landing support"],
    },
  ];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = refs.current.findIndex((n) => n === e.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((n) => n && io.observe(n));
    return () => io.disconnect();
  }, []);
  return (
    <section id="journey" className="bg-[#F7FAFD] py-8">
      <div className="max-w-7xl mx-auto px-6 py-12 bg-[#F7FAFD]">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">
            YOUR JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1C2E] leading-tight">
            Four clear stages, one accountable coordinator.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={s.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-12 left-full w-full h-0.5 -translate-x-3"
                    aria-hidden
                  >
                    <div className="border-t-2 border-dashed border-[#CBD5E1] h-px w-full" />
                  </div>
                )}
                <div
                  className={`relative bg-white rounded-2xl p-6 border transition-all duration-500 ${isActive ? "border-[#0BAF8A] shadow-xl shadow-[#0BAF8A]/15 -translate-y-1" : "border-[#CBD5E1]"}`}
                >
                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 rounded-full ${isActive ? "bg-[#0BAF8A] text-white" : "bg-[#F7FAFD] text-[#0F1C2E]"}`}
                  >
                    STEP 0{i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#0F1C2E]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#F7FAFD] text-[#0F1C2E] border border-[#CBD5E1]"
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

/* ───────── 5. Stories ───────── */
function SuccessStories() {
  const featured = {
    name: "Reshma K.",
    role: "ICU Nurse → Riyadh, KSA",
    quote:
      "Visa stamped in 11 weeks from interview. My Ozone coordinator messaged me every Tuesday with the exact stage I was at — I never had to chase anyone.",
    metric: "11 weeks · interview to flight",
  };
  const small = [
    {
      name: "Anand P.",
      role: "Biomedical Tech → Doha",
      quote: "Failed Prometric the first time. Free retake coaching, cleared on attempt two.",
    },
    {
      name: "Sneha M.",
      role: "OT Nurse → Abu Dhabi",
      quote: "Zero fees, in writing. Even my flight ticket was emailed before I asked.",
    },
    {
      name: "Rahul T.",
      role: "Civil Engineer → Lusail",
      quote:
        "First week onsite, my coordinator still WhatsApp'd to confirm my accommodation was sorted.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">
            SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1C2E] leading-tight">
            Real journeys, named coordinators, no scripts.
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-sm">
          Every story below is a candidate we've placed in the last 12 months.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <article className="relative bg-[#0F1C2E] text-white rounded-3xl p-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            aria-hidden
            style={{
              background:
                "linear-gradient(115deg, transparent 30%, rgba(11,175,138,0.35) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: "ozone-marquee 8s linear infinite",
            }}
          />
          <div className="relative">
            <svg className="h-8 w-8 text-[#0BAF8A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 7h4v4H7c0 2 1 4 4 4v2c-4 0-6-2-6-6V7Zm9 0h4v4h-4c0 2 1 4 4 4v2c-4 0-6-2-6-6V7Z" />
            </svg>
            <p className="mt-6 text-2xl font-semibold leading-snug">"{featured.quote}"</p>
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold">{featured.name}</p>
                <p className="text-sm text-white/60">{featured.role}</p>
              </div>
              <span className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full bg-[#0BAF8A]/20 text-[#0BAF8A]">
                {featured.metric}
              </span>
            </div>
          </div>
        </article>
        <div className="space-y-4">
          {small.map((s) => (
            <article
              key={s.name}
              className="bg-white rounded-2xl p-6 border border-[#CBD5E1] hover:border-[#0BAF8A] transition-colors"
            >
              <p className="text-[#64748B] leading-relaxed">"{s.quote}"</p>
              <div className="mt-4 pt-4 border-t border-[#CBD5E1]">
                <p className="font-bold text-sm text-[#0F1C2E]">{s.name}</p>
                <p className="text-xs text-[#64748B]">{s.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── 6. Countries ───────── */
function CountriesSection() {
  const countries = [
    { flag: "🇸🇦", name: "Saudi Arabia" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇶🇦", name: "Qatar" },
    { flag: "🇴🇲", name: "Oman" },
    { flag: "🇰🇼", name: "Kuwait" },
    { flag: "🇧🇭", name: "Bahrain" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇮🇪", name: "Ireland" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇬🇧", name: "UK" },
  ];
  const loop = [...countries, ...countries];
  return (
    <section className="bg-[#0F1C2E] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">
            WHERE YOU CAN GO
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[white] leading-tight">
            Your next chapter, in 10 countries.
          </h2>
        </div>
        <div
          className="mt-14 overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex gap-4 ozone-marquee w-max">
            {loop.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-[#CBD5E1] rounded-2xl px-6 py-5 flex items-center gap-3 shrink-0"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-semibold text-[#0F1C2E] whitespace-nowrap">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-[2fr_1fr] gap-6">
          <div className="bg-[#0F1C2E] text-white rounded-3xl p-10">
            <p className="text-xs tracking-[0.25em] text-white/50 font-semibold">
              10 COUNTRIES · LIVE OPENINGS
            </p>
            <div className="mt-6 grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-extrabold">32</p>
                <p className="text-xs text-white/60 mt-1">Open roles</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">17</p>
                <p className="text-xs text-white/60 mt-1">Partner hospitals</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">94%</p>
                <p className="text-xs text-white/60 mt-1">Visa approval rate</p>
              </div>
            </div>
            <Link
              to="/jobs"
              className="mt-8 inline-flex items-center gap-2 bg-[#0BAF8A] hover:bg-white hover:text-[#0F1C2E] font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
            >
              Explore all openings <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-3">
            {[
              { t: "MOH / DHA / SCFHS Approved", s: "Direct portal access" },
              { t: "Government-licensed", s: "RA-PB1238/KER/2014" },
              { t: "Ethical Recruitment", s: "Signatory to IRIS framework" },
            ].map((p) => (
              <div
                key={p.t}
                className="bg-white border border-[#CBD5E1] rounded-2xl p-5 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-full bg-[#0BAF8A]/10 grid place-items-center shrink-0">
                  <svg
                    className="h-5 w-5 text-[#0BAF8A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0F1C2E]">{p.t}</p>
                  <p className="text-xs text-[#64748B]">{p.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 7. FAQ ───────── */
function FaqSection() {
  const faqs = [
    {
      q: "Are there really no fees for candidates?",
      a: "Correct. Ozone is paid by the employer. You don't pay us a placement fee, a registration fee, or a documentation fee. The 'no candidate fees' clause is written into your offer letter.",
    },
    {
      q: "What happens if I fail my licensing exam?",
      a: "You get free re-coaching and a free retake attempt with us. Your application stays active with the employer wherever possible, and we re-sequence your timeline rather than restart it.",
    },
    {
      q: "How long is the full process?",
      a: "Typical timeline is 8–14 weeks from interview to flight — dependent on country and document turnaround. Your tracker shows the exact stage in real time.",
    },
    {
      q: "What support do I get after landing?",
      a: "Airport pickup, accommodation handover, week-1 check-in, and 90-day post-placement support through your same coordinator.",
    },
    {
      q: "Can I apply with no overseas experience?",
      a: "Yes. About 1 in 4 placements last year were first-time abroad candidates, especially in OT, Lab, and Biomedical roles. Filter '/jobs' by 'No Experience Required'.",
    },
    {
      q: "What documents do I need to start?",
      a: "Just your CV and one ID. Your coordinator will request the rest (degree, transcripts, registration, experience certificates) only after shortlisting, so nothing is wasted.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1C2E] leading-tight">
          Candidate questions, straight answers.
        </h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${isOpen ? "border-[#0BAF8A]" : "border-[#CBD5E1]"}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-[#0F1C2E]">{f.q}</span>
                <svg
                  className={`h-5 w-5 text-[#0BAF8A] transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-400 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`px-6 pb-6 text-sm text-[#64748B] leading-relaxed border-l-2 ${isOpen ? "border-[#0BAF8A]" : "border-transparent"} ml-2 pl-4`}
                  >
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────── 8. Final CTA ───────── */
function FinalCta() {
  return (
    <section className="max-w-6xl mx-auto px-12 pb-24">
      <div className="ozone-conic rounded-3xl">
        <div className="bg-[#0F1C2E] text-white rounded-xl p-10 md:p-14 text-center">
          <p className="text-xs tracking-[0.25em] font-semibold text-[#0BAF8A] mb-4">
            READY WHEN YOU ARE
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            One CV. One coordinator. <span className="text-[#0BAF8A]">Ten countries open.</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Free to apply. Visa & licensing handled. Your tracker goes live the day you submit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/jobs"
              className="bg-[#0BAF8A] hover:bg-white hover:text-[#0F1C2E] text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Browse Open Roles <span aria-hidden>→</span>
            </Link>
            <a
              href="https://wa.me/919999999999"
              className="border border-white/20 hover:border-[#0BAF8A] text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
