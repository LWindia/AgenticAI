// components/Navbar.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { List, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ProgramCard, SideCategories } from './NavbarComponents';
import { roadmapData } from '../../../../data/navbar'; // Adjust the path as necessary
import { RoadmapLevel } from '../../../../types/navbar';

// Navigation Items
const NAV_ITEMS = [
  { href: "#Projects", text: "AI Training Programs" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Srishti');
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();
    setDropdownOpen(!isDropdownOpen);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const selectedLevel = roadmapData.find(level => level.level === selectedCategory);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-black"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/LW-logo-white.png"
            alt="Logo"
            width={96}
            height={18}
            className="object-contain overflow-hidden"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white hover:text-[#ff0000] transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
            <a
              href="#timeline"
              className="text-white hover:text-[#ff0000] transition-colors duration-200"
            >
              AI Warrior Projects
            </a>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#ff0000] transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <List className="h-6 w-6" />
          )}
        </button>

        {/* Desktop CTA Button */}
        <Link
          href="#contact"
          className="hidden lg:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:bg-[#ff0000]/90 hover:shadow-lg transition-all duration-300 text-center"
        >
          Enquire Now
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute right-4 top-full bg-black w-64 shadow-lg z-10 rounded-lg border border-gray-800"
          >
            <div className="p-4">
              <ul className="space-y-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block text-white hover:text-[#ff0000] transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA Button */}
              <Link
                href="#contact"
                className="block w-full mt-6 bg-[#ff0000] text-white px-4 py-2 rounded-lg hover:bg-[#ff0000]/90 hover:shadow-lg transition-all duration-300 text-center"
                onClick={closeMobileMenu}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown Component */}
      <AnimatePresence>
        {isDropdownOpen && selectedLevel && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full md:left-40 lg:left-40 left-0 transform -translate-x-1/2 w-full sm:w-4/5 bg-black shadow-lg z-20 rounded-lg"
          >
            <div className="container mx-auto p-4">
              <div className="flex flex-col sm:flex-row">
                <SideCategories
                  categories={roadmapData.map(level => level.level)}
                  selectedCategory={selectedCategory}
                  onCategorySelect={handleCategorySelect}
                />
                <div className="flex-1 flex flex-wrap gap-4 mt-4 sm:mt-0 ">
                  {selectedLevel.capsules.map((capsule, index) => (
                    <ProgramCard
                      key={index}
                      {...capsule} // Spread the capsule object to pass all properties
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;