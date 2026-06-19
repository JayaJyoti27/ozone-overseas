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
      <div
        className="
  max-w-[1240px]
  mx-auto
  px-6
  pt-[15px]
  pb-[40px]
  mb-[-40px]
  grid
  lg:grid-cols-[56fr_44fr]
  gap-[72px]
  items-center
  "
      >
        {/* LEFT */}
        <div className="pt-7 lg:pt-16 pb-10">
          <div className="flex items-center gap-3">
            <span className="block w-7 h-[2px] bg-[#0BAF8A]" />
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">
              India's International Recruitment Agency
            </span>
          </div>
          <h1 className="mt-5 font-extrabold text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] text-[#0D1B2A]">
            Where great Companies
            <br />
            meet exceptional <span className="text-[#0BAF8A]">talent.</span>
          </h1>
          <p className="mt-4 max-w-[440px] text-[15px] lg:text-[16px] leading-[1.6] text-[#4A5568]">
            Ozone Overseas connects verified hospitals and companies across the GCC and beyond with
            India's best healthcare and technical professionals. MEA licensed. 15 years. 5,000
            placements.
          </p>

          <Reveal delay={20} className="mt-5 flex flex-col gap-2.5 max-w-[400px]">
            <div className="space-y-3">
              {/* EMPLOYER */}

              <button
                className="
    group
    relative
    overflow-hidden
    w-full
    rounded-[18px]
    bg-[#08192F]
    px-6
    py-5
    text-left
    transition-all
    duration-300
    hover:-translate-y-[3px]
    hover:shadow-[0_24px_60px_rgba(8,25,47,.18)]
    hover:scale-[1.01]
    "
              >
                <div
                  className="
      absolute
      right-[-20px]
      top-[-20px]
      w-[90px]
      h-[90px]
      rounded-full
      bg-white/[0.04]
      group-hover:scale-125
      transition
      "
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="
          w-[52px]
          h-[52px]
          rounded-[16px]
          bg-white/8
          flex
          items-center
          justify-center
          group-hover:rotate-[-8deg]
          transition
          "
                    >
                      <Briefcase size={22} className="text-[#58E0BD]" />
                    </div>

                    <div>
                      <div className="text-white text-[18px] font-bold">Hire Talent</div>

                      <div className="text-white/60 text-[13px] mt-1">
                        Receive shortlisted candidates in 48 hours
                      </div>
                    </div>
                  </div>

                  <div
                    className="
        w-[42px]
        h-[42px]
        rounded-full
        bg-white/8
        flex
        items-center
        justify-center
        group-hover:translate-x-1
        transition
        "
                  >
                    <ArrowRight className="text-white" size={18} />
                  </div>
                </div>
              </button>

              {/* CANDIDATE */}

              <button
                className="
    group
    relative
    overflow-hidden
    w-full
    rounded-[18px]
    bg-[#09A07F]
    px-6
    py-5
    text-left
    transition-all
    duration-300
    hover:-translate-y-[3px]
    hover:shadow-[0_26px_60px_rgba(11,175,138,.24)]
    hover:scale-[1.01]
    "
              >
                <div
                  className="
      absolute
      right-[-30px]
      top-[-30px]
      w-[110px]
      h-[110px]
      rounded-full
      bg-white/10
      group-hover:scale-125
      transition
      "
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="
          w-[52px]
          h-[52px]
          rounded-[16px]
          bg-white/15
          flex
          items-center
          justify-center
          group-hover:rotate-[8deg]
          transition
          "
                    >
                      <User size={22} className="text-white" />
                    </div>

                    <div>
                      <div className="text-white text-[18px] font-bold">Find Jobs</div>

                      <div className="text-white/75 text-[13px] mt-1">
                        Browse vacancies across 10+ countries
                      </div>
                    </div>
                  </div>

                  <div
                    className="
        w-[42px]
        h-[42px]
        rounded-full
        bg-white/15
        flex
        items-center
        justify-center
        group-hover:translate-x-1
        transition
        "
                  >
                    <ArrowRight className="text-white" size={18} />
                  </div>
                </div>
              </button>
            </div>
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
        {/* RIGHT */}

        <Reveal delay={50}>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              {/* STAMP */}
              <div
                className="
      absolute
      right-[-8px]
      top-[14px]
      z-20
      rotate-[8deg]
      "
              >
                <div
                  className="
        w-[88px]
        h-[88px]
        rounded-full
        bg-[#06101E]
        border-[6px]
        border-[#D8FFF6]
        shadow-[0_20px_45px_rgba(11,175,138,.22)]
        flex
        flex-col
        items-center
        justify-center
        "
                >
                  <div className="text-white text-[20px] font-black leading-none">5000+</div>

                  <div
                    className="
          text-white/85
          text-[8px]
          uppercase
          tracking-[.22em]
          mt-1
          "
                  >
                    Placed
                  </div>
                </div>
              </div>

              {/* MAIN CARD */}
              <div
                className="
      w-full
      rounded-[18px]
      bg-[#09A07F]
      px-6
      py-6
      overflow-hidden
      shadow-[0_30px_90px_rgba(6,25,45,.14)]
      "
              >
                {/* HEADER */}
                <div className="pr-[70px]">
                  <div
                    className="
          uppercase
          tracking-[.22em]
          text-[11px]
          font-semibold
          text-white/45
          "
                  >
                    CURRENTLY HIRING
                  </div>

                  <h3
                    className="
          mt-2
          text-[32px]
          leading-[1]
          font-black
          text-white
          max-w-[390px]
          "
                  >
                    Find opportunities
                    <br />
                    across borders.
                  </h3>
                </div>

                {/* JOBS */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    {
                      title: "ICU Staff Nurse",
                      country: "Saudi Arabia",
                    },
                    {
                      title: "Biomedical Tech",
                      country: "Qatar",
                    },
                    {
                      title: "Caregiver",
                      country: "Canada",
                    },
                    {
                      title: "Hospitality",
                      country: "UAE",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="
            rounded-[22px]
            bg-[#F8FCFD]
            h-[118px]
            px-5
            py-4
            flex
            flex-col
            justify-between
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "
                    >
                      <div
                        className="
              w-[10px]
              h-[10px]
              rounded-full
              bg-[#09A07F]
              "
                      />

                      <div>
                        <div
                          className="
                text-[#08192F]
                text-[18px]
                leading-[1.1]
                font-black
                "
                        >
                          {item.title}
                        </div>

                        <div
                          className="
                mt-2
                text-[#74849B]
                text-[14px]
                "
                        >
                          {item.country}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div
                  className="
        mt-5
        pt-5
        border-t
        border-white/12
        flex
        items-center
        justify-between
        "
                >
                  <div className="text-[13px] text-white/55">Updated live</div>

                  <button
                    className="
          text-[14px]
          font-semibold
          text-[#D6FFF6]
          hover:translate-x-1
          transition
          "
                  >
                    Explore all →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
