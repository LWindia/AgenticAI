"use client";
import React from "react";
import Image from "next/image";

const Journey = () => {
  return (
    <div className="w-full bg-black py-12">
      <div className="container mx-auto mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-pink-400 lg:bg-gradient-to-r lg:from-pink-500 lg:to-purple-600 lg:bg-clip-text lg:text-transparent">
          AI The Divya Katha
        </h1>
        <h2 className="mb-10 text-xl text-gray-300">The Journey of The AI Warrior</h2>
      </div>
      <div className="w-full px-4">
        <Image
          src="/assets/journeyImage.png"
          alt="AI Learning Path Roadmap"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 1152px"
          className="mx-auto h-auto w-full max-w-6xl object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default Journey;