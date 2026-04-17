import Hero from "@/components/deeplearningwithneuralnetworks/CoursePage/Hero";

// import AIRoadmap from "@/components/customComponents/";
import AIRoadmap from "../../components/deeplearningwithneuralnetworks/CoursePage/Roadmap";
import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/deeplearningwithneuralnetworks/CoursePage/project/Project";
import CertificateDisplay from "@/components/deeplearningwithneuralnetworks/CoursePage/Cert";
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
