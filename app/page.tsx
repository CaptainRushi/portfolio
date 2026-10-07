import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServiceAccordion from "@/components/ServiceAccordion";
import Experience from "@/components/Experience";
import CurtainFooter from "@/components/CurtainFooter";

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-10 mx-auto max-w-[1240px] overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,.35)] md:mx-[8%] md:mt-[95px] max-md:m-3 max-md:mt-3">
        <Hero />
        <SelectedWork />
        <ServiceAccordion />
        <Experience />
        {/* sheet bottom shadow onto footer */}
        <div aria-hidden="true" className="relative h-6 bg-[#262626] shadow-[0_18px_40px_rgba(0,0,0,.45)]" />
      </main>
      <div className="sticky bottom-0 z-0 -mt-6">
        <CurtainFooter />
      </div>
    </div>
  );
}
