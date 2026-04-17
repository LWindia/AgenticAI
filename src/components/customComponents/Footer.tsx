"use client"
import React from 'react';
import { BookOpen, Users, Award, Check } from 'lucide-react';

const  Footer= () => {
  return (
    <div className="bg-black h-full flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl"></div>
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Learning Card */}
          <div className="bg-gray-900/80 rounded-lg p-5 border border-gray-800">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                <BookOpen size={16} className="text-gray-400" />
              </div>
              <h3 className="text-white font-medium">Learning</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Access in-depth learning programs across data science and artificial intelligence.
            </p>
          </div>

          {/* Community Card */}
          <div className="bg-gray-900/80 rounded-lg p-5 border border-gray-800">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                <Users size={16} className="text-gray-400" />
              </div>
              <h3 className="text-white font-medium">Community</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Network with a global community of data scientists and AI enthusiasts.
            </p>
          </div>

          {/* Outcomes Card */}
          <div className="bg-gray-900/80 rounded-lg p-5 border border-gray-800">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                <Award size={16} className="text-gray-400" />
              </div>
              <h3 className="text-white font-medium">Outcomes</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Gain a guaranteed outcome of becoming job ready through the program.
            </p>
          </div>
        </div>

        {/* Main CTA Card */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - CTA */}
            <div className="flex flex-col justify-center">
              <h2 className="text-white text-2xl font-semibold leading-tight mb-6">
                Get ready to kick off your journey in AI & Data Science
              </h2>
              
              <div className="mb-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Become an AI Warrior
                </button>
              </div>
              
              <div className="text-xs text-gray-400">
                {/* <p>Applications close on March 31st, 2025</p> */}
                <p className="mt-1">Only a limited number of spots are available</p>
              </div>
            </div>

            {/* Right Section - Checklist */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 mb-4">What&apos;s inspiring you?</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <Check size={16} className="text-white bg-purple-600 rounded-sm p-0.5" />
                  </div>
                  <span className="text-sm text-gray-300">Join a global community</span>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <Check size={16} className="text-white bg-purple-600 rounded-sm p-0.5" />
                  </div>
                  <span className="text-sm text-gray-300">Learn at your own pace</span>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <Check size={16} className="text-white bg-purple-600 rounded-sm p-0.5" />
                  </div>
                  <span className="text-sm text-gray-300">Live mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;