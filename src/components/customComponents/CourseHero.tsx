import { BADGE_IMAGES } from "../../../data/timeline";
import { cloudinaryBadgeSrc } from "@/lib/cloudinary";

interface CourseHeroProps {
  title: string;
  titleLine2?: string;
  subtitle: string;
  duration: string;
  fee: string;
  enrollLink: string;
  badge?: string;
}

export default function CourseHero({ title, titleLine2, subtitle, duration, fee, enrollLink, badge }: CourseHeroProps) {
  const badgeImg = badge ? BADGE_IMAGES[badge] : null;

  return (
    <div className="relative w-full bg-black overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900 rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[320px]">
        
        {/* LEFT — Content */}
        <div className="flex-1">
          {/* Badge name pill */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-4 w-fit">
              <span className="h-2 w-2 rounded-full bg-purple-400 lg:animate-pulse" />
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">{badge}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3 text-white">
            {title}{" "}
            {titleLine2 && (
              <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
                {titleLine2}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-zinc-300 mb-5 max-w-xl">{subtitle}</p>

          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="px-4 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-sm text-white">
              <span className="text-zinc-400">⏱️ Duration: </span>{duration}
            </div>
            <div className="px-4 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-sm text-white">
              <span className="text-zinc-400">💰 Fee: </span>{fee}
            </div>
          </div>

          {/* CTA */}
          <a href={enrollLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition text-sm shadow-md lg:shadow-lg lg:shadow-purple-900/30">
              Book Your Seat Now →
            </button>
          </a>
        </div>

        {/* RIGHT — Badge image */}
        {badgeImg && (
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="relative">
              {/* Glow — desktop only */}
              <div className="hidden lg:block absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-15 blur-3xl animate-glow-pulse" />
              {/* Badge — float only on desktop */}
              <div className="relative lg:animate-float">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={cloudinaryBadgeSrc(badgeImg, 512)}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cloudinaryBadgeSrc(badgeImg, 192)}
                    alt={badge}
                    className="h-52 w-52 object-contain md:h-64 md:w-64 lg:drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-full px-5 py-2 text-center">
              <span className="text-sm font-bold text-white uppercase tracking-wider">🏆 {badge}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
