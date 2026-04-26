"use client";
import React, { useState } from 'react';
import { faqData } from '../../../data/faq';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-black'>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-white mb-8">Know more about what we are building at AI Folks and why we are offering this free opportunity</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridAutoRows: 'min-content' }}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg transition-colors duration-300 cursor-pointer ${openIndex === index ? 'bg-gray-800' : 'bg-black'}`}
              onClick={() => toggleCard(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <span className="text-white">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-400 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;