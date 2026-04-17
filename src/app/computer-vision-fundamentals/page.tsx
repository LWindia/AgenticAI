import Hero from "@/components/computervisionfundamentals/CoursePage/Hero";

import AIRoadmap from "@/components/computervisionfundamentals/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/computervisionfundamentals/CoursePage/project/Project";
import CertificateDisplay from "@/components/computervisionfundamentals/CoursePage/Cert";
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
