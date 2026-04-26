"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CourseNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/LW-logo-white.png" alt="Logo" width={96} height={18} className="object-contain" priority />
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </header>
  );
}
