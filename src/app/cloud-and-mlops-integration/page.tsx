import Hero from "@/components/cloudandmlopsintegration/CoursePage/Hero";

import AIRoadmap from "@/components/cloudandmlopsintegration/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/cloudandmlopsintegration/CoursePage/project/Project";
import CertificateDisplay from "@/components/cloudandmlopsintegration/CoursePage/Cert";
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
