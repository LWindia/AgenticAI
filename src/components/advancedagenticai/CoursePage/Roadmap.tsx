"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';

// Define types
interface Capsule {
  name: string;
  outcome: string[] | string;
  badge: string;
  icon: string;
}

interface ModuleData {
  level: number;
  title: string;
  capsules: Capsule[];
}

interface CapsuleCardProps {
  capsule: Capsule;
  level: number;
}

interface ModuleSectionProps {
  moduleData: ModuleData;
}

// Utility functions
const getLevelColor = (level: number): string => {
  const colors: Record<number, string> = {
    1: "bg-purple-500",
    2: "bg-blue-500",
    3: "bg-pink-500",
    4: "bg-green-500",
    5: "bg-orange-500",
    6: "bg-red-500",
  };
  return colors[level] || "bg-gray-500";
};

const getIconBgColor = (level: number): string => {
  const colors: Record<number, string> = {
    1: "bg-purple-900/40",
    2: "bg-blue-900/40",
    3: "bg-pink-900/40",
    4: "bg-green-900/40",
    5: "bg-orange-900/40",
    6: "bg-red-900/40",
  };
  return colors[level] || "bg-gray-900/40";
};

// Components
const CapsuleCard: React.FC<CapsuleCardProps> = ({ capsule, level }) => {
  const iconBgColor = getIconBgColor(level);

  return (
    <div className="rounded-xl bg-gray-900/60 p-5 transition-all hover:bg-gray-800/70 border border-gray-800 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-md ${iconBgColor} flex items-center justify-center text-lg`}>
            {capsule.icon}
          </div>
          <h3 className="text-md font-medium text-white">{capsule.name}</h3>
        </div>
        <div className="text-xs text-gray-400">{capsule.badge}</div>
      </div>
      <p className="text-sm text-gray-400 flex-grow mt-2">
        {Array.isArray(capsule.outcome) ? capsule.outcome.join(', ') : capsule.outcome}
      </p>
    </div>
  );
};

const ModuleSection: React.FC<ModuleSectionProps> = ({ moduleData }) => {
  const levelColor = getLevelColor(moduleData.level);

  return (
    <div className="mb-12">
      <div className="flex items-center mb-3">
        <div className={`w-4 h-4 rotate-45 ${levelColor} mr-2`}></div>
        <span className="text-xs text-gray-400">Module {moduleData.level}</span>
      </div>
      <h2 className="text-xl font-semibold text-white mb-6">{moduleData.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moduleData.capsules.map((capsule, index) => (
          <CapsuleCard key={index} capsule={capsule} level={moduleData.level} />
        ))}
      </div>
    </div>
  );
};

