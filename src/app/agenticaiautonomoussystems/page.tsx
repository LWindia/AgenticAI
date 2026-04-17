import Hero from "@/components/agenticaiautonomoussystems/CoursePage/Hero";

// import AIRoadmap from "@/components/customComponents/";
import AIRoadmap from "../../components/agenticaiautonomoussystems/CoursePage/Roadmap";
import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/agenticaiautonomoussystems/CoursePage/project/Project";
import CertificateDisplay from "@/components/agenticaiautonomoussystems/CoursePage/Cert";
import Flow from "@/components/agenticaiautonomoussystems/CoursePage/newComponents/Flow"
import News from "@/components/agenticaiautonomoussystems/CoursePage/News";
export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   {/* todo add project section */}
   <Flow/>
   <CertificateDisplay/>
   <News/>
   <ContactForm/>
   
   {/* <FAQ/> */}

   </> 

)
}
