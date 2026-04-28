"use client";

import { useState } from "react";
import { readJsonErrorMessage } from "@/lib/safeResponse";

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({ fullName: "", phoneNumber: "", email: "" });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        const detail = await readJsonErrorMessage(response, `Request failed (${response.status})`);
        setMessage(detail ? `Failed: ${detail}` : "Failed to submit. Please try again.");
      }
    } catch {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full shrink-0 lg:w-[420px]">
      <div className="desktop-card-hover relative rounded-2xl border border-white/15 bg-zinc-900/95 p-4 lg:border-white/20 lg:bg-zinc-900 lg:p-8">
        <div className="absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="mb-4 text-center">
          <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white lg:mb-3 lg:px-4">
            Talk to Our Expert
          </span>
          <h2 className="text-xl font-bold text-white lg:text-2xl">Become an AI Warrior</h2>
          <p className="mt-1 hidden text-sm text-gray-400 lg:block">Get a callback from our AI experts</p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
            placeholder="Your Full Name" required autoComplete="name"
            className="w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3" />
          <div className="flex gap-2">
            <select aria-label="Country calling code" defaultValue="+91"
              className="rounded-xl border border-gray-700 bg-black/50 px-2 py-2.5 text-sm text-white focus:outline-none lg:px-3 lg:py-3">
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
              placeholder="Phone Number" required autoComplete="tel"
              className="flex-1 rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3" />
          </div>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Your Email Id" required autoComplete="email"
            className="w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none lg:py-3" />
          <button type="submit" disabled={isSubmitting}
            className="desktop-button-lift flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-sm font-bold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 lg:py-3.5 lg:text-base">
            {isSubmitting ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </>
            ) : "Get a Free Call Back →"}
          </button>
        </form>
        {message && <p className="mt-3 text-center text-xs font-medium text-green-400 lg:mt-4 lg:text-sm">{message}</p>}
        <p className="mt-3 text-center text-xs text-gray-500 lg:mt-4">🔒 No spam. Your data is safe with us.</p>
      </div>
    </div>
  );
}
