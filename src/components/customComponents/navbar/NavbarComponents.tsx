// components/NavbarComponents.tsx

import React from 'react';
import { Capsule } from '../../../../types/navbar'; // Adjust the path as necessary

// ProgramCard Component
export const ProgramCard: React.FC<Capsule> = ({ name, outcome, badge, duration, price }) => (
  <div className="p-2 md:p-3 hover:bg-gray-800 border ml-2 rounded-lg transition-colors w-full h-auto md:h-28 flex flex-col justify-between">
    <div>
      <h3 className="font-medium text-base md:text-lg text-white">{name}</h3>
      <p className="text-xs md:text-sm text-white">{outcome}</p>
    </div>
    <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
      <span className="text-xs md:text-sm text-white">🏅 {badge}</span>
      <span className="text-xs md:text-sm text-white">⏱️ {duration}</span>
      {price && <span className="text-xs md:text-sm text-white">💰 ₹{price}</span>}
    </div>
  </div>
);

// SideCategories Component
export const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-full md:w-48 bg-gray-700 p-2 md:p-4 text-white space-y-1 md:space-y-2">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-md cursor-pointer ${
          selectedCategory === category ? "bg-gray-800 font-semibold" : "hover:bg-gray-800"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </div>
    ))}
  </div>
);