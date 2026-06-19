import { useCountUp } from "./Reveal";

function Sparkline({ flat = false }: { flat?: boolean }) {
  const points = flat
    ? "2,10 12,10 22,10 32,10 42,10"
    : "2,18 11,14 20,15 28,10 36,7 46,3";
  return (
    <svg width="48" height="20" viewBox="0 0 48 20" className="mt-2">
      <polyline points={points} fill="none" stroke="#0BAF8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {flat && <circle cx="46" cy="10" r="2.5" fill="#0BAF8A" />}
    </svg>
  );
}

function Stat({ value, suffix = "", label, target, flat }: { value: string; suffix?: string; label: string; target?: number; flat?: boolean }) {
  const ref = useCountUp(target ?? 0);
  return (
    <div>
      <div className="text-white text-[40px] font-extrabold leading-none">
        {target ? <><span ref={ref}>0</span>{suffix}</> : value}
      </div>
      <div className="mt-2 text-[#64748B] text-[12px] uppercase tracking-[0.08em] font-semibold">{label}</div>
      <Sparkline flat={flat} />
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-[#0F1C2E] py-[72px]">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-20 lg:border-r border-white/10">
          <p className="text-white text-[26px] font-bold leading-[1.5]">
            5,000 professionals placed. 15 years running. 10 countries active. No shortcuts taken.
          </p>
          <p className="mt-4 text-[#64748B] text-[14px]">
            Every number is a verified placement. Not a lead. Not an application.
          </p>
        </div>
        <div className="flex justify-between gap-8">
          <Stat target={200} suffix="+" value="200+" label="Employer Partners" />
          <Stat target={48} suffix="h" value="48h" label="Avg. First Candidate" />
          <Stat value="MEA" label="Licensed & Compliant" flat />
        </div>
      </div>
    </section>
  );
}
