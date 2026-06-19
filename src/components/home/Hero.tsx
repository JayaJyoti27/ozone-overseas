import { useEffect, useState } from "react";
import { Briefcase, User, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Status = { label: string; classes: string };

const STATUS_CYCLE: Status[] = [
  { label: "IN REVIEW", classes: "bg-[#FFFBEB] border-[#FCD34D] text-[#B45309]" },
  { label: "SHORTLISTED ✓", classes: "bg-[#F0FDF4] border-[#86EFAC] text-[#16A34A]" },
  { label: "VISA APPROVED 🎉", classes: "bg-[#F0FDF4] border-[#4ADE80] text-[#15803D]" },
];

const STATIC_ROWS = [
  {
    flag: "🇸🇦",
    role: "ICU Staff Nurse",
    org: "Al Hammadi, KSA",
    status: { label: "SHORTLISTED", classes: "bg-[#F0FDF4] border-[#86EFAC] text-[#16A34A]" },
  },
  null,
  {
    flag: "🇶🇦",
    role: "Biomedical Tech",
    org: "Hamad Medical",
    status: { label: "DOCS SENT", classes: "bg-[#EFF6FF] border-[#93C5FD] text-[#1D4ED8]" },
  },
  {
    flag: "🇨🇦",
    role: "Staff Nurse",
    org: "Ontario LTC",
    status: { label: "VISA APPROVED ✓", classes: "bg-[#F0FDF4] border-[#4ADE80] text-[#15803D]" },
  },
];

const AVATARS = [
  { initials: "AK", bg: "#CBD5E1" },
  { initials: "RM", bg: "#94A3B8" },
  { initials: "SN", bg: "#7DD3C8" },
  { initials: "PV", bg: "#93C5FD" },
  { initials: "JD", bg: "#C4B5FD" },
];

export function Hero() {
  const [statusIdx, setStatusIdx] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlash(true);
      setTimeout(() => {
        setStatusIdx((i) => (i + 1) % STATUS_CYCLE.length);
        setFlash(false);
      }, 380);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const animatedStatus = STATUS_CYCLE[statusIdx];

  return (
    <section className="relative lg:h-[calc(100vh-68px)] lg:min-h-[640px] bg-[#EEF2F7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 lg:gap-8 h-full">
        {/* LEFT */}
        <div className="pt-10 lg:pt-16 pb-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block w-7 h-[2px] bg-[#0BAF8A]" />
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">
                India's International Recruitment Agency
              </span>
            </div>
            <h1 className="mt-5 font-extrabold text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] text-[#0D1B2A]">
              Where great hospitals
              <br />
              meet great <span className="text-[#0BAF8A]">talent.</span>
            </h1>
            <p className="mt-4 max-w-[440px] text-[15px] lg:text-[16px] leading-[1.6] text-[#4A5568]">
              Ozone Overseas connects verified hospitals and companies across the GCC and beyond
              with India's best healthcare and technical professionals. MEA licensed. 15 years.
              5,000 placements.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-5 flex flex-col gap-2.5 max-w-[400px]">
            <button className="group flex items-center justify-between bg-[#0F1C2E] hover:bg-[#162840] transition-colors rounded-[10px] py-[12px] px-5 text-left w-full">
              <div className="flex items-center gap-3">
                <Briefcase className="text-white" size={18} />
                <div>
                  <div className="text-white text-[14px] font-semibold">I'm an Employer</div>
                  <div className="text-[#64748B] text-[12px]">
                    Post a requirement, get candidates in 48h
                  </div>
                </div>
              </div>
              <ArrowRight
                className="text-white group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
            <button className="group flex items-center justify-between bg-[#0BAF8A] hover:bg-[#09A07F] transition-colors rounded-[10px] py-[12px] px-5 text-left w-full">
              <div className="flex items-center gap-3">
                <User className="text-white" size={18} />
                <div>
                  <div className="text-white text-[14px] font-semibold">I'm a Job Seeker</div>
                  <div className="text-white/70 text-[12px]">Browse vacancies in 10+ countries</div>
                </div>
              </div>
              <ArrowRight
                className="text-white group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
          </Reveal>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex">
              {AVATARS.map((a, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0D1B2A] ring-2 ring-[#EEF2F7]"
                  style={{ background: a.bg, marginLeft: i === 0 ? 0 : -8 }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="text-[12px] text-[#94A3B8]">
              Trusted by 200+ hospitals & companies
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center lg:pt-10 pb-12">
          <div className="relative w-full max-w-[400px]">
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(15,28,46,0.1)" }}
            >
              <div className="flex items-center justify-between px-6 py-3 border-b border-[#EEF2F7]">
                <span className="text-[13px] font-semibold text-[#0D1B2A]">Active Placements</span>
                <span className="text-[12px] text-[#94A3B8]">June 2025</span>
              </div>
              {STATIC_ROWS.map((row, idx) => {
                if (row === null) {
                  // animated row
                  return (
                    <div
                      key="anim"
                      className={`flex items-center justify-between px-6 py-2.5 border-b border-[#F8FAFC] ${flash ? "flash" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[18px]">🇦🇪</span>
                        <div>
                          <div className="text-[14px] font-semibold text-[#0D1B2A]">OT Nurse</div>
                          <div className="text-[12px] text-[#94A3B8]">NMC Healthcare, Dubai</div>
                        </div>
                      </div>
                      <span
                        key={statusIdx}
                        className={`fade-row text-[11px] font-semibold px-2.5 py-1 rounded-full border ${animatedStatus.classes}`}
                      >
                        {animatedStatus.label}
                      </span>
                    </div>
                  );
                }
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-2.5 border-b border-[#F8FAFC]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[18px]">{row.flag}</span>
                      <div>
                        <div className="text-[14px] font-semibold text-[#0D1B2A]">{row.role}</div>
                        <div className="text-[12px] text-[#94A3B8]">{row.org}</div>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${row.status.classes}`}
                    >
                      {row.status.label}
                    </span>
                  </div>
                );
              })}
              <div className="flex items-center justify-between px-6 py-2.5 bg-[#F8FAFC]">
                <span className="text-[12px] text-[#94A3B8]">12 Active · 48 Placed this month</span>
                <a href="#" className="text-[12px] font-semibold text-[#0BAF8A]">
                  View all →
                </a>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#0F1C2E] rounded-[10px] px-[18px] py-3 z-10 shadow-xl">
              <div className="text-[11px] font-bold text-[#0BAF8A]">🟢 New Vacancy</div>
              <div className="text-[12px] text-white">Head Nurse · Qatar · Closing in 3 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
