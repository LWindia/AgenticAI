import dynamic from 'next/dynamic'
import HeroSection from '@/components/customComponents/AgenticAIBanner'

// Navbar is lightweight — load normally
const Navbar = dynamic(() => import('@/components/customComponents/navbar/Navbar'), {
  ssr: false,
  loading: () => <div className="h-16 w-full bg-black border-b border-zinc-800" />,
})

// Timeline has many badge images — lazy load after hero
const TimelineDemo = dynamic(
  () => import('@/components/customComponents/TimeLine').then((m) => ({ default: m.TimelineDemo })),
  {
    ssr: false,
    loading: () => <div className="w-full bg-black py-20" />,
  },
)

const ProgramsSection = dynamic(() => import('@/components/customComponents/project/Programs'), {
  ssr: false,
  loading: () => <div className="w-full bg-black py-16" />,
})

const CertificateMainPage = dynamic(() => import('@/components/customComponents/landingpage/cert'), {
  ssr: false,
  loading: () => <div className="w-full bg-black py-10" />,
})

const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), {
  ssr: false,
  loading: () => <div className="w-full bg-black py-12" />,
})

const Footer = dynamic(() => import('@/components/customComponents/Footer'), {
  ssr: false,
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
