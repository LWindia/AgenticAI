import React from 'react';

const News = () => {
  return (
    <div className="bg-black text-white h-full p-4 sm:p-6 md:p-8">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* News & Blogs header */}
        <div className="mb-2">
          <h2 className="text-gray-400 text-base sm:text-lg text-center">News & Blogs</h2>
        </div>
        
        {/* Main heading */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 text-center">Agentic Insights</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Main featured article */}
          <div className="w-full lg:w-1/2 mb-4 sm:mb-6 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 group">
              <img 
                src="/assets/innerpage/news/a6.avif" 
                alt="AI Myths" 
                className="w-full h-full object-cover"
              />
              <div className="bg-black/50 absolute inset-0"></div>
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 w-full">
                <span className="bg-black/50 text-white px-2 py-1 text-xs sm:text-sm rounded mb-1 sm:mb-2 inline-block">ARTICLE</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1 sm:mt-2 text-white leading-tight">
                  The 5 Most Common Myths About Artificial Intelligence - Whats Really True?
                </h3>
                <div className="flex items-center mt-2 sm:mt-3 md:mt-4">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt="Author" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3"
                  />
                  <div className="text-xs sm:text-sm md:text-base">
                    <span className="text-white">by Fredrik Falk</span>
                    <span className="text-gray-300 mx-1 sm:mx-2">—</span>
                    <span className="text-gray-300">Mar 17, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right sidebar articles */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-6">
            {/* Article 1 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/assets/innerpage/news/a1.avif" 
                alt="ModelMesh" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded object-cover flex-shrink-0"
              />
              <div>
                <span className="text-gray-400 text-xs sm:text-sm">ARTICLE</span>
                <h4 className="text-white font-semibold text-sm sm:text-base">ModelMesh: A Multi-Model Approach by Beam AI</h4>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/assets/innerpage/news/a3.avif" 
                alt="Service Integrations" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded object-cover flex-shrink-0"
              />
              <div>
                <span className="text-gray-400 text-xs sm:text-sm">ARTICLE</span>
                <h4 className="text-white font-semibold text-sm sm:text-base">The Power of External Service Integrations</h4>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/assets/innerpage/news/a5.avif" 
                alt="LLM Evaluation" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded object-cover flex-shrink-0"
              />
              <div>
                <span className="text-gray-400 text-xs sm:text-sm">ARTICLE</span>
                <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">Mastering LLM Evaluation: Techniques, Tools, and Best Practices</h4>
              </div>
            </div>
            
            {/* Article 4 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/assets/innerpage/news/a4.avif" 
                alt="AI Agents" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded object-cover flex-shrink-0"
              />
              <div>
                <span className="text-gray-400 text-xs sm:text-sm">ARTICLE</span>
                <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">Chatbots Are Dead: Why AI Agents Are the Future of Customer Service</h4>
              </div>
            </div>
            
            {/* See all posts link */}
            <div className="mt-2 sm:mt-3">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm sm:text-base">See all Posts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;