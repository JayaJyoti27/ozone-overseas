import { useEffect, useRef, useState } from "react";
import { ClipboardList, Search, FileCheck, Plane } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: ClipboardList, title: "Submit & Apply", body: "Employers fill a short requirement form. Candidates apply to a live vacancy. Both take under 5 minutes.", tags: ["SAME DAY START", "NO FEE"] },
  { icon: Search, title: "Screening & Shortlist", body: "Our team manually verifies every candidate — qualifications, license status, experience, relocation readiness.", tags: ["2–5 DAYS", "PRE-SCREENED"] },
  { icon: FileCheck, title: "Docs, License & Visa", body: "We manage HAAD/DHA/SCFHS licensing, Prometric coaching, attestation, and full visa paperwork.", tags: ["WEEKS 2–6", "FULLY MANAGED"] },
  { icon: Plane, title: "Placed & Boarding", body: "Candidate joins their employer. We stay available through the first 30 days on the job.", tags: ["WEEK 6–8", "END-TO-END"] },
];

export function Process() {
  const [active, setActive] = useState<Set<number>>(new Set([0]));
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          STEPS.forEach((_, i) => {
            setTimeout(() => setActive((prev) => new Set(prev).add(i)), i * 200);
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#F0F4F9] py-[100px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="flex items-center justify-center gap-3">
          <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
          <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">The Process</span>
          <span className="inline-block w-8 h-px bg-[#0BAF8A]" />
        </Reveal>
        <Reveal delay={80} className="text-center mt-6">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0D1B2A] leading-[1.1]">
            Requirement to placement,<br />in 6–8 weeks.
          </h2>
          <p className="mt-4 max-w-[560px] mx-auto text-[16px] text-[#4A5568]">
            A transparent, end-to-end process. You'll always know exactly where your placement stands.
          </p>
        </Reveal>

        <div ref={rowRef} className="relative mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          <div className="hidden lg:block absolute top-[88px] left-[60px] right-[60px] border-t-2 border-dashed border-[#DDE3ED] z-0" />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active.has(i);
            return (
              <div key={i} className={`relative bg-white rounded-2xl p-7 border-[1.5px] transition-all duration-500 ${isActive ? "border-[#0BAF8A] -translate-y-1" : "border-[#DDE3ED]"}`} style={isActive ? { boxShadow: "0 8px 32px rgba(11,175,138,0.12)" } : {}}>
                <div className="absolute -top-3 left-7 bg-[#0F1C2E] text-white text-[11px] font-bold tracking-[0.08em] rounded-full px-3 py-1">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 bg-[#F0F4F9] rounded-[10px] flex items-center justify-center mt-2">
                  <Icon size={22} className="text-[#0D1B2A]" />
                </div>
                <h3 className="mt-4 text-[18px] font-bold text-[#0D1B2A]">{s.title}</h3>
                <p className="mt-2 text-[14px] text-[#4A5568] leading-[1.6]">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] text-[#64748B] border border-[#DDE3ED] rounded-full px-2.5 py-1 bg-white">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
