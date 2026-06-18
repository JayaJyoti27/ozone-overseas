import { Plane, Hospital, Globe, Clock } from "lucide-react";
import { Reveal, useCountUp } from "./Reveal";

const ROW1 = ["🇸🇦 Saudi Arabia", "🇦🇪 UAE", "🇶🇦 Qatar", "🇴🇲 Oman", "🇰🇼 Kuwait", "🇲🇾 Malaysia", "🇨🇦 Canada", "🇸🇬 Singapore"];
const ROW2 = ["🇦🇺 Australia", "🇬🇧 United Kingdom", "🇩🇪 Germany", "🇳🇿 New Zealand", "🇮🇪 Ireland", "🇩🇰 Denmark", "🇺🇸 USA", "🇲🇹 Malta"];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2.5 mx-2 text-white text-[14px] font-semibold whitespace-nowrap" style={{ background: "rgba(255,255,255,0.06)" }}>
      <span className="text-[18px]">{label.split(" ")[0]}</span>
      <span>{label.split(" ").slice(1).join(" ")}</span>
    </span>
  );
}

function CountStat({ icon: Icon, target, suffix = "", display, label }: { icon: typeof Plane; target?: number; suffix?: string; display?: string; label: string }) {
  const ref = useCountUp(target ?? 0);
  return (
    <div className="flex flex-col items-start">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
        <Icon size={18} className="text-[#0BAF8A]" />
      </div>
      <div className="mt-3 text-white text-[36px] sm:text-[40px] font-extrabold leading-none">
        {target ? <><span ref={ref}>0</span>{suffix}</> : display}
      </div>
      <div className="mt-2 text-[#64748B] text-[12px] uppercase tracking-[0.08em] font-semibold">{label}</div>
    </div>
  );
}

export function Countries() {
  return (
    <section className="bg-[#0F1C2E] py-[100px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="text-center">
          <h2 className="text-white text-[40px] sm:text-[52px] font-extrabold leading-[1.15]">
            10 countries.<br /><span className="text-[#0BAF8A]">One trusted agency.</span>
          </h2>
          <p className="mt-4 max-w-[520px] mx-auto text-[#94A3B8] text-[16px]">
            We have active recruitment drives across the GCC, Southeast Asia, and North America. High demand. Live pipelines.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {[ROW1, ROW2].map((row, ri) => (
            <div key={ri} className="overflow-hidden">
              <div className={`marquee-track ${ri === 1 ? "reverse" : ""}`}>
                {[...row, ...row].map((c, i) => <Pill key={`${ri}-${i}`} label={c} />)}
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl px-8 sm:px-12 py-10" >
          <div className="rounded-2xl px-6 sm:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <CountStat icon={Plane} target={5000} suffix="+" label="Professionals Placed" />
            <CountStat icon={Hospital} target={200} suffix="+" label="Employer Partners" />
            <CountStat icon={Globe} target={10} suffix="+" label="Countries Active" />
            <CountStat icon={Clock} target={48} suffix="h" label="Avg. First Match" />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["🔒 MEA Licensed Only", "⚡ First Candidate in 48h", "✓ 5,000+ Placements"].map((t) => (
            <span key={t} className="text-white text-[13px] rounded-full px-4 py-2" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
