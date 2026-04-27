import React from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-5xl mx-auto bg-black font-sans md:px-10">
        <div className="max-w-5xl mx-auto py-6 px-4 md:px-8 lg:px-10">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Structured Learning Path</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl mb-3 text-center text-white max-w-4xl mx-auto font-bold leading-tight">
            The AI Warrior Training Path: 10 Capsules, 5 Levels,{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              One Masterstroke
            </span>
          </h2>

          <p className="text-neutral-300 mx-auto text-center text-sm md:text-base max-w-lg mb-2">
            From ML fundamentals to Agentic AI — a battle-tested curriculum designed to make you industry-ready in 100+ hours.
          </p>

          <p className="text-center text-xs text-purple-400 font-semibold mb-5">
            ✦ Industry-aligned curriculum · Used by 500+ AI professionals
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {[
              { icon: '🎯', label: '10 Capsules' },
              { icon: '🏆', label: '5 Levels' },
              { icon: '⏱️', label: '100+ Hours' },
            ].map((pill, i) => (
              <span key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm font-semibold text-white">
                <span>{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-2" />
        </div>

        <div className="relative max-w-7xl mx-auto pb-1">
          {/* Static vertical line — no scroll animation */}
          <div className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-neutral-400 text-sm md:text-base italic mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative pl-20 pr-0 md:pl-2 w-full">
                <div className="md:hidden block mb-4 text-left">
                  <h3 className="text-2xl font-bold text-neutral-500">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-neutral-400 text-sm italic mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
