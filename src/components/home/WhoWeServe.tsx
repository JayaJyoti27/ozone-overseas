import { useState } from "react";
import { Hospital, ShieldCheck, FileText, Phone, Briefcase, User, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const ROWS = [
  { icon: Hospital, title: "Pre-screened candidates only", detail: "Every CV is manually verified by our team before it reaches you. Qualifications, license status, relocation readiness — all checked." },
  { icon: ShieldCheck, title: "MEA Licensed placements", detail: "All our placements are fully compliant with the Ministry of External Affairs. Zero legal risk for you." },
  { icon: FileText, title: "End-to-end documentation", detail: "We manage HAAD/DHA/SCFHS licensing, Prometric prep, attestation, and visa paperwork for every candidate." },
  { icon: Phone, title: "Dedicated account manager", detail: "One point of contact from requirement to boarding. Available on WhatsApp, always." },
];

export function WhoWeServe() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="flex items-center justify-center gap-3 mb-12">
          <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
          <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">Who We Serve</span>
          <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16">
          <Reveal>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0D1B2A] leading-[1.2]">
              Built for both<br />sides of the hire.
            </h2>
            <p className="mt-4 max-w-[380px] text-[16px] text-[#4A5568] leading-[1.7]">
              Whether you're a hospital needing verified nurses in Saudi Arabia, or a nurse ready to work abroad — Ozone has placed both, 5,000 times.
            </p>
            <div className="mt-7 flex flex-col gap-3 max-w-[360px]">
              <button className="group flex items-center justify-between bg-[#0F1C2E] hover:bg-[#162840] rounded-[10px] py-[14px] px-5 text-left transition-colors">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-white" size={18} />
                  <span className="text-white text-[14px] font-semibold">I'm an Employer</span>
                </div>
                <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="group flex items-center justify-between bg-[#0BAF8A] hover:bg-[#09A07F] rounded-[10px] py-[14px] px-5 text-left transition-colors">
                <div className="flex items-center gap-3">
                  <User className="text-white" size={18} />
                  <span className="text-white text-[14px] font-semibold">I'm a Job Seeker</span>
                </div>
                <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </Reveal>
          <div className="flex flex-col gap-2">
            {ROWS.map((r, i) => {
              const Icon = r.icon;
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 80}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left border border-[#DDE3ED] rounded-[10px] bg-white px-5 py-[18px] hover:border-[#0BAF8A] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#F0F4F9] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[#0D1B2A]" />
                      </div>
                      <span className="flex-1 text-[15px] font-semibold text-[#0D1B2A]">{r.title}</span>
                      <Plus size={18} className={`text-[#94A3B8] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    </div>
                    <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                      <div className="overflow-hidden">
                        <p className="pt-3 pl-14 pr-4 text-[14px] text-[#4A5568] leading-[1.6]">{r.detail}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
