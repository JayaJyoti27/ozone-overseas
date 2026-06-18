import { Briefcase, User, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const EMP_FEATURES = [
  "Free requirement submission",
  "Pre-screened, verified candidates",
  "MEA licensed and compliant",
  "End-to-end visa and documentation",
];
const CAND_FEATURES = [
  "Free to apply",
  "Prometric coaching included",
  "Visa and documentation handled",
  "Pre-departure grooming sessions",
];

export function FinalCTA() {
  return (
    <section className="bg-[#F0F4F9] py-[100px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="text-center">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0D1B2A] leading-[1.1]">
            Two paths.<br /><span className="text-[#0BAF8A]">One agency.</span>
          </h2>
          <p className="mt-4 max-w-[500px] mx-auto text-[16px] text-[#4A5568]">
            Whether you need staff or you need a job — Ozone has done this 5,000 times. Start today.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left: animated border employer card */}
          <div className="relative rounded-[17px] p-[1.5px] animated-border" style={{ flex: 1.1 }}>
            <div className="bg-[#0F1C2E] rounded-2xl p-10 h-full">
              <span className="inline-block text-[11px] font-bold rounded-full px-3 py-1.5 text-[#0BAF8A]" style={{ background: "rgba(11,175,138,0.15)" }}>FOR EMPLOYERS</span>
              <div className="mt-5 w-[52px] h-[52px] rounded-[10px] flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="mt-5 text-white text-[26px] font-extrabold leading-[1.2]">Hire Faster, Hire Smarter.</h3>
              <p className="mt-3 text-white/65 text-[14px] leading-[1.6]">
                Stop waiting weeks for unqualified CVs. Submit your requirement once — our team delivers pre-screened candidates in 48 hours.
              </p>
              <ul className="mt-5 space-y-2.5">
                {EMP_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80 text-[14px]">
                    <Check size={16} className="text-[#0BAF8A] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button className="mt-7 group inline-flex items-center gap-2 bg-[#0BAF8A] hover:bg-[#09A07F] text-white rounded-lg px-7 py-3.5 font-semibold text-[15px] transition-colors">
                Post a Requirement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: candidates */}
          <div className="bg-white border-[1.5px] border-[#DDE3ED] rounded-2xl p-10" style={{ flex: 1 }}>
            <span className="inline-block text-[11px] font-bold rounded-full px-3 py-1.5 text-[#0BAF8A]" style={{ background: "rgba(11,175,138,0.15)" }}>FOR CANDIDATES</span>
            <div className="mt-5 w-[52px] h-[52px] bg-[#F0F4F9] rounded-[10px] flex items-center justify-center">
              <User size={24} className="text-[#0D1B2A]" />
            </div>
            <h3 className="mt-5 text-[#0D1B2A] text-[26px] font-extrabold leading-[1.2]">Find Your Job. We Handle the Rest.</h3>
            <p className="mt-3 text-[#4A5568] text-[14px] leading-[1.6]">
              Browse live vacancies across Saudi Arabia, UAE, Qatar, Canada, and 7 more countries. Apply in minutes — we handle visa, licensing, and boarding.
            </p>
            <ul className="mt-5 space-y-2.5">
              {CAND_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[#4A5568] text-[14px]">
                  <Check size={16} className="text-[#0BAF8A] flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <button className="mt-7 group inline-flex items-center gap-2 bg-[#0F1C2E] hover:bg-[#162840] text-white rounded-lg px-7 py-3.5 font-semibold text-[15px] transition-colors">
              Browse Vacancies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
