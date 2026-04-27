import dynamic from 'next/dynamic';
import CourseNavbar from "@/components/customComponents/CourseNavbar";
import Hero from "@/components/agenticaiautonomoussystems/CoursePage/Hero";

// import AIRoadmap from "@/components/customComponents/";
const AIRoadmap = dynamic(() => import('../../components/agenticaiautonomoussystems/CoursePage/Roadmap'), { loading: () => <div className="w-full bg-black py-10" /> });
const FAQ = dynamic(() => import('@/components/customComponents/Faq'), { loading: () => <div className="w-full bg-black py-8" /> });
const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), { loading: () => <div className="w-full bg-black py-8" /> });
const ProgramsSection = dynamic(() => import('../../components/agenticaiautonomoussystems/CoursePage/project/Project'), { loading: () => <div className="w-full bg-black py-10" /> });
const CertificateDisplay = dynamic(() => import('@/components/agenticaiautonomoussystems/CoursePage/Cert'), { loading: () => <div className="w-full bg-black py-8" /> });
const Flow = dynamic(() => import('@/components/agenticaiautonomoussystems/CoursePage/newComponents/Flow'), { loading: () => <div className="w-full bg-black py-8" /> });
const News = dynamic(() => import('@/components/agenticaiautonomoussystems/CoursePage/News'), { loading: () => <div className="w-full bg-black py-8" /> });

export default function Home() {
  return (
   <>
   <CourseNavbar />
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
