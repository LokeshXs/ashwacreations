import ContactSection from "@/components/landing/ContactSection";
import FAQSection from "@/components/landing/FAQSection";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/Stats";
import TestimonialSection from "@/components/landing/TestimonialSection";


export default function Page() {


  return (
    <main className="min-h-screen ">

      <HeroSection />
   
      <ProcessSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <PricingSection/>
      <TestimonialSection/>
      <ContactSection/>
      <FAQSection/>


      

    </main>
  )
}