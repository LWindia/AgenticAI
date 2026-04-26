import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaShareAlt, FaUserTie, FaSuitcase } from "react-icons/fa";

const certificationFeatures = [
  {
    icon: <FaCertificate />,
    title: "Official and Verified",
    description: "Instructor-signed certificate with LinuxWorld's logo to verify your achievements.",
  },
  {
    icon: <FaShareAlt />,
    title: "Easily Shareable",
    description: "Add to your CV or post directly on LinkedIn, Instagram, and Twitter.",
  },
  {
    icon: <FaUserTie />,
    title: "Enhances Credibility",
    description: "Stand out among peers and enhance your professional credibility.",
  },
  {
    icon: <FaSuitcase />,
    title: "Increase Opportunities",
    description: "Attract employers and unlock desired job opportunities with your badge.",
  },
];

const AVATARS = [
  '/assets/hero/Forrester.jpg.jpeg',
  '/assets/hero/Microsoft.jpg.jpeg',
  '/assets/hero/TCS.jpg.jpeg',
  '/assets/hero/Zomato.jpg.jpeg',
];

const checklist = [
  "Complete all capsule modules & assignments",
  "Submit & pass the real-world project review",
  "Score 70%+ in the final assessment",
];

const CertificateMainPage: React.FC = () => {
  return (
    <div className="bg-black py-10 px-4 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Certification</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Get{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              Certified
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto mb-2">
            Complete real-world projects, pass assessments, and earn industry-recognized certificates that stand out on your resume.
          </p>

          {/* Trust line + avatars */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <Image key={i} src={src} alt={`Warrior ${i + 1}`} width={32} height={32}
                  className="rounded-full border-2 border-black object-cover"
                  style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: AVATARS.length - i }} />
              ))}
              <span className="ml-2 text-xs text-gray-300">Join <span className="text-white font-bold">500+</span> certified AI Warriors</span>
            </div>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {[
              { icon: '🏆', label: '10 Unique Badges' },
              { icon: '✅', label: 'Industry Recognized' },
              { icon: '🔗', label: 'Shareable on LinkedIn' },
            ].map((pill, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-white">
                <span>{pill.icon}</span>{pill.label}
              </span>
            ))}
          </div>

          {/* Gradient divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Features Grid */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {certificationFeatures.map((feature, index) => (
                <div key={index} className="bg-zinc-900 p-4 rounded-lg hover:shadow-md hover:shadow-purple-900/20 transition-all duration-300">
                  <div className="flex flex-col space-y-2">
                    <div className="relative group mr-4 w-fit">
                      <div className="relative p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-zinc-700">
                        {React.cloneElement(feature.icon, { className: "text-white text-xl" })}
                      </div>
                    </div>
                    <h3 className="text-base pt-2 font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">How to earn your certificate</p>
              <ul className="space-y-2">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link href="#contact">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition text-sm shadow-lg shadow-purple-900/30">
                Start Earning →
              </button>
            </Link>
          </div>

          {/* Certificate Image */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center gap-3">
            <div className="w-[180px] sm:w-[220px] md:w-full max-w-[300px]">
              <div className="relative group cursor-pointer">
                {/* No CSS filter blur (WebKit GPU); flat glow only on all breakpoints. */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-35 transition duration-300 group-hover:opacity-50" />
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-0.5 border-2 border-zinc-700">
                  <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/Main Page.jpg"
                      alt="Certificate"
                      width={300}
                      height={400}
                      sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 300px"
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Verified badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span className="text-green-400 text-sm">✅</span>
              <span className="text-xs font-semibold text-gray-300">Verified by LinuxWorld</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateMainPage;
