"use client";

import React, { useState, useEffect, useRef } from "react";
import { List, X } from "lucide-react";
import Link from 'next/link';
import { ProgramCard, SideCategories } from './NavbarComponents';
import { roadmapData } from '../../../../data/navbar';
import { markRender } from "@/lib/runtimeDiagnostics";

const NAV_ITEMS = [
  { href: '#timeline', text: 'AI Training Programs' },
];

const Navbar: React.FC = () => {
  markRender("Navbar");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Srishti');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    // pointerdown covers mouse + touch; mousedown alone misses many iOS Safari outside-tap cases.
    const handlePointerOutside = (event: PointerEvent) => {
      try {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setDropdownOpen(false);
        }
      } catch {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerOutside, true);
    return () => {
      try {
        document.removeEventListener("pointerdown", handlePointerOutside, true);
      } catch {
        /* ignore */
      }
    };
  }, []);

  const selectedLevel = roadmapData.find(level => level.level === selectedCategory);

  return (
    <header className="fixed top-0 z-50 w-full bg-black border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo — SVG ~500 bytes vs 1.18 MB PNG */}
        <Link href="/" className="flex items-center" aria-label="LinuxWorld Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/lw-logo.svg"
            alt="LinuxWorld"
            width={96}
            height={18}
            loading="eager"
            decoding="sync"
            style={{ width: 96, height: 18, objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-purple-400 transition-colors duration-200"
                  onClick={(e) => { e.preventDefault(); setDropdownOpen(!isDropdownOpen); }}>
                  {item.text}
                </a>
              </li>
            ))}
            <a href="#timeline" className="text-white hover:text-purple-400 transition-colors duration-200">
              AI Warrior Projects
            </a>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>

        {/* Desktop CTA */}
        <Link href="#contact" className="hidden lg:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-300 text-center">
          Enquire Now
        </Link>
      </div>

      {/* Mobile Menu — CSS only, no framer-motion */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute right-4 top-full bg-black w-64 shadow-lg z-10 rounded-lg border border-gray-800">
          <div className="p-4">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block text-white hover:text-purple-400 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="#contact"
              className="block w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}>
              Enquire Now
            </Link>
          </div>
        </div>
      )}

      {/* Dropdown — CSS only */}
      {isDropdownOpen && selectedLevel && (
        <div ref={dropdownRef}
          className="absolute left-0 top-full z-20 w-full rounded-xl border border-white/10 bg-zinc-950 shadow-lg shadow-black/40 sm:w-4/5 md:left-40 lg:left-40 lg:shadow-2xl lg:shadow-black/50">
          <div className="container mx-auto p-4">
            <div className="flex flex-col sm:flex-row">
              <SideCategories
                categories={roadmapData.map(level => level.level)}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
              <div className="flex-1 flex flex-wrap gap-4 mt-4 sm:mt-0">
                {selectedLevel.capsules.map((capsule, index) => (
                  <ProgramCard key={index} {...capsule} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
