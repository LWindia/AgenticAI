import dynamic from 'next/dynamic';
import CourseNavbar from "@/components/customComponents/CourseNavbar";
import Hero from "@/components/advancenlptechniques/CoursePage/Hero";

const AIRoadmap = dynamic(() => import('@/components/advancenlptechniques/CoursePage/Roadmap'), { loading: () => <div className="w-full bg-black py-10" /> });
const FAQ = dynamic(() => import('@/components/customComponents/Faq'), { loading: () => <div className="w-full bg-black py-8" /> });
const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), { loading: () => <div className="w-full bg-black py-8" /> });
const ProgramsSection = dynamic(() => import('../../components/advancenlptechniques/CoursePage/project/Project'), { loading: () => <div className="w-full bg-black py-10" /> });
const CertificateDisplay = dynamic(() => import('@/components/advancenlptechniques/CoursePage/Cert'), { loading: () => <div className="w-full bg-black py-8" /> });

export default function Home() {
  return (
   <>
   <CourseNavbar />
    <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   <CertificateDisplay/>
   <ContactForm/>
   <FAQ/>

   </> 

)
}
