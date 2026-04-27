/**
 * Homepage — server-rendered by default.
 *
 * Only the Navbar (dropdown state) and ContactForm (form state) need client
 * hydration. Everything else is static HTML that Safari can paint without
 * running any JavaScript, which eliminates the WebKit memory-pressure crash.
 */
import dynamic from 'next/dynamic'

// Static server components — no JS needed on mobile
import HeroSection from '@/components/customComponents/AgenticAIBanner'
import { TimelineDemo } from '@/components/customComponents/TimeLine'
import ProgramsSection from '@/components/customComponents/project/Programs'
import CertificateMainPage from '@/components/customComponents/landingpage/cert'
import Footer from '@/components/customComponents/Footer'

// Navbar needs client JS for dropdown/mobile menu
const Navbar = dynamic(() => import('@/components/customComponents/navbar/Navbar'), {
  loading: () => <div className="h-16 w-full bg-black border-b border-zinc-800" aria-hidden />,
})

// Contact form needs client JS for form state
const ContactForm = dynamic(() => import('@/components/customComponents/landingpage/Contact'), {
  loading: () => <div className="w-full bg-black py-12" aria-hidden />,
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
