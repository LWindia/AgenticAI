"use client";

import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact2', { // Ensure this matches your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Your request has been submitted successfully!');
        setFormData({ fullName: '', phoneNumber: '', email: '' });
      } else {
        setMessage('Failed to submit your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-black text-white py-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div> 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <main className="flex flex-col items-center text-center z-10 px-4">
        <h1 className="text-5xl md:text-5xl pt-20 font-bold tracking-wider">
        AI Warrior : The <span className=" bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">MasterStroke </span> Program
        </h1>
        <p className="mt-4 text-xl text-gray-300"> 12 AI Capsules: The Brahmastra Training of AI
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { count: '36+', label: 'Hands On Projects' },
            { count: '12+', label: 'Capsule Programs' },
            { count: '150+', label: 'Hours of learning' },
            { count: '12+', label: 'Badges Earned' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold">{item.count}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full max-w-md backdrop-blur-lg bg-black/30 p-6 rounded-lg border border-gradient">
          <h2 className="text-2xl font-bold mb-6">Become an AI Warrior 
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
              aria-label="Full Name"
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <select
                  name="countryCode"
                  className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                  aria-label="Country Code"
                  onChange={handleChange}
                >
                  <option value="+91">🇮🇳 +91</option>
                </select>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="flex-[2] px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                aria-label="Phone Number"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Id"
              className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
              aria-label="Email"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Call Back
            </button>
          </form>
          {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
        </div>
      </main>
    </section>
  );
};

export default HeroSection;