"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string; // Added subtitle as optional property
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black">
      <div
        className=" max-w-5xl mx-auto bg-black dark:bg-neutral-950 font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-5xl mx-auto py-6 px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl mb-2 text-center text-white dark:text-white max-w-4xl font-bold">
            The AI Warrior Training Path: 12 Capsules, 6 Levels, One Masterstroke
          </h2>
          <p className="text-neutral-300 dark:text-neutral-300 mx-auto text-center text-sm md:text-base max-w-lg">
            Unveil your AI journey step by step—mastering 12 powerful capsules across 6 levels, transforming from a learner to an AI Warrior.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-700 p-2" />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl md:text-3xl font-bold text-white ">
                    {item.title}
                  </h3>
                  {/* Display subtitle for desktop */}
                  {item.subtitle && (
                    <p className="text-neutral-400 dark:text-neutral-400 text-sm md:text-base italic mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative pl-20 pr-0 md:pl-2 w-full">
                <div className="md:hidden block mb-4 text-left">
                  <h3 className="text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {/* Display subtitle for mobile */}
                  {item.subtitle && (
                    <p className="text-neutral-400 dark:text-neutral-400 text-sm italic mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};