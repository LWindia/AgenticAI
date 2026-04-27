import dynamic from 'next/dynamic';
import CourseNavbar from "@/components/customComponents/CourseNavbar";
import Hero from "@/components/generativeaibasics/CoursePage/Hero";

const AIRoadmap = dynamic(() => import('@/components/generativeaibasics/CoursePage/Roadmap'), { loading: () => <div className="w-full bg-black py-10" /> });
const FAQ = dynamic(() => import('@/components/customComponents/Faq'), { loading: () => <div className="w-full bg-black py-8" /> });
const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), { loading: () => <div className="w-full bg-black py-8" /> });
const ProgramsSection = dynamic(() => import('../../components/generativeaibasics/CoursePage/project/Project'), { loading: () => <div className="w-full bg-black py-10" /> });
const CertificateDisplay = dynamic(() => import('@/components/generativeaibasics/CoursePage/Cert'), { loading: () => <div className="w-full bg-black py-8" /> });

export default function Home() {
  return (
   <>
   <CourseNavbar />
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