const AIRoadmap: React.FC = () => {
 
  const roadmapData: ModuleData[] = [
    // Previous levels (1-3) would go here...
    {
      level: 1,
      title: "Retrieval-Augmented Generation (RAG) and Agentic AI Systems",
      capsules: [
        {
          name: "RAG Fundamentals: Enhancing LLM Accuracy with External Data",
          outcome: [
            "Combine static LLMs with dynamic search",
            "Fetch relevant documents and inject them into prompts",
            "Improve factual accuracy and reduce hallucinations"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔍"
        },
        {
          name: "Building Your Own RAG System",
          outcome: [
            "Ingest domain-specific documents",
            "Generate vector embeddings",
            "Perform semantic search and pass results to LLM"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔍"
        },
        {
          name: "Understanding Vector Embeddings",
          outcome: [
            "Convert text to high-dimensional vectors",
            "Explore cosine similarity and vector distance",
            "Use embeddings for search, clustering, and classification"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Intro to LangChain: Framework for RAG Systems",
          outcome: [
            "Set up chains connecting LLMs to retrievers",
            "Use agents, tools, and memory modules",
            "Integrate with OpenAI, Chroma, FAISS"
          ],
          badge: "Agentic AI Specialist",
          icon: "⛓️"
        },
        {
          name: "Text Chunking with LangChain",
          outcome: [
            "Use recursive and character-based splitters",
            "Find optimal chunk size for recall vs. context window",
            "Tune overlap and granularity"
          ],
          badge: "Agentic AI Specialist",
          icon: "✂️"
        },
        {
          name: "Preparing Vector Databases with OpenAI + Chroma",
          outcome: [
            "Generate embeddings using OpenAI",
            "Store in ChromaDB or FAISS",
            "Query using semantic similarity"
          ],
          badge: "Agentic AI Specialist",
          icon: "🗄️"
        },
        {
          name: "Advanced Embedding Workflows",
          outcome: [
            "Normalize vectors and cache embeddings",
            "Store vectors with metadata for filtering"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Visualizing Embeddings with t-SNE & UMAP",
          outcome: [
            "Use dimensionality reduction to visualize clusters",
            "Debug poor retrieval with visual feedback"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Complete RAG Pipeline with LangChain",
          outcome: [
            "Build a chatbot that retrieves context on demand",
            "Add memory and tools for dynamic interactions"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔍"
        },
        {
          name: "Full RAG Agent: LLM + Retriever + Memory",
          outcome: [
            "Maintain context over turns",
            "Dynamically fetch supporting content"
          ],
          badge: "Agentic AI Specialist",
          icon: "🤖"
        },
        {
          name: "Hands-On RAG Application: Internal Q&A Bot",
          outcome: [
            "Build a Q&A bot for docs/support pages",
            "Run queries in real time and serve responses"
          ],
          badge: "Agentic AI Specialist",
          icon: "💬"
        },
        {
          name: "Optimizing RAG for Scale",
          outcome: [
            "Use batching, caching, and parallel processing",
            "Design for low-latency, high-throughput use cases"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚡"
        },
        {
          name: "RAG Troubleshooting and Debugging",
          outcome: [
            "Improve low-quality retrieval",
            "Resolve context overflow and token issues"
          ],
          badge: "Agentic AI Specialist",
          icon: "🐞"
        },
        {
          name: "Vector Store Showdown: FAISS vs. Chroma",
          outcome: [
            "Measure speed, accuracy, and scalability",
            "Choose the right store for project needs"
          ],
          badge: "Agentic AI Specialist",
          icon: "🗄️"
        },
        {
          name: "LangChain Internals: Custom Chains and Agents",
          outcome: [
            "Build custom prompt templates and retrievers",
            "Modify LangChain components for full control"
          ],
          badge: "Agentic AI Specialist",
          icon: "⛓️"
        },
        {
          name: "Personal AI Knowledge Workers with RAG",
          outcome: [
            "Summarize research and manage notes",
            "Generate insights with personal knowledge bases"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔍"
        }
      ]
    },
    {
      level: 2,
      title: "Fine-Tuning, PEFT, and Advanced Agentic Architectures",
      capsules: [
        {
          name: "Introduction to Fine-Tuning: From Prompting to Training Custom LLMs",
          outcome: [
            "Compare prompting, RAG, and fine-tuning",
            "Choose methods based on cost, control, or customization"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "Designing a Fine-Tuning Pipeline",
          outcome: [
            "Define objectives and KPIs",
            "Prepare training/evaluation workflows"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "Collecting and Creating Datasets",
          outcome: [
            "Extract/label data from public sources",
            "Generate synthetic data with GPT"
          ],
          badge: "Agentic AI Specialist",
          icon: "📂"
        },
        {
          name: "Data Curation Techniques",
          outcome: [
            "Clean and normalize text",
            "Remove duplicates and irrelevant entries"
          ],
          badge: "Agentic AI Specialist",
          icon: "📂"
        },
        {
          name: "Uploading and Managing Datasets on Hugging Face",
          outcome: [
            "Structure data for Hugging Face Datasets library",
            "Version datasets with metadata"
          ],
          badge: "Agentic AI Specialist",
          icon: "🤗"
        },
        {
          name: "Classic ML Baselines",
          outcome: [
            "Train models like BoW + Logistic Regression",
            "Use TF-IDF or CountVectorizer as baselines"
          ],
          badge: "Agentic AI Specialist",
          icon: "📈"
        },
        {
          name: "Evaluating LLM Performance",
          outcome: [
            "Choose metrics: loss, accuracy, F1-score",
            "Track business-level KPIs"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Preparing JSONL Files for OpenAI Fine-Tuning",
          outcome: [
            "Format instruction-response schemas",
            "Ensure consistent training data"
          ],
          badge: "Agentic AI Specialist",
          icon: "📝"
        },
        {
          name: "Launching Fine-Tuning Jobs with OpenAI",
          outcome: [
            "Upload dataset via CLI/API",
            "Monitor progress and retrieve models"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "Tracking Training with Weights & Biases",
          outcome: [
            "Visualize metrics and loss",
            "Compare model runs"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Introduction to PEFT: LoRA and QLoRA",
          outcome: [
            "Use Low-Rank Adaptation (LoRA) for efficient training",
            "Apply QLoRA for 4-bit quantized fine-tuning"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "QLoRA: 4-bit Quantized Fine-Tuning",
          outcome: [
            "Use double quantization (NF4)",
            "Preserve accuracy while reducing compute"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "PEFT with Hugging Face Adapters",
          outcome: [
            "Integrate adapters with transformers",
            "Swap between base and fine-tuned weights"
          ],
          badge: "Agentic AI Specialist",
          icon: "🤗"
        },
        {
          name: "Full Use Case: End-to-End LLM Tuning",
          outcome: [
            "Business problem → dataset → model → endpoint",
            "Deploy and monitor in production"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        }
      ]
    },
    {
      level: 3,
      title: "LLM Engineering, Multi-Agent Systems, and Cloud Deployment",
      capsules: [
        {
          name: "LLM Engineering Foundations",
          outcome: [
            "Deploy and monitor production-grade models",
            "Learn latency, load balancing, and rate limits"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚙️"
        },
        {
          name: "Serverless Deployment with Modal",
          outcome: [
            "Set up Modal for inference hosting",
            "Build Python APIs that scale automatically"
          ],
          badge: "Agentic AI Specialist",
          icon: "☁️"
        },
        {
          name: "Designing Multi-Agent Architectures",
          outcome: [
            "Enable negotiation and task delegation",
            "Use memory and tools across agents"
          ],
          badge: "Agentic AI Specialist",
          icon: "🤖"
        },
        {
          name: "Building a Scalable Vector Database",
          outcome: [
            "Optimize Chroma for write/read performance",
            "Partition data for parallel search"
          ],
          badge: "Agentic AI Specialist",
          icon: "🗄️"
        },
        {
          name: "Embedding Visualization in 2D & 3D",
          outcome: [
            "Use t-SNE, UMAP, or PCA",
            "Analyze clusters and semantic proximity"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Structured Agent Outputs with Pydantic",
          outcome: [
            "Enforce JSON schema validation",
            "Prevent malformed responses"
          ],
          badge: "Agentic AI Specialist",
          icon: "📝"
        },
        {
          name: "Designing Autonomy in Agents",
          outcome: [
            "Implement reflection and self-prompting",
            "Simulate goal setting and execution"
          ],
          badge: "Agentic AI Specialist",
          icon: "🤖"
        },
        {
          name: "The LLM Engineer’s Retrospective",
          outcome: [
            "Review design choices and trade-offs",
            "Plan iterative improvements"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔍"
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white h-full p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">View our curriculum</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            The entire program leads to mastery in the field and is intended to give future practitioners a complete curriculum.
          </p>
        </div>
        <div className="space-y-8">
          {roadmapData.map((module) => (
            <ModuleSection key={module.level} moduleData={module} />
          ))}
        </div>

     
 {/* Call to action button */}
 <div className="mt-12 flex justify-center">
          <a 
            href="https://rzp.io/rzp/2SOJBNi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            {/* todo remove blink animation in the button */}
            <button
  className="w-auto py-3 px-4 border-none bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white"
>
  🚀 Book Your Seat Now
</button>
          </a>
        </div>
    
      </div>
    </div>
  );
};

export default AIRoadmap;