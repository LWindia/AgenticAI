/**
 * Hero section — server component.
 * Only HeroLeadForm (form state + fetch) is a client component.
 * All static copy, stats, avatars, and proof elements are server-rendered HTML.
 */
import Image from "next/image";
import HeroLeadForm from "./HeroLeadForm";

const AVATARS = [
  "/assets/hero/Forrester.jpg.jpeg",
  "/assets/hero/Microsoft.jpg.jpeg",
  "/assets/hero/TCS.jpg.jpeg",
  "/assets/hero/Zomato.jpg.jpeg",
];

const COMPANIES = ["Forrester", "Microsoft", "TCS", "Zomato", "Zscaler"];

const STATS = [
  { count: "5+", label: "Hands-On Projects" },
  { count: "10", label: "Capsule Programs" },
  { count: "100+", label: "Hours of Learning" },
  { count: "10", label: "Badges Earned" },
];

const HIGHLIGHTS = [
  "🎓 Industry Certified",
  "⚡ Self-Paced",
  "🤖 Agentic AI",
  "🏆 10 Badges",
];

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-x-hidden pb-2 lg:min-h-[88vh]">
      {/* Decorative blurs — desktop only */}
      <div className="pointer-events-none hidden lg:block absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-20 blur-[160px]" />
      <div className="pointer-events-none hidden lg:block absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-700 opacity-15 blur-[160px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pb-8 pt-20 lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-6 lg:pt-24">
        {/* Static copy */}
        <div className="flex-1 text-center lg:text-left desktop-fade-up">
          <h1 className="mb-1 text-2xl font-extrabold leading-tight tracking-tight lg:mb-3 lg:text-5xl">
            AI Warrior:{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              The MasterStroke
            </span>{" "}
            Program
          </h1>
          <p className="mx-auto max-w-xl text-xs text-gray-400 lg:mx-0 lg:mb-4 lg:text-base">
            <span className="lg:hidden">10 AI Capsules · From Fundamentals to Autonomous Agents</span>
            <span className="hidden lg:inline">
              10 AI Capsules — The Brahmastra Training of AI. Master every layer of
              Artificial Intelligence from fundamentals to autonomous agents.
            </span>
          </p>

          <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
            {STATS.map((item) => (
              <div key={item.label} className="desktop-card-hover rounded-xl border border-white/10 bg-white/5 py-2 text-center lg:p-3">
                <p className="text-xl font-bold text-purple-300 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-400 lg:bg-clip-text lg:text-transparent lg:text-2xl">
                  {item.count}
                </p>
                <p className="mt-0.5 text-xs text-gray-400 lg:mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start lg:gap-4">
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <Image key={src} src={src} alt={`Student ${i + 1}`} width={36} height={36}
                  className="h-7 w-7 rounded-full border-2 border-black object-cover lg:h-9 lg:w-9"
                  sizes="36px"
                  style={{ marginLeft: i === 0 ? 0 : "-8px", zIndex: AVATARS.length - i }} />
              ))}
              <span className="ml-2 text-xs text-gray-300 lg:ml-3 lg:text-sm">
                Join <span className="font-bold text-white">500+</span>
                <span className="hidden lg:inline"> AI Warriors already enrolled</span>
                <span className="lg:hidden"> AI Warriors</span>
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 lg:gap-1.5 lg:px-4 lg:py-1.5">
              <span className="text-xs text-yellow-400 lg:text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-xs font-bold text-white lg:text-sm">4.9</span>
              <span className="text-xs text-gray-400 lg:text-sm">
                /5<span className="hidden lg:inline"> · 200+ reviews</span>
              </span>
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-1.5 text-center text-xs uppercase tracking-wider text-gray-500 lg:mb-2 lg:text-left">
              Our alumni work at
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start lg:gap-2">
              {COMPANIES.map((c) => (
                <span key={c} className="desktop-card-hover rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-300 lg:px-4 lg:py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div>
            <p className="mb-1.5 text-center text-xs font-semibold uppercase tracking-wider text-purple-400 lg:mb-1 lg:text-left">
              Program Highlights
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start lg:gap-2">
              {HIGHLIGHTS.map((badge) => (
                <span key={badge} className="desktop-shine rounded-full border border-purple-500/25 bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-300 lg:px-4 lg:py-1.5 lg:text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Client form — only this part hydrates */}
        <div className="flex justify-center lg:block desktop-fade-up desktop-fade-up-delay">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
