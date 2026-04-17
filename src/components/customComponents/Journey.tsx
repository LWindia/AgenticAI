

"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Journey = () => {
  return (
    <div className="w-full bg-black py-12">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
          AI The Divya Katha
        </h1>
        <h2 className="text-xl text-gray-300 mb-10">
          The Journey of The AI Warrior
        </h2>
      </div>
      <div className="w-full px-4">
        <img 
          src="/assets/journeyImage.png" 
          alt="AI Learning Path Roadmap" 
          className="w-full h-auto object-contain mx-auto max-w-6xl"
        />
      </div>
    </div>
  );
};

export default Journey;