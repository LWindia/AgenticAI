import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative w-full min-h-[50vh] bg-[linear-gradient(to_bottom_right,#8b2fd3CC_0%,#040106_25%,#040106_75%,#ca2571CC_100%)]">
      {/* todo decrease the opacaity of the gradient color */}
      {/* 
      ca2571
      040106, todo spred this color more in the middle, 
      8b2fd3
      */}
      {/* Background Gradients */}
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        {/* Announcement text */}
        {/* <div className="mb-10">
          <p className="text-sm font-medium text-zinc-400/90">
            Next cohort starts on April 2nd, 2025 <span className="ml-1">🎉</span>
          </p>
        </div> */}

        {/* Main heading */}
        <h1 className="text-[3.5rem] leading-[1.1] sm:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
       
        Foundation in  {" "}
          <span className="block">  Machine Learning </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-6 text-zinc-200/90">
        ML fundamentals, data handling, and model training


        </p>
{/* todo remove descripton add 3 badges, which will display duration , cost, and badge name */}
        {/* Description */}
        {/* Course Badges */}
        <div className="flex gap-4 mb-10">
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">⏱️ Duration:</span>
            <span className="ml-2 text-white">12 hrs</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">💰 Fee:</span>
            <span className="ml-2 text-white">2000 + Taxes</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">🎯</span>
            <span className="ml-2 text-white">Weekend batch</span>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://rzp.io/rzp/xyR6udr" target="blank">
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 h-auto text-[15px] font-medium 
          bg-zinc-800/50 hover:bg-zinc-700/50 
          border-zinc-700/50 hover:border-zinc-600/50
          text-white hover:text-white/90 
          transition-all duration-200"
        >
          Book your seat now
        </Button>
        </a>
      </div>
    </div>
  )
}








