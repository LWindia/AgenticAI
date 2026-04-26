"use client";
import React from 'react';
import Link from 'next/link';
import { Capsule } from '../../../../types/navbar';
import { BADGE_IMAGES } from '../../../../data/timeline';
import { cloudinaryBadgeSrc } from '@/lib/cloudinary';

export const ProgramCard: React.FC<Capsule> = ({ name, outcome, badge, duration, price, href }) => {
  const badgeImg = badge ? BADGE_IMAGES[badge] : null;

  const cardContent = (
    <div className="relative rounded-xl border border-white/10 bg-black hover:border-purple-500/60 hover:bg-zinc-900/80 transition-all duration-200 overflow-hidden w-full cursor-pointer group">
      <div className="flex items-stretch min-h-[90px]">
        {/* LEFT — content */}
        <div className="flex-1 p-3 md:p-4">
          <h3 className="font-bold text-sm md:text-base text-white mb-1 leading-tight group-hover:text-purple-300 transition-colors">{name}</h3>
          <p className="text-xs text-zinc-500 mb-2 leading-snug">{outcome}</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] font-semibold text-purple-300 bg-purple-600/15 border border-purple-500/25 rounded-full px-2 py-0.5">🏆 {badge}</span>
            <span className="text-[10px] text-zinc-400 bg-zinc-800/80 rounded-full px-2 py-0.5">⏱️ {duration}</span>
            {price && <span className="text-[10px] text-zinc-400 bg-zinc-800/80 rounded-full px-2 py-0.5">💰 ₹{price}</span>}
          </div>
        </div>

        {/* RIGHT — badge image, larger */}
        {badgeImg && (
          <div className="relative w-20 md:w-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-transparent" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cloudinaryBadgeSrc(badgeImg)}
              alt={badge}
              width={64}
              height={64}
              decoding="async"
              className="relative w-14 h-14 md:w-16 md:h-16 object-contain opacity-95 transition-transform duration-300 lg:drop-shadow-lg lg:group-hover:scale-110"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block w-full">{cardContent}</Link>;
  }
  return cardContent;
};

export const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-full md:w-44 bg-zinc-950 border-r border-white/10 p-2 md:p-3 text-white space-y-1 rounded-l-xl">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-lg cursor-pointer text-sm transition-all duration-150 ${
          selectedCategory === category
            ? "bg-gradient-to-r from-purple-600/30 to-pink-600/20 border border-purple-500/30 font-semibold text-white"
            : "hover:bg-zinc-800 text-zinc-400 hover:text-white"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category.trim()}
      </div>
    ))}
  </div>
);
