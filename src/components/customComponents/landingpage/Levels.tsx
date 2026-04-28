import React from 'react';

const Levels = () => {
  const modules = [
    {
      icon: "🐍",
      title: "Core Python",
      description: "Master both fundamental and advanced concepts in Python, encompassing the creation of basic variables, implementation of conditional logic, and utilisation of lists and dictionaries, among others."
    },
    {
      icon: "📊",
      title: "Python for Data Science",
      description: "Acquire proficiency in essential Data Science tools and techniques, including Pandas, Data Frames, Descriptive Statistics, Visualisations, Probability, and Distributions, to elevate your analytical capabilities."
    },
    {
      icon: "🔍",
      title: "SQL",
      description: "SQL (Structured Query Language) is a standardised programming language used for managing and manipulating relational databases, enabling users to query, update, and delete data efficiently."
    },
    {
      icon: "📈",
      title: "Excel - Power BI",
      description: "Learn to analyze data efficiently and create interactive visualizations using Excel. Master Power BI to build dynamic dashboards for insightful business decisions."
    }
  ];

  return (
    <div className="p-8 bg-[#0A0A0A] text-white">
      <div className="mb-8">
        <p className="text-[#666666] text-sm font-medium tracking-wide">Module 1</p>
        <h2 className="text-2xl font-semibold mt-2">Fundamentals</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module, index) => (
          <div 
            key={index}
            className="p-6 rounded-[12px] border border-[#1A1A1A] bg-[#0D0D0D] hover:bg-[#141414] transition-all duration-300 ease-in-out relative before:content-[''] before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#ffffff20] before:to-transparent"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl bg-[#1A1A1A] p-3 rounded-lg">{module.icon}</span>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">{module.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;