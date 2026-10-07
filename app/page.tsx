import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServiceAccordion from "@/components/ServiceAccordion";
import Writing from "@/components/Writing";
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
          <Writing />
          <Experience />
        </main>
      }
      footer={<CurtainFooter />}
    />
  );
}
