import dynamic from 'next/dynamic'
import Navbar from '@/components/customComponents/navbar/Navbar'
import HeroSection from '@/components/customComponents/AgenticAIBanner'

const TimelineDemo = dynamic(
  () => import('@/components/customComponents/TimeLine').then((m) => ({ default: m.TimelineDemo })),
  { loading: () => <div className="w-full bg-black py-20" /> },
)

const ProgramsSection = dynamic(() => import('@/components/customComponents/project/Programs'), {
  loading: () => <div className="w-full bg-black py-16" />,
})

const CertificateMainPage = dynamic(() => import('@/components/customComponents/landingpage/cert'), {
  loading: () => <div className="w-full bg-black py-10" />,
})

const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), {
  loading: () => <div className="w-full bg-black py-12" />,
})

const Footer = dynamic(() => import('@/components/customComponents/Footer'), {
  loading: () => <div className="w-full bg-black py-8" />,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TimelineDemo />
      <ProgramsSection />
      <CertificateMainPage />
      <ContactForm />
      <Footer />
    </>
  )
}
