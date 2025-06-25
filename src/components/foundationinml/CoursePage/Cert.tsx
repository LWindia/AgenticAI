import React from "react";
import Image from "next/image";
import { FaCertificate, FaShareAlt, FaUserTie, FaSuitcase } from "react-icons/fa";

// Hardcoded certification features data
const certificationFeatures = [
  {
    icon: <FaCertificate />,
    title: "Official and Verified",
    description:
      "Receive an instructor-signed certificate with the institution's logo to verify your achievements and increase your job prospects.",
  },
  {
    icon: <FaShareAlt />,
    title: "Easily Shareable",
    description:
      "Add the certificate to your CV or Resume, or post it directly on LinkedIn, Instagram, and Twitter.",
  },
  {
    icon: <FaUserTie />,
    title: "Enhances Credibility",
    description:
      "Use your certificate to enhance your professional credibility and stand out among your peers as an expert.",
  },
  {
    icon: <FaSuitcase />,
    title: "Increase Opportunities",
    description:
      "Showcase your achieved skill set using your certificate to attract employers for desired job opportunities.",
  },
];

const CertificateDisplay: React.FC = () => {
  return (
    <div className="bg-black py-6 sm:py-8 px-4 sm:px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
            Get Certified
          </h1>
          <p className="text-sm sm:text-base text-gray-300 px-2 sm:px-4">
            Earn your{" "}
            <span className="text-white font-semibold">certification</span> upon
            completing the required tasks.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Features Grid */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="relative group mr-4 w-fit">
                      {/* Icon container */}
                      <div className="relative p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-zinc-700">
                        {React.cloneElement(feature.icon, {
                          className: "text-white text-xl",
                        })}
                      </div>
                    </div>

                    <h3 className="text-base pt-2 font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Image */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
            <div className="w-[180px] sm:w-[220px] md:w-full max-w-[300px]">
              <div className="relative group">
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-0.5 border-2 border-zinc-700">
                  <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/innerpage/Foundation in ML.jpg"
                      alt="Certificate"
                      width={300}
                      height={400}
                      className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;