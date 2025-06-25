import Hero from "@/components/generativeaibasics/CoursePage/Hero";

import AIRoadmap from "@/components/generativeaibasics/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/generativeaibasics/CoursePage/project/Project";
import CertificateDisplay from "@/components/generativeaibasics/CoursePage/Cert";
export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   {/* todo add project section */}
   <CertificateDisplay/>
   <ContactForm/>
   
   {/* <FAQ/> */}

   </> 

)
}
