import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { WorldMap } from "@/components/site/WorldMapView";
import { COUNTRIES } from "@/components/data/countries";
import { useCountUp, useInView } from "@/components/site/useInView";

export const Route = createFileRoute("/countries")({
  head: () => ({
    meta: [
      { title: "Countries — Ozone Recruitment" },
      {
        name: "description",
        content:
          "Healthcare and technical recruitment across 17 countries — the Middle East, Europe, Canada and beyond.",
      },
      { property: "og:title", content: "17 countries. One agency. — Ozone" },
      {
        property: "og:description",
        content:
          "Explore live recruitment destinations across the Middle East, Europe, Canada and beyond.",
      },
    ],
  }),
  component: CountriesPage,
});
const COL_ONE = COUNTRIES.slice(0, 8);
const COL_TWO = COUNTRIES.slice(8);

const POPULAR = ["Saudi Arabia", "UAE", "Qatar", "Canada", "United Kingdom"];

function CountriesPage() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("Saudi Arabia");

  const scrollToMap = () => {
    document.getElementById("world-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#eef2f7]">
      <Nav />

      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#0f1c2e]">
        <div className="mx-auto grid min-h-[85vh] max-w-[1200px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.5fr_1fr] md:pt-32">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#0baf8a]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#94a3b8]">
                17 Countries. One Agency.
              </span>
            </div>
            <h1 className="mt-6 text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[64px]">
              Your next chapter
              <br />
              could start <span className="text-[#0baf8a]">anywhere.</span>
            </h1>
            <p className="mt-[22px] max-w-[460px] text-[17px] leading-[1.7] text-white/65">
              Healthcare and technical recruitment across the Middle East, Europe, Canada, and
              beyond. 5,000 placements. 17 countries. One process, wherever you land.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <button
                onClick={scrollToMap}
                className="rounded-[10px] bg-[#0baf8a] px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#09a07f]"
              >
                Explore Countries ↓
              </button>
              <Link
                to="/jobs"
                className="rounded-[10px] border-[1.5px] border-white/30 bg-transparent px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Find a Job →
              </Link>
            </div>
          </div>

          {/* Flag columns */}
          <div className="ozone-flag-mask relative h-[620px] w-[340px] overflow-hidden md:justify-self-end">
            <div className="flex gap-7">
              <FlagColumn flags={COL_ONE} direction="up" />
              <FlagColumn flags={COL_TWO} direction="down" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: WORLD MAP ============ */}
      <MapSection />

      {/* ============ SECTION 3: FLAG STRIP (compact) ============ */}
      <section className="bg-[#f0f4f9] py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.1em] text-[#94a3b8]">
            ——— Every destination ———
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {COUNTRIES.map((c) => (
              <CountryChip key={c.slug} country={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: FIND A JOB ============ */}
      <section className="bg-[#0f1c2e] py-[90px]">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[40px]">
            Find a job in your
            <br />
            <span className="text-[#0baf8a]">dream country.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-[1.7] text-white/65">
            Search live roles by destination — we'll take you straight to what's open.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/jobs", search: { country } });
            }}
            className="mx-auto mt-10 flex max-w-[640px] flex-col gap-3 rounded-[12px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:gap-2 sm:p-4"
          >
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="flex-1 rounded-[8px] bg-transparent px-3 py-3 text-[15px] font-medium text-[#0d1b2a] outline-none"
            >
              {COUNTRIES.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-[8px] bg-[#0baf8a] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#09a07f]"
            >
              Search Roles →
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {POPULAR.map((p) => (
              <Link
                key={p}
                to="/jobs"
                search={{ country: p }}
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[13px] text-white transition-colors hover:bg-white/15"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: STATS STRIP ============ */}
      <StatsStrip />

      {/* ============ SECTION 6: FINAL CTA ============ */}
      <section className="bg-[#f0f4f9] py-[90px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-center text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0d1b2a] md:text-[44px]">
            Wherever you're headed,
            <br />
            <span className="text-[#0baf8a]">we've already been there.</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Dark animated card */}
            <div className="ozone-conic-border min-h-[260px] bg-blue-950 p-10">
              <div className="relative z-10">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0baf8a]">
                  For Candidates
                </div>
                <h3 className="mt-3 text-[26px] font-extrabold leading-[1.2] text-white">
                  Find Opportunities
                </h3>
                <p className="mt-3 max-w-sm text-[14px] leading-[1.7] text-white/65">
                  Live roles across 17 countries, vetted by recruiters who've placed in every one.
                </p>
                <Link
                  to="/jobs"
                  className="mt-6 inline-flex items-center rounded-[10px] bg-[#0baf8a] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#09a07f]"
                >
                  Browse Roles →
                </Link>
              </div>
            </div>
            {/* Light card */}
            <div className="min-h-[260px] rounded-[20px] border border-[#dde3ed] bg-white p-10 shadow-[0_2px_16px_rgba(15,28,46,0.07)]">
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0baf8a]">
                For Employers
              </div>
              <h3 className="mt-3 text-[26px] font-extrabold leading-[1.2] text-[#0d1b2a]">
                Hire International Talent
              </h3>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.7] text-[#4a5568]">
                Speak to a partner who's already placed in your sector and your country.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-[10px] border border-[#dde3ed] bg-white px-6 py-3 text-[14px] font-semibold text-[#0d1b2a] hover:border-[#0baf8a] hover:text-[#0baf8a]"
              >
                Employer Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FlagColumn({
  flags,
  direction,
}: {
  flags: (typeof COUNTRIES)[number][];
  direction: "up" | "down";
}) {
  const items = [...flags, ...flags];

  return (
    <div className="relative h-[620px] w-[150px] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-24 z-20 bg-gradient-to-b from-[#0f1c2e] to-transparent" />

      <div className="absolute bottom-0 inset-x-0 h-24 z-20 bg-gradient-to-t from-[#0f1c2e] to-transparent" />

      <div
        className={`flex flex-col gap-5 ${
          direction === "up"
            ? "animate-[countryUp_20s_linear_infinite]"
            : "animate-[countryDown_20s_linear_infinite]"
        }`}
      >
        {items.map((country, i) => (
          <div
            key={i}
            className="
              h-[116px]
              rounded-[28px]
              border
              border-[#203551]
              bg-[#14263d]
              flex
              items-center
              justify-center
              shadow-[0_18px_40px_rgba(0,0,0,.3)]
            "
          >
            <img
              src={country.flag}
              alt={country.name}
              draggable={false}
              className="
                w-[88px]
                h-[60px]
                rounded-[14px]
                object-cover
                shadow-[0_10px_25px_rgba(0,0,0,.35)]
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function RisingHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
}) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`ozone-rise ${inView ? "in-view" : ""} text-center`}>
      <div
        className={`text-[11px] font-bold uppercase tracking-[0.1em] ${light ? "text-white/50" : "text-[#94a3b8]"}`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mx-auto mt-4 max-w-[820px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px] ${
          light ? "text-white" : "text-[#0d1b2a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-[480px] text-[15px] leading-[1.7] ${
            light ? "text-white/65" : "text-[#4a5568]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function MapSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section id="world-map" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <RisingHeader
          eyebrow="——— WHERE WE PLACE ———"
          title={
            <>
              17 countries.
              <br />
              <span className="text-[#0baf8a]">One map.</span>
            </>
          }
          subtitle={
            <>Every highlighted country below is a live destination — hover to see what's open.</>
          }
        />
        <div
          ref={ref}
          className={`ozone-map-fade ${inView ? "in-view" : ""} mx-auto mt-14 max-w-[1100px] overflow-hidden rounded-[24px] border border-[#1f3552] bg-gradient-to-b from-[#0a1525] to-[#0f1c2e] p-4 shadow-[0_30px_80px_-20px_rgba(11,175,138,0.25)]`}
        >
          <WorldMap />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ef4444] ring-2 ring-[#ef4444]/30" />
            <span className="text-[13px] text-[#4a5568]">Active destination</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 border-t border-dashed border-[#0baf8a]" />
            <span className="text-[13px] text-[#94a3b8]">Placement route</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountryChip({ country }: { country: (typeof COUNTRIES)[number] }) {
  const body = (
    <div
      id={`country-${country.slug}`}
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[#dde3ed]
        bg-white
        px-5
        py-3
        text-[14px]
        font-semibold
        text-[#0d1b2a]
        transition-all
        hover:-translate-y-0.5
        hover:border-[#0baf8a]
      "
    >
      {/* FLAG */}
      <img
        src={country.flag}
        alt={country.name}
        loading="lazy"
        className="
          h-[22px]
          w-[32px]
          rounded-[4px]
          object-cover
          shadow-sm
          flex-shrink-0
        "
      />

      {/* COUNTRY */}
      <span>{country.name}</span>

      {/* COUNT */}
      <span
        className="
          rounded-full
          bg-[#eef2f7]
          px-2
          py-1
          text-[11px]
          font-bold
          text-[#0baf8a]
        "
      >
        {country.openRoles}
      </span>
    </div>
  );

  if (country.href) {
    return (
      <Link to={country.href} className="block">
        {body}
      </Link>
    );
  }

  return body;
}
function StatsStrip() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const stats = [
    { value: 17, suffix: "+", label: "Countries Active" },
    { value: 5000, suffix: "+", label: "Placements" },
    { value: 200, suffix: "+", label: "Employer Partners" },
  ];
  return (
    <section ref={ref} className="bg-white py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 px-6 sm:grid-cols-3">
        {stats.map((s) => (
          <Stat key={s.label} start={inView} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center">
      <div className="text-[52px] font-extrabold leading-none tracking-[-0.02em] text-[#0d1b2a]">
        {n.toLocaleString()}
        <span className="text-[#0baf8a]">{suffix}</span>
      </div>
      <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#94a3b8]">
        {label}
      </div>
      <svg
        viewBox="0 0 200 40"
        className={`ozone-sparkline mx-auto mt-3 h-8 w-32 ${start ? "in-view" : ""}`}
      >
        <path
          d="M0 30 Q 25 25, 50 22 T 100 14 T 150 10 T 200 4"
          fill="none"
          stroke="#0baf8a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
