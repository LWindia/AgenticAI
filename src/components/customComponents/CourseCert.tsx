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

interface CourseCertProps {
  certImage: string;
  badgeName: string;
}

export default function CourseCert({ certImage, badgeName }: CourseCertProps) {
  return (
    <div className="bg-black py-10 px-4 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Certification</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              Certified
            </span>
          </h2>
          <p className="text-sm text-gray-300 max-w-lg mx-auto mb-3">
            Complete real-world projects, pass assessments, and earn your <span className="text-white font-semibold">{badgeName}</span> badge.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {['🏆 Industry Recognized', '✅ Verified by LinuxWorld', '🔗 Shareable on LinkedIn'].map((pill, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-white">{pill}</span>
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Features */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {certificationFeatures.map((feature, index) => (
                <div key={index} className="bg-zinc-900 p-4 rounded-lg hover:shadow-md hover:shadow-purple-900/20 transition-all duration-300">
                  <div className="flex flex-col space-y-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-zinc-700 w-fit">
                      {React.cloneElement(feature.icon, { className: "text-white text-xl" })}
                    </div>
                    <h3 className="text-base pt-1 font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#contact">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition text-sm shadow-md lg:shadow-lg lg:shadow-purple-900/30">
                Start Earning →
              </button>
            </Link>
          </div>

          {/* Cert image */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center gap-3">
            <div className="w-[180px] sm:w-[220px] md:w-full max-w-[280px]">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-35 transition duration-300 group-hover:opacity-50" />
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-0.5 border-2 border-zinc-700">
                  <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                    <Image
                      src={certImage}
                      alt="Certificate"
                      width={280}
                      height={380}
                      sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span className="text-green-400 text-sm">✅</span>
              <span className="text-xs font-semibold text-gray-300">Verified by LinuxWorld</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
