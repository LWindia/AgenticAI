import Hero from "@/components/advancecomputervision/CoursePage/Hero";

import AIRoadmap from "@/components/advancecomputervision/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/advancecomputervision/CoursePage/project/Project";
import CertificateDisplay from "@/components/advancecomputervision/CoursePage/Cert";
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
