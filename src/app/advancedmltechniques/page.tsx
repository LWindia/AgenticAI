import Hero from "@/components/advancedmltechniques/CoursePage/Hero";
import AIRoadmap from "@/components/advancedmltechniques/CoursePage/Roadmap";
import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/advancedmltechniques/CoursePage/project/Project";
import CertificateDisplay from "@/components/advancedmltechniques/CoursePage/Cert";

export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   <CertificateDisplay/>
   <ContactForm/>
   </> 
  )
}
