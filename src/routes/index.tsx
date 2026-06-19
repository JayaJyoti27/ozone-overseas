import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/Stats";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Countries } from "@/components/home/Countries";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer, FloatingWhatsApp, ScrollProgress } from "@/components/home/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ozone Overseas — Where great hospitals meet great talent" },
      { name: "description", content: "MEA Licensed international recruitment. 5,000+ placements across 10+ countries. Connecting hospitals and companies with India's best healthcare and technical professionals." },
      { property: "og:title", content: "Ozone Overseas — India's International Recruitment Agency" },
      { property: "og:description", content: "MEA Licensed. 15 years. 5,000 placements across the GCC and beyond." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="pt-[68px]">
        <Hero />
        <StatsStrip />
        <WhoWeServe />
        <Process />
        <Services />
        <Countries />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
