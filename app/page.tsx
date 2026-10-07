import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServiceAccordion from "@/components/ServiceAccordion";
import Experience from "@/components/Experience";
import CurtainFooter from "@/components/CurtainFooter";
import Curtain from "@/components/Curtain";

export default function Home() {
  return (
    <Curtain
      content={
        <main className="bg-[#F6F6F6]">
          <Hero />
          <SelectedWork />
          <ServiceAccordion />
          <Experience />
        </main>
      }
      footer={<CurtainFooter />}
    />
  );
}
