import dynamic from 'next/dynamic';
import CourseNavbar from "@/components/customComponents/CourseNavbar";
import Hero from "@/components/advancedmltechniques/CoursePage/Hero";

const AIRoadmap = dynamic(() => import('@/components/advancedmltechniques/CoursePage/Roadmap'), { loading: () => <div className="w-full bg-black py-10" /> });
const ProgramsSection = dynamic(() => import('../../components/advancedmltechniques/CoursePage/project/Project'), { loading: () => <div className="w-full bg-black py-10" /> });
const CertificateDisplay = dynamic(() => import('@/components/advancedmltechniques/CoursePage/Cert'), { loading: () => <div className="w-full bg-black py-8" /> });
const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), { loading: () => <div className="w-full bg-black py-8" /> });

export default function Home() {
  return (
   <>
   <CourseNavbar />
    <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   <CertificateDisplay/>
   <ContactForm/>
   </> 
  )
}
