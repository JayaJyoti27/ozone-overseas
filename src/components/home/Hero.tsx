import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const FLOW = ["Application", "CV Review", "Interview", "Visa", "Placed"];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % FLOW.length);
    }, 1500);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FAFD]">
      {/* BG */}

      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#0BAF8A]/10 blur-[150px]" />

        <div className="absolute right-0 top-[25%] h-[420px] w-[420px] rounded-full bg-[#8BC4FF]/10 blur-[150px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[54fr_46fr] min-h-[calc(100vh-72px)] items-center">
          {/* LEFT */}

          <div className="py-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#0BAF8A]" />

                <div className="uppercase text-[11px] tracking-[.22em] text-[#8A98AE] font-bold">
                  International Recruitment Platform
                </div>
              </div>

              {/* NEW H1 */}

              <h1 className="mt-8 max-w-[650px]">
                <span className="block text-[42px] sm:text-[58px] lg:text-[74px] font-black leading-[0.92] tracking-[-0.06em] text-[#0D1B2A]">
                  Hire globally.
                </span>

                <span className="block text-[42px] sm:text-[58px] lg:text-[74px] font-black leading-[0.92] tracking-[-0.06em] text-[#0D1B2A]">
                  Track every
                </span>

                <span className="block text-[42px] sm:text-[58px] lg:text-[74px] font-black leading-[0.92] tracking-[-0.06em] text-[#0BAF8A]">
                  placement.
                </span>
              </h1>

              <p className="mt-7 max-w-[520px] text-[17px] leading-[1.8] text-[#64748B]">
                Source international talent, manage recruitment pipelines, and move candidates from
                application to placement.
              </p>
            </Reveal>

            {/* CTA */}

            <Reveal delay={150}>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="h-[60px] px-8 rounded-[18px] bg-[#081A30] text-white font-semibold hover:-translate-y-1 transition">
                  Hire Talent
                </button>

                <button className="h-[60px] px-8 rounded-[18px] border border-[#DCE7F2] bg-white flex items-center gap-3 hover:-translate-y-1 transition">
                  Find Opportunities
                  <ArrowRight size={18} />
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}

          {/* RIGHT */}

          <Reveal delay={300}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[610px]">
                {/* STAMP */}

                <div
                  className="
absolute
-right-3
-top-[-18px]
z-20
rotate-[10deg]
"
                >
                  <div
                    className="
w-[92px]
h-[92px]
rounded-full
bg-[black]
border-[10 px]
border-[#D7FFF5]
shadow-[0_20px_50px_rgba(11,175,138,.25)]
flex
flex-col
items-center
justify-center
text-white
"
                  >
                    <div className="text-[20px] font-black leading-none">5000+</div>

                    <div className="text-[8px] uppercase tracking-[.25em] mt-1">Placed</div>
                  </div>
                </div>

                {/* BOX */}

                <div
                  className="
w-full
rounded-[15px]
bg-[#0BAF8A]
px-6
py-5
shadow-[0_40px_100px_rgba(10,20,40,.12)]
"
                >
                  {/* HEADER */}

                  <div>
                    <div
                      className="
uppercase
tracking-[.25em]
text-[11px]
text-white/40
"
                    >
                      Currently Hiring
                    </div>

                    <div
                      className="
mt-2
text-[34px]
leading-[1.02]
font-black
text-white
max-w-[420px]
"
                    >
                      Find opportunities across borders.
                    </div>
                  </div>

                  {/* GRID */}

                  <div className="mt-8 grid grid-cols-2 gap-2">
                    {[
                      {
                        title: "ICU Staff Nurse",
                        country: "Saudi Arabia",
                      },

                      {
                        title: "Biomedical",
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
rounded-[10px]
bg-[#F7FAFD]
p-5
h-[122px]
transition
hover:-translate-y-1
"
                      >
                        <div className="flex h-full flex-col justify-between">
                          <div
                            className="
w-[10px]
h-[10px]
rounded-full
bg-[#0BAF8A]
"
                          />

                          <div>
                            <div
                              className="
text-[#081A30]
text-[22px]
font-bold
leading-[1.05]
"
                            >
                              {item.title}
                            </div>

                            <div
                              className="
mt-2
text-[#718198]
text-[14px]
"
                            >
                              {item.country}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FOOT */}

                  <div
                    className="
mt-6
pt-5
border-t
border-white/10
flex
justify-between
text-[13px]
"
                  >
                    <div className="text-white/40">Updated live</div>

                    <div className="text-[#58E0BD]">Explore all →</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
