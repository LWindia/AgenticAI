import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock Python icon for the code example
const PythonIcon = () => (
  <div className="bg-blue-500 rounded-md p-1">
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="white" d="M12 0C5.372 0 6.5 3.405 6.5 3.405V6.5h6v1H4.59C1.65 7.5 0 9.45 0 12.452 0 15.53 1.65 17.5 4.59 17.5h2.91v-2.018c0-2.29 1.975-4.31 4.5-4.31 2.585 0 4.5 2.134 4.5 4.31v6.018c0 2.29-1.975 4.5-4.5 4.5-2.585 0-4.5-2.134-4.5-4.5v-1.5H3V16l-3 0v3.5C0 22.578 2.425 24 5.5 24h13c3.075 0 5.5-1.422 5.5-4.5V7.5C24 4.5 21.655 3 18.637 3H12V0zm-1.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
    </svg>
  </div>
);

// Custom Code Editor component
const CodeEditor = () => (
  <Card className="bg-gray-900 border-gray-800 p-4 rounded-md text-sm font-mono text-gray-300 shadow-xl">
     <img src="/assets/aicode.png" alt="AI Team" className="w-full h-full"></img>
  </Card>
);

// Tools Grid component
const ToolsGrid = () => (
  <Card className="bg-gray-900 border-gray-800 p-6 rounded-md shadow-xl">
    <img src="/assets/tools.png" alt="AI Team" className="w-full h-full"></img>
  </Card>
);

// Team of Agents visualization
const TeamVisualization = () => (
  <Card className="bg-gray-900 border-gray-800 p-6 rounded-md shadow-xl">
        <img src="/assets/aiteam.png" alt="AI Team" className="w-full h-full"></img>
  </Card>
);

// Apps visualization
const AppsVisualization = () => (
  <Card className="bg-gray-900 border-gray-800 p-6 rounded-md shadow-xl">
   <img src="/assets/yourapp.png" alt="AI Team" className="w-full h-full"></img>
  </Card>
);

export default function Flow() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500"></div>

          {/* Section 1: Agent */}
          <div className="relative pl-16 pb-20">
            {/* Timeline Marker */}
            <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-blue-500 bg-black"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm uppercase text-gray-500 font-medium">
                  <span>UNLEASH YOUR</span>
                </div>
                <h2 className="text-5xl font-bold mb-3">AI Agent</h2>
                <p className="text-base mb-1">A plug-and-play SDK to bring your AI agent to life.</p>
                <p className="text-blue-400 text-sm mb-6">Build and deploy your custom agent in just a few minutes.</p>
                
                <Button variant="outline" className="bg-orange-700 text-white border-none flex items-center gap-2 px-4 py-2 h-10">
                  Start coding
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </div>
              
              {/* Right Content - Code Example */}
              <CodeEditor />
            </div>
          </div>

          {/* Section 2: Tools */}
          <div className="relative pl-16 pb-20">
            {/* Timeline Marker */}
            <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-green-500 bg-black"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm uppercase text-gray-500 font-medium">
                  <span>TAILOR WITH</span>
                </div>
                <h2 className="text-5xl font-bold mb-3">Smart Tools</h2>
                <p className="text-base mb-1">Access 60+ powerful AI features instantly.</p>
                <p className="text-blue-400 text-sm mb-6">Fine-tune your agents skills to match your needs.</p>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="bg-purple-700 hover:bg-purple-700 text-white border-none flex items-center gap-2 px-4 py-2 h-10">
                    Browse tools
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Button>
                  <Button variant="link" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 p-0">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Button>
                </div>
              </div>
              
              {/* Right Content - Tools Grid */}
              <ToolsGrid />
            </div>
          </div>

          {/* Section 3: Team of agents */}
          <div className="relative pl-16 pb-20">
            {/* Timeline Marker */}
            <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-purple-500 bg-black"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm uppercase text-gray-500 font-medium">
                  <span>WORK TOGETHER WITH</span>
                </div>
                <h2 className="text-5xl font-bold mb-3">A Network of Agents</h2>
                <p className="text-base mb-1">Distribute the mental workload across your agent team.</p>
                <p className="text-blue-400 text-sm mb-6">Create advanced solutions through collaborative intelligence.</p>
                
                <Button variant="outline" className="bg-green-700 hover:bg-purple-700 text-white border-none flex items-center gap-2 px-4 py-2 h-10">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </div>
              
              {/* Right Content - Team of agents visualization */}
              <TeamVisualization />
            </div>
          </div>

          {/* Section 4: Your apps */}
          <div className="relative pl-16 pb-20">
            {/* Timeline Marker */}
            <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-yellow-500 bg-black"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm uppercase text-gray-500 font-medium">
                  <span>INTEGRATE WITH</span>
                </div>
                <h2 className="text-5xl font-bold mb-3">Your Applications</h2>
                <p className="text-base mb-1">Your agents come pre-equipped with intelligence.</p>
                <p className="text-blue-400 text-sm mb-6">Deliver secure, high-performance solutions that enhance your organizations decision-making.</p>
                
                <Button variant="outline" className="bg-amber-700 hover:bg-amber-700 text-white border-none flex items-center gap-2 px-4 py-2 h-10">
                  Build your agent app
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </div>
              
              {/* Right Content - Apps visualization */}
              <AppsVisualization />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}