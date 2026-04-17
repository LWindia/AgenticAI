import Hero from "@/components/foundationinml/CoursePage/Hero";

import AIRoadmap from "@/components/foundationinml/CoursePage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/foundationinml/CoursePage/project/Project";
import CertificateDisplay from "@/components/foundationinml/CoursePage/Cert";
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
