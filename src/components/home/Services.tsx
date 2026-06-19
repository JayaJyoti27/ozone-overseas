import { useEffect, useRef } from "react";
import { Hospital, Wrench, Plane, FileText, BookOpen, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ROWS = [
  { icon: Hospital, title: "Healthcare Recruitment", tags: ["CORE SERVICE", "GCC FOCUSED"] },
  { icon: Wrench, title: "Technical Recruitment", tags: ["CORE SERVICE", "CONSTRUCTION & OIL & GAS"] },
  { icon: Plane, title: "Visa & Immigration", tags: ["END-TO-END", "ALL COUNTRIES"] },
  { icon: FileText, title: "Documentation & Attestation", tags: ["INCLUDED", "MEA/HRD/MOFA"] },
  { icon: BookOpen, title: "Prometric Coaching", tags: ["FREE", "NURSES & PARAMEDICAL"] },
  { icon: Globe, title: "Pre-departure Grooming", tags: ["INCLUDED", "ALL CANDIDATES"] },
];

function Row({ icon: Icon, title, tags, idx }: { icon: typeof Hospital; title: string; tags: string[]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => barRef.current?.classList.add("in-view"), idx * 100);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [idx]);

  return (
    <div ref={ref} className="relative overflow-hidden flex items-center gap-4 border border-[#DDE3ED] rounded-[10px] bg-white px-6 py-5">
      <span ref={barRef} className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#0BAF8A]" />
      <div className="w-11 h-11 bg-[#F0F4F9] rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-[#0D1B2A]" />
      </div>
      <span className="flex-1 text-[15px] font-semibold text-[#0D1B2A]">{title}</span>
      <div className="hidden sm:flex gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[11px] text-[#64748B] bg-[#F0F4F9] rounded-full px-2.5 py-1">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="flex items-center gap-3 mb-10">
          <span className="block w-7 h-[2px] bg-[#0BAF8A]" />
          <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">Our Services</span>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_55fr] gap-12 lg:gap-16">
          <Reveal>
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0D1B2A] leading-[1.1]">
              Everything handled,<br />start to<br /><span className="text-[#0BAF8A]">finish.</span>
            </h2>
            <p className="mt-4 max-w-[360px] text-[16px] text-[#4A5568] leading-[1.6]">
              From finding the right candidate to getting them on a plane — we own the entire process. No external agents. No gaps.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Healthcare & technical recruitment",
                "Visa & work permit processing",
                "HAAD / DHA / SCFHS licensing",
                "Certificate attestation & documentation",
                "Prometric coaching (free for candidates)",
                "Pre-departure grooming & orientation",
              ].map((t) => (
                <li key={t} className="text-[14px] text-[#4A5568] flex items-start gap-2">
                  <span className="text-[#0BAF8A] mt-0.5">✓</span>{t}
                </li>
              ))}
            </ul>
            <button className="mt-8 group flex items-center justify-between bg-[#0F1C2E] hover:bg-[#162840] rounded-[10px] py-[14px] px-5 transition-colors max-w-[260px]">
              <span className="text-white text-[14px] font-semibold">See All Services</span>
              <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </Reveal>
          <div className="flex flex-col gap-2.5 lg:ml-auto w-full">
            {ROWS.map((r, i) => (
              <Row key={i} idx={i} icon={r.icon} title={r.title} tags={r.tags} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
