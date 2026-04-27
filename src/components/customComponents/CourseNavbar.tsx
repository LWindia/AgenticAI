import Link from "next/link";
import Image from "next/image";

export default function CourseNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="flex items-center" aria-label="LinuxWorld Home">
          {/* Use Next.js Image with strict sizes so only a small optimized version downloads */}
          <Image
            src="/assets/WHITE LW.png"
            alt="LinuxWorld"
            width={180} height={34} sizes="180px" className="object-contain" style={{ width: 180, height: 34 }}
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
        >
          {/* Static SVG arrow — no lucide-react client bundle */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </header>
  );
}
