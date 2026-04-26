"use client";

import React, { useState } from "react";
import Image from "next/image";
import { readJsonErrorMessage } from "@/lib/safeResponse";
import { markRender } from "@/lib/runtimeDiagnostics";

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

/**
 * Single DOM tree for all breakpoints. Previously the hero mounted two parallel
 * layouts (lg:hidden + hidden lg:flex) with duplicate Images and two forms bound to
 * the same state. That roughly doubled memory, decode work, and compositor layers on
 * phones and contributed to WebKit tab kills (often seen as a “reload” or error page).
 */
const HeroSection: React.FC = () => {
  markRender("AgenticAIBanner");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("✅ Submitted successfully!");
        setFormData({ fullName: "", phoneNumber: "", email: "" });
      } else {
        const detail = await readJsonErrorMessage(
          response,
          `Request failed (${response.status})`,
        );
        setMessage(detail ? `Failed: ${detail}` : "Failed to submit. Please try again.");
      }
    } catch {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black text-white overflow-x-hidden pb-2 lg:min-h-[88vh]">
      {/* Decorative blurs — desktop only (large filter surfaces are costly on mobile WebKit). */}
      <div className="pointer-events-none hidden lg:block absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-20 blur-[160px]" />
      <div className="pointer-events-none hidden lg:block absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-700 opacity-15 blur-[160px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pb-8 pt-20 lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-6 lg:pt-24">
        {/* ── Copy + proof ── */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-1 text-2xl font-extrabold leading-tight tracking-tight lg:mb-3 lg:text-5xl">
            AI Warrior:{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              The MasterStroke
            </span>{" "}
            Program
          </h1>
          <p className="mx-auto max-w-xl text-xs text-gray-400 lg:mx-0 lg:mb-4 lg:text-base">
            <span className="lg:hidden">
              10 AI Capsules · From Fundamentals to Autonomous Agents
            </span>
            <span className="hidden lg:inline">
              10 AI Capsules — The Brahmastra Training of AI. Master every layer of
              Artificial Intelligence from fundamentals to autonomous agents.
            </span>
          </p>

          <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 py-2 text-center lg:p-3"
              >
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
                <Image
                  key={src}
                  src={src}
                  alt={`Student ${i + 1}`}
                  width={36}
                  height={36}
                  className="h-7 w-7 rounded-full border-2 border-black object-cover lg:h-9 lg:w-9"
                  sizes="36px"
                  style={{
                    marginLeft: i === 0 ? 0 : "-8px",
                    zIndex: AVATARS.length - i,
                  }}
                />
              ))}
              <span className="ml-2 text-xs text-gray-300 lg:ml-3 lg:text-sm">
                Join{" "}
                <span className="font-bold text-white">500+</span>
                <span className="hidden lg:inline"> AI Warriors already enrolled</span>
                <span className="lg:hidden"> AI Warriors</span>
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 lg:gap-1.5 lg:px-4 lg:py-1.5">
              <span className="text-xs text-yellow-400 lg:text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-xs font-bold text-white lg:text-sm">4.9</span>
              <span className="text-xs text-gray-400 lg:text-sm">
                /5
                <span className="hidden lg:inline"> · 200+ reviews</span>
              </span>
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-1.5 text-center text-xs uppercase tracking-wider text-gray-500 lg:mb-2 lg:text-left">
              Our alumni work at
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start lg:gap-2">
              {COMPANIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-300 lg:px-4 lg:py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:mb-3" />

          <div>
            <p className="mb-1.5 text-center text-xs font-semibold uppercase tracking-wider text-purple-400 lg:mb-1 lg:text-left">
              Program Highlights
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start lg:gap-2">
              {HIGHLIGHTS.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-purple-500/25 bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-300 lg:px-4 lg:py-1.5 lg:text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Single lead form ── */}
        <div className="w-full shrink-0 lg:w-[420px]">
          <div className="relative rounded-2xl border border-white/15 bg-zinc-900/95 p-4 shadow-none lg:border-white/20 lg:bg-zinc-900 lg:p-8 lg:shadow-2xl">
            <div className="absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="mb-4 text-center">
              <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white lg:mb-3 lg:px-4">
                Talk to Our Expert
              </span>
              <h2 className="text-xl font-bold text-white lg:text-2xl">
                Become an AI Warrior
              </h2>
              <p className="mt-1 hidden text-sm text-gray-400 lg:block">
                Get a callback from our AI experts
              </p>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3 lg:transition lg:focus:ring-1 lg:focus:ring-purple-500"
              />
              <div className="flex gap-2">
                <select
                  aria-label="Country calling code"
                  className="rounded-xl border border-gray-700 bg-black/50 px-2 py-2.5 text-sm text-white focus:outline-none lg:px-3 lg:py-3 lg:focus:border-purple-500"
                  defaultValue="+91"
                >
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  className="flex-1 rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3 lg:transition lg:focus:ring-1 lg:focus:ring-purple-500"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Id"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3 lg:transition lg:focus:ring-1 lg:focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 lg:py-3.5 lg:text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get a Free Call Back →"
                )}
              </button>
            </form>
            {message ? (
              <p className="mt-3 text-center text-xs font-medium text-green-400 lg:mt-4 lg:text-sm">
                {message}
              </p>
            ) : null}
            <p className="mt-3 text-center text-xs text-gray-500 lg:mt-4">
              🔒 No spam. Your data is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
