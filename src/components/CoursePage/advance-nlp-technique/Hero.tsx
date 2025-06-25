import { Button } from "@/components/ui/button";

export default function AdvancedNLPTechniques() {
  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[50vh] overflow-x-hidden bg-[linear-gradient(to_bottom_right,#8b2fd3CC_0%,#040106_25%,#040106_75%,#ca2571CC_100%)]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 md:pt-24 pb-20 md:pb-20 min-h-[80vh] md:min-h-[50vh] flex flex-col justify-center">
        {/* Main heading */}
        <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.2] md:leading-[1.1] sm:text-7xl font-bold mb-4 md:mb-6 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
          Advanced NLP Techniques
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-6 text-zinc-200/90">
          Gain expertise in advanced NLP techniques, transformers, and language models.
        </p>

        {/* Course Badges */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
            <span className="text-zinc-400">🏷️ Badge:</span>
            <span className="ml-2 text-white">NLP Specialist</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
            <span className="text-zinc-400">⏱️ Duration:</span>
            <span className="ml-2 text-white">12 hrs</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm md:text-base">
            <span className="text-zinc-400">💰 Price:</span>
            <span className="ml-2 text-white">₹ 2999</span>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://rzp.io/rzp/SUeAHEB" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-full px-6 md:px-8 py-5 md:py-6 h-auto text-[14px] md:text-[15px] font-medium 
            bg-zinc-800/50 hover:bg-zinc-700/50 
            border-zinc-700/50 hover:border-zinc-600/50
            text-white hover:text-white/90 
            transition-all duration-200"
          >
            Book Your Seat
          </Button>
        </a>
      </div>
    </div>
  );
}