import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/Stats";


export default function Page() {


  return (
    <main className="min-h-screen ">

      <HeroSection />
   
      <ProcessSection/>
      <ServicesSection/>
      <ProjectsSection/>


      

    </main>
  )
}