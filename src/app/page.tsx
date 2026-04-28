/**
 * Homepage — mobile-safe rendering strategy:
 *
 * Above fold (server-rendered, no client JS needed):
 *   - Navbar shell (client only for menu state)
 *   - HeroSection (server) + HeroLeadForm (client, small)
 *
 * Below fold (dynamically imported, SSR enabled, no ssr:false):
 *   - These are server-rendered but split into separate JS chunks so the
 *     browser does not parse/execute all their code during initial load.
 *   - This reduces the JS parse budget on mobile WebKit significantly.
 */
import dynamic from 'next/dynamic'
import HeroSection from '@/components/customComponents/AgenticAIBanner'

// Navbar: client for menu state, but lightweight
const Navbar = dynamic(() => import('@/components/customComponents/navbar/Navbar'), {
  loading: () => <div className="h-16 w-full bg-black border-b border-zinc-800" aria-hidden />,
})

// Below-fold: SSR enabled (no ssr:false), split into separate chunks
const TimelineDemo = dynamic(
  () => import('@/components/customComponents/TimeLine').then((m) => ({ default: m.TimelineDemo })),
  { loading: () => <div className="w-full bg-black py-20" aria-hidden /> },
)

const ProgramsSection = dynamic(
  () => import('@/components/customComponents/project/Programs'),
  { loading: () => <div className="w-full bg-black py-16" aria-hidden /> },
)

const CertificateMainPage = dynamic(
  () => import('@/components/customComponents/landingpage/cert'),
  { loading: () => <div className="w-full bg-black py-10" aria-hidden /> },
)

const ContactForm = dynamic(
  () => import('@/components/customComponents/landingpage/Contact'),
  { loading: () => <div className="w-full bg-black py-12" aria-hidden /> },
)

const Footer = dynamic(
  () => import('@/components/customComponents/Footer'),
  { loading: () => <div className="w-full bg-black py-8" aria-hidden /> },
)

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
