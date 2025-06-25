import Hero from "@/components/advancegenerativemodels/CoursePage/Hero";

import AIRoadmap from "@/components/advancegenerativemodels/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/advancegenerativemodels/CoursePage/project/Project";
import CertificateDisplay from "@/components/advancegenerativemodels/CoursePage/Cert";
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
