// import Hero from "@/components/advancedagenticai/CoursePage/Hero";
import HeroSection from "@/components/advancedagenticai/CoursePage/Hero";
// import AIRoadmap from "@/components/customComponents/";
import AIRoadmap from "../../components/advancedagenticai/CoursePage/Roadmap";
import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/advancedagenticai/CoursePage/project/Project";
import CertificateDisplay from "@/components/advancedagenticai/CoursePage/Cert";
export default function Home() {
  return (
   <>
   <HeroSection/>

   <AIRoadmap/>
   <ProgramsSection/>
   {/* todo add project section */}
   <CertificateDisplay/>
   <ContactForm/>
   
   {/* <FAQ/> */}

   </> 

)
}
