"use client";

import { useState } from "react";
import { readJsonErrorMessage } from "@/lib/safeResponse";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { markRender } from "@/lib/runtimeDiagnostics";

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export default function ContactForm() {
  markRender("ContactForm");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [experience, setExperience] = useState<string>("0-3yrs");
  const [whatsappUpdates, setWhatsappUpdates] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!fullName) newErrors.fullName = "Full Name is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const formData = { fullName, phoneNumber, email, experience, whatsappUpdates };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFullName(""); setPhoneNumber(""); setEmail("");
        setExperience("0-3yrs"); setWhatsappUpdates(false);
      } else {
        const detail = await readJsonErrorMessage(
          response,
          `Request failed (${response.status})`,
        );
        alert(`Failed to submit form: ${detail}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-black py-12" id="contact">
      <div className="max-w-5xl mx-auto text-white px-4">

        {/* Gradient divider top */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Get In Touch</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Ready to Become an{" "}
            <span className="text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
              AI Warrior?
            </span>
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto mb-3">
            Join thousands of professionals mastering AI with LinuxWorld India.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            {[
              { icon: '🔒', label: '100% Secure' },
              { icon: '📞', label: 'Free Consultation' },
              { icon: '⚡', label: 'Quick Response' },
            ].map((pill, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-white">
                <span>{pill.icon}</span>{pill.label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <Card className="flex-1 bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="text-center pb-2">
              {/* Star rating */}
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-gray-400 text-xs">/5 · 200+ reviews</span>
              </div>
              <h2 className="text-2xl font-bold text-pink-400 lg:bg-gradient-to-r lg:from-purple-400 lg:to-pink-500 lg:bg-clip-text lg:text-transparent">
                Upskill, Reskill, Rise as a Warrior
              </h2>
              {/* Limited seats note — no infinite animation on mobile (constant repaints / WebKit cost). */}
              <p className="mt-1 text-xs font-semibold text-yellow-400 lg:animate-pulse">
                🔥 Limited seats available this batch
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm">Full Name</label>
                    <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm">Phone Number</label>
                    <Input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Your Phone Number" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label htmlFor="email" className="text-sm">Email Id</label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Id" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2 mt-4">
                  <label className="text-sm">Experience:</label>
                  <div className="flex flex-wrap gap-2">
                    {["0-3yrs", "3-8yrs", "8-12yrs", "12yrs+"].map((exp) => (
                      <Button key={exp} type="button" variant="outline" size="sm"
                        className={`rounded-full px-4 transition-colors duration-200 ${
                          experience === exp
                            ? "border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30 lg:scale-105"
                            : "border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:border-purple-500/50 hover:bg-zinc-700"
                        }`}
                        onClick={() => setExperience(exp)}>
                        {exp}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 mb-2">
                  <Checkbox id="whatsapp" checked={whatsappUpdates}
                    onCheckedChange={(checked) => setWhatsappUpdates(checked as boolean)}
                    className="border-zinc-700 data-[state=checked]:bg-indigo-600" />
                  <label htmlFor="whatsapp" className="text-sm leading-none">Send WhatsApp Updates</label>
                </div>

                {/* Urgency line */}
                <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-green-400" />
                  Our team responds within 24 hours
                </p>

                <CardFooter className="flex flex-col gap-2 px-0 pb-0">
                  <Button type="submit" disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Submitting...
                      </span>
                    ) : "Submit Your Query →"}
                  </Button>
                  <p className="text-center text-xs text-gray-500">🔒 No spam. Your data is safe with us.</p>
                </CardFooter>
              </form>
            </CardContent>
          </Card>

          {/* Expert Guidance Section */}
          <div className="flex-1 lg:max-w-xs space-y-6 pt-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Get Expert Guidance</h2>
              <p className="text-gray-400 text-sm">Need support? We&apos;ve got your back anytime!</p>
              {/* Response badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-400/10 border border-green-400/30 rounded-full px-3 py-1 mt-2">
                <span className="h-2 w-2 rounded-full bg-green-400 lg:animate-pulse" />
                <span className="text-xs text-green-400 font-semibold">Response time: Within 24 hours</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Phone card */}
              <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-purple-500/40 transition-colors">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Call Us</p>
                  <a href="tel:+919772201449" className="text-white font-semibold hover:text-purple-400 transition-colors">
                    +91-9772201449 / 9351009002
                  </a>
                  <p className="text-xs text-gray-400">10AM - 7PM (IST) Mon-Sun</p>
                </div>
              </div>

              {/* WhatsApp card */}
              <a href="https://wa.me/919772201449" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-900/20 border border-green-800/40 rounded-xl p-4 hover:border-green-500/60 transition-colors">
                <div className="bg-green-600 p-3 rounded-xl flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
                  <p className="text-white font-semibold">Chat with us</p>
                  <p className="text-xs text-gray-400">Instant replies on WhatsApp</p>
                </div>
              </a>

              {/* Email card */}
              <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-purple-500/40 transition-colors">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email Us</p>
                  <a href="mailto:support@lwindia.com" className="text-white font-semibold hover:text-purple-400 transition-colors break-all">
                    support@lwindia.com
                  </a>
                  <p className="text-xs text-gray-400">Reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
