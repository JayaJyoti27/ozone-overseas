<<<<<<< HEAD
import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, User, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const MODES = [
  {
    tag: "FOR EMPLOYERS",
    icon: Briefcase,

    title1: "Want to hire?",
    title2: "We find your perfect candidate.",

    desc: "Submit your requirement once — our team delivers pre-screened international candidates.",

    points: [
      "Free requirement submission",
      "Pre-screened, verified candidates",
      "MEA licensed and compliant",
      "End-to-end visa support",
    ],

    button: "Post Requirement",

    dark: true,
  },

  {
    tag: "FOR CANDIDATES",
    icon: User,

    title1: "Want to work abroad?",
    title2: "We find your perfect opportunity.",

    desc: "Apply once — explore international vacancies and track every stage live.",

    points: [
      "Free to apply",
      "Prometric coaching included",
      "Visa & documentation handled",
      "Pre-departure guidance",
    ],

    button: "Browse Opportunities",

    dark: false,
  },
];

export function FinalCTA() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % MODES.length);
    }, 2000);

    return () => clearInterval(id);
  }, []);

  const item = MODES[idx];
  const Icon = item.icon;

  return (
    <section className="bg-[#e1e3e4] py-[80px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[40px] sm:text-[54px] font-black leading-[1.05] text-[#0D1B2A]">
              One agency.
              <br />
              <span className="text-[#009975]">Two goals.</span>
            </h2>

            <p className="mt-5 max-w-[650px] mx-auto text-[#64748B]">
              Whether you need staff or your next opportunity — Ozone handles everything from
              sourcing to placement.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            key={idx}
            className={`
              mt-14
              rounded-[15px]
              transition-all
              duration-500
              overflow-hidden

              ${item.dark ? "bg-[#081A30]" : "bg-white border border-[#DDE5EF]"}
            `}
          >
            <div className="grid lg:grid-cols-[1.2fr_.8fr]">
              {/* LEFT */}

              <div className="p-12">
                <div
                  className={`
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    text-[11px]
                    font-bold

                    ${item.dark ? "bg-[#0BAF8A]/10 text-[#41E5C0]" : "bg-[#EAFBF6] text-[#0BAF8A]"}
                  `}
                >
                  {item.tag}
                </div>

                <div
                  className={`
                    mt-8
                    w-[58px]
                    h-[58px]
                    rounded-[16px]
                    flex
                    items-center
                    justify-center

                    ${item.dark ? "bg-white/5" : "bg-[#F5F9FD]"}
                  `}
                >
                  <Icon size={28} className={item.dark ? "text-white" : "text-[#0D1B2A]"} />
                </div>

                <h3
                  className={`
                    mt-8
                    text-[44px]
                    font-black
                    leading-[1]

                    ${item.dark ? "text-white" : "text-[#0D1B2A]"}
                  `}
                >
                  {item.title1}

                  <span className="block text-[#0BAF8A] mt-2">{item.title2}</span>
                </h3>

                <p
                  className={`
                    mt-6
                    max-w-[560px]
                    leading-[1.8]

                    ${item.dark ? "text-white/60" : "text-[#64748B]"}
                  `}
                >
                  {item.desc}
                </p>

                <button
                  className="
                    mt-8
                    h-[60px]
                    px-8
                    rounded-[16px]
                    bg-[#009975]
                    text-white
                    font-semibold
                    inline-flex
                    items-center
                    gap-3
                  "
                >
                  {item.button}

                  <ArrowRight size={18} />
                </button>
              </div>

              {/* RIGHT */}

              <div
                className="
                  p-12
                  flex
                  flex-col
                  justify-center
                  gap-4
                "
              >
                {item.points.map((f) => (
                  <div
                    key={f}
                    className={`
                      rounded-[22px]
                      px-6
                      py-5

                      ${item.dark ? "bg-white/5" : "bg-[#F5F9FD]"}
                    `}
                  >
                    <div className="flex gap-3">
                      <Check size={18} className="text-[#0BAF8A]" />

                      <span className={item.dark ? "text-white/85" : "text-[#0D1B2A]"}>{f}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
=======
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
>>>>>>> 67589509f35f39894a5900b3fb234793f5968eb9
      </div>
    </section>
  );
}
