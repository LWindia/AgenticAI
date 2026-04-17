import Hero from "@/components/CoursePage/deep-learning-with-neural-networks/Hero";

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/CoursePage/foundation-in-ml/project/Project";
import CertificateDisplay from "@/components/CoursePage/foundation-in-ml/Cert";
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
