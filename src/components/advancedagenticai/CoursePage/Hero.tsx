"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Your request has been submitted successfully!');
        setFormData({ fullName: '', phoneNumber: '', email: '' });
      } else {
        setMessage('Failed to submit your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div className="relative w-full min-h-[50vh] overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom_right,#8b2fd3CC_0%,#040106_25%,#040106_75%,#ca2571CC_100%)]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="flex-1">
            {/* Main heading */}
            <h1 className="text-2xl md:text-3xl  leading-[1.0] sm:text-3xl  mb-4 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-gray-300">
            Next-Level Intelligence{" "}
              <span className="block text-6xl text-white sm:text-6xl">Advanced Agentic AI Training</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl mb-6 text-zinc-200/90">
            Develop AI agents that operate independently and solve complex challenges.  
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-4">
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
            <span className="text-zinc-400">⏱️ Duration:</span>
            <span className="ml-2 text-white">45 hrs</span>
          </div>
     
        </div>
        {/* second button */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-2 md:mb-2">
        
          
        <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
  <span className="text-zinc-400">💰 Fee:</span>
  <span className="ml-2">
    
    <span className="text-white">₹50,000 + Taxes</span> {" "}
    <span className="text-zinc-400 line-through">₹1,00,000</span>
  </span>
</div>
        
      
      </div>


      {/* third button */}

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-6">
        
          
         
          
        <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
          <span className="text-zinc-400">🎯 Mode:</span>
          <span className="ml-2 text-white">Live Weekend batch</span>
        </div>
      </div>




            {/* CTA Buttons */}
             {/* CTA Button */}
        <a href="https://rzp.io/rzp/2SOJBNi" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-auto py-3 ml-2 border-none bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white"
          >
            Book your seat now
          </Button>
        </a>

            {/* Additional info */}
           
          </div>

          {/* Right side - Form */}
          <div className="flex-1 w-full max-w-md backdrop-blur-lg bg-black/30 p-6 rounded-lg border border-zinc-800/50">
            <h2 className="text-2xl font-bold mb-6 text-white">Become an AI Autonomy Expert</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
                aria-label="Full Name"
              />
              <div className="flex gap-4">
                <div className="flex-1">
                  <select
                    name="countryCode"
                    className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
                    aria-label="Country Code"
                    onChange={handleChange}
                  >
                    <option value="+91">🇮🇳 +91</option>
                  </select>
                </div>
                <input
    type="tel"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleChange}
    placeholder="Your Phone Number"
    className="w-full sm:flex-1 px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
    aria-label="Phone Number"
  />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Id"
                className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
                aria-label="Email"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white"
              >
                Get a Call Back
              </button>
            </form>
            {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
// import { Button } from "@/components/ui/button"

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[50vh] bg-[#1e2124]">
//       {/* Grid background with colored lines */}
//       <div className="absolute bottom-0 w-full h-full overflow-hidden">
//         <div className="absolute inset-0 w-full h-full">
//           {/* Colored grid lines */}
//           <div className="absolute inset-0 w-full h-full" style={{
//             backgroundImage: "linear-gradient(to right, rgba(0,0,255,0.2) 5px, transparent 1px), linear-gradient(to bottom, rgba(255,0,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,0,0,0.2) 1px, transparent 1px)",
//             backgroundSize: "100px 100px, 100px 100px, 50px 50px",
//             transform: "perspective(500px) rotateX(60deg)",
//             transformOrigin: "bottom",
//           }}></div>
//         </div>
//       </div>
      
//       {/* Content Container */}
//       <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-20">
//         {/* Main heading */}
//         <h1 className="mb-6">
//           <div className="text-4xl text-gray-400 mb-2 font-light">Production-ready</div>
//           <div className="text-7xl font-bold text-white">AI Agents</div>
//         </h1>

//         {/* Subheading */}
//         <p className="text-xl mb-10 text-gray-400">
//           Trusted outcomes, adaptable behavior, scalable deployment.
//         </p>

//         {/* Free notice */}
//         <p className="mb-6 text-white">
//           Start building for free. No credit card required.
//         </p>
        
//         {/* CTA Buttons */}
//         <div className="flex gap-4 justify-center">
//           <Button
//             variant="outline"
//             className="rounded-md px-5 py-3 h-auto text-base font-medium 
//             bg-white text-[#1e2124] hover:bg-gray-200
//             border-white hover:border-gray-200
//             transition-all duration-200 flex items-center"
//           >
//             Start building <span className="ml-2">↗</span>
//           </Button>
          
//           <Button
//             variant="outline"
//             className="rounded-md px-5 py-3 h-auto text-base font-medium 
//             bg-transparent hover:bg-gray-800/50 
//             border-gray-600 hover:border-gray-500
//             text-white hover:text-white/90 
//             transition-all duration-200 flex items-center"
//           >
//             Request a preview <span className="ml-2">›</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }