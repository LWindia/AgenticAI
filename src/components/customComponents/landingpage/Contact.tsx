"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export default function ContactForm() {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [experience, setExperience] = useState<string>("0-3yrs");
  const [whatsappUpdates, setWhatsappUpdates] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

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

    const formData = {
      fullName,
      phoneNumber,
      email,
      experience,
      whatsappUpdates,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Reset form fields
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setExperience("0-3yrs");
        setWhatsappUpdates(false);
      } else {
        const errorData = await response.json();
        alert(`Failed to submit form: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="w-full bg-black" id="contact">
      <div className="h-full max-w-5xl mx-auto text-white flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2"> Connect with Us: Begin Your AI Warrior Journey</h1>
          <p className="text-gray-300">
            Take the first step towards mastering AI and innovation with LW India. Your transformation into an AI Warrior starts here!
          </p>
        </div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <Card className="flex-1 bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Upskill, Reskill, Rise as a Warrior
              </h2>
            </CardHeader>

            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm">
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="flex items-center bg-zinc-800/50 border border-r-0 border-zinc-700 rounded-l-md px-3 py-2">
                        {/* <Image
                          src="/assets/India.jpg"
                          alt="India flag"
                          width={24}
                          height={16}
                          className="mr-2"
                        /> */}
                      </div>
                      <Input
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Your Phone Number"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-l-none"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <label htmlFor="email" className="text-sm">
                    Email Id
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Id"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-4 mt-4">
                  <label className="text-sm">Experience :</label>
                  <div className="flex flex-wrap gap-2">
                    {["0-3yrs", "3-8yrs", "8-12yrs", "12yrs+"].map((exp) => (
                      <Button
                        key={exp}
                        variant="outline"
                        size="sm"
                        className={`rounded-full px-4 ${
                          experience === exp
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent"
                            : "bg-zinc-800/50 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
                        }`}
                        onClick={() => setExperience(exp)}
                      >
                        {exp}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 mb-4">
                  <Checkbox
                    id="whatsapp"
                    checked={whatsappUpdates}
                    onCheckedChange={(checked) => setWhatsappUpdates(checked as boolean)}
                    className="border-zinc-700 data-[state=checked]:bg-indigo-600"
                  />
                  <label
                    htmlFor="whatsapp"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send WhatsApp Updates
                  </label>
                </div>
                <CardFooter className="flex justify-center ">
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6">
                    Submit Your Query
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>

          {/* Expert Guidance Section */}
          <div className="flex-1 lg:max-w-xs space-y-8 pt-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get Expert Guidance</h2>
              <p className="text-gray-400">Need support? We&apos;ve got your back anytime!</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <a href="tel:+919653775333" className="text-indigo-400 font-medium hover:underline">
                    +91-9653775333
                  </a>
                  <p className="text-sm text-gray-400">10AM - 7PM (IST) Mon-Sun</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <a
                    href="mailto:support@lwindia.com"
                    className="text-indigo-400 font-medium hover:underline break-all"
                  >
                    support@lwindia.com
                  </a>
                  <p className="text-sm text-gray-400">You&apos;ll hear back in 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}