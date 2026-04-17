import Hero from "@/components/aiopsandmlops/CoursePage/Hero";

import AIRoadmap from "@/components/aiopsandmlops/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "@/components/aiopsandmlops/CoursePage/project/Project";
import CertificateDisplay from "@/components/aiopsandmlops/CoursePage/Cert";
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
