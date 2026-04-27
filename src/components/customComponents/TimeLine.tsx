import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { roadmapData, BADGE_IMAGES } from "../../../data/timeline";
import { cloudinaryBadgeSrc } from "@/lib/cloudinary";
import Link from "next/link";

export function TimelineDemo() {
  return (
    <div className="w-full pr-4 bg-black sm:px-0">
      <Timeline
        data={roadmapData.map((levelData) => ({
          title: levelData.level,
          subtitle: levelData.subtitle,
          content: (
            <div className="mb-8">
              {levelData.capsules.map((capsule, index) => {
                const badgeImg = BADGE_IMAGES[capsule.badge];
                return (
                  <div
                    key={index}
                    className="desktop-card-hover relative mb-8 overflow-hidden rounded-xl border border-gray-700 bg-black shadow-none lg:shadow-md"
                  >
                    {/* Two-column layout */}
                    <div className="flex items-stretch">
                      {/* LEFT — all content */}
                      <div className="flex-1 p-4 sm:p-5 pr-4">
                        <Link href={capsule.href} className="cursor-pointer">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 pr-2 text-pink-300 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
                            {capsule.name}
                          </h3>
                        </Link>

                        <p className="text-sm sm:text-base font-medium mb-3 text-gray-300">
                          <span className="font-bold text-white">Key Outcome:</span> {capsule.outcome}
                        </p>

                        {/* Badge name pill */}
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full px-3 py-1">
                            🏆 {capsule.badge}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center text-gray-300">
                          <span className="px-3 py-1 text-sm bg-gray-800 border gradient-border rounded-lg text-center">
                            Duration: {capsule.duration}
                          </span>
                          {capsule.badgeLink ? (
                            <a href={capsule.badgeLink} target="_blank" rel="noopener noreferrer"
                              className="desktop-button-lift px-3 py-1 text-sm bg-gray-800 border gradient-border rounded-lg hover:opacity-90 transition-opacity cursor-pointer text-center">
                              Price: {capsule.price}
                            </a>
                          ) : (
                            <span className="px-3 py-1 text-sm bg-gray-800 border gradient-border rounded-lg text-center">
                              Price: {capsule.price}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* RIGHT — badge as large decorative background element */}
                      {badgeImg && (
                        <div className="relative w-32 sm:w-40 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-transparent" />
                          <picture>
                            <source
                              media="(min-width: 1024px)"
                              srcSet={cloudinaryBadgeSrc(badgeImg, 384)}
                            />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={cloudinaryBadgeSrc(badgeImg, 192)}
                              alt={capsule.badge}
                              width={128}
                              height={128}
                              decoding="async"
                              className="relative w-24 h-24 sm:w-32 sm:h-32 object-contain opacity-90 lg:drop-shadow-xl"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        }))}
      />
    </div>
  );
}
