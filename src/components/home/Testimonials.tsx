import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const SMALL = [
  { tag: "CANDIDATE", metric: "7", unit: "Weeks", label: "TO BOARDING", quote: "Ozone handled my DHA license, visa, and grooming. I was on the plane in 7 weeks.", name: "Sneha Krishnamurthy", title: "Staff Nurse, Dubai UAE", initials: "SK" },
  { tag: "CANDIDATE", metric: "4", unit: "Weeks", label: "AFTER COACHING", quote: "Failed Prometric twice. Ozone's coaching got me through. Placed in Kuwait a month later.", name: "Ramesh Kumar", title: "Biomedical Technician, Kuwait", initials: "RK" },
  { tag: "EMPLOYER", metric: "3", unit: "Hires", label: "IN 45 DAYS", quote: "Highly relevant profiles, no resume noise. Exactly what we asked for, delivered fast.", name: "Priya Menon", title: "Hiring Manager, UAE", initials: "PM" },
];

export function Testimonials() {
  return (
    <section className="bg-[#EEF2F7] py-[100px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">Success Stories</span>
            <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-extrabold text-[#0D1B2A] leading-[1.1]">
            Real outcomes,<br /><span className="text-[#0BAF8A]">real people.</span>
          </h2>
          <p className="mt-4 max-w-[480px] mx-auto text-[16px] text-[#4A5568]">
            Employers hire faster. Candidates reach their goals. Here's what they said.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[60fr_38fr] gap-6">
          <Reveal className="relative bg-[#0F1C2E] rounded-[20px] p-10 min-h-[400px] overflow-hidden">
            <span className="shimmer-layer" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <Quote size={28} className="text-[#0BAF8A]" />
                <span className="text-[11px] font-bold text-white tracking-[0.05em] rounded-full px-3 py-1.5" style={{ background: "rgba(255,255,255,0.1)" }}>EMPLOYER · SAUDI ARABIA</span>
              </div>
              <h3 className="mt-6 text-white text-[26px] sm:text-[28px] font-extrabold leading-[1.25]">
                12 ICU Nurses Placed<br />In Just <span className="text-[#0BAF8A]">8 Weeks.</span>
              </h3>
              <p className="mt-4 text-white/75 text-[16px] leading-[1.7]">
                "Ozone delivered 12 verified ICU nurses to our Riyadh facility within 8 weeks. Every single one passed SCFHS licensing. The documentation was flawless."
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-[#0BAF8A] flex items-center justify-center text-white text-[14px] font-bold">AR</div>
                <div>
                  <div className="text-white text-[14px] font-semibold">Dr. Ahmed Al-Rashidi</div>
                  <div className="text-[#64748B] text-[13px]">HR Director · Al Hammadi Hospital, Saudi Arabia</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {SMALL.map((c, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white rounded-xl p-6 border border-[#DDE3ED]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#94A3B8] tracking-[0.1em]">{c.tag}</span>
                  <div className="text-right">
                    <span className="text-[#0BAF8A] text-[22px] font-extrabold">{c.metric} {c.unit}</span>
                    <div className="text-[10px] text-[#94A3B8] tracking-[0.08em] font-semibold">{c.label}</div>
                  </div>
                </div>
                <p className="mt-3 text-[14px] text-[#4A5568] leading-[1.6]">"{c.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F0F4F9] flex items-center justify-center text-[#0D1B2A] text-[12px] font-bold">{c.initials}</div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#0D1B2A]">{c.name}</div>
                    <div className="text-[12px] text-[#94A3B8]">{c.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
