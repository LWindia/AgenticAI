import { Card } from "@/components/ui/card"

export default function AIJOB() {
  return (
    <div className="w-full bg-black mx-auto">
    <div className="w-full bg-black max-w-5xl mx-auto p-4">
      <Card className="overflow-hidden rounded-3xl border-0 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side with text */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Embrace change early, and you become the architect of the new world, not just a resident of it.
            </h2>
            <div className="flex items-center">
              <p className="text-xl md:text-2xl font-medium">
                <span className="text-pink-300">Your time to </span>
                <span className="text-yellow-300">adapt is </span>
                <span className="text-[#c1ff72] font-bold">NOW</span>
              </p>
              <div className="relative w-24 h-16 ml-2">
                <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M5 5 Q 20 5, 50 30 Q 80 55, 95 5" stroke="#ff9776" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side with chart */}
          <div className="bg-[#f8f0e0] rounded-3xl p-6 flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Chart image */}
           <img src="/assets/aijob.jpg"></img>
            </div>
          </div>
        </div>
      </Card>
    </div>
    </div>
  )
}

