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
    {
      level: 1,
      title: "Foundations of LLM Development",
      capsules: [
        {
          name: "Setting Up the Development Environment and Installing All Prerequisites",
          outcome: [
            "Install Python 3.10 or newer",
            "Use VS Code with LLM-centric extensions",
            "Set up Git and GitHub for version control",
            "Configure virtual environments for isolated development"
          ],
          badge: "Agentic AI Explorer",
          icon: "🛠️"
        },
        {
          name: "Alternative Python Setup for LLM Projects: Virtualenv vs. Anaconda vs. Poetry",
          outcome: [
            "Compare Virtualenv (lightweight), Anaconda (data-heavy), and Poetry (modern Python)",
            "Get recommendations based on use case"
          ],
          badge: "Agentic AI Explorer",
          icon: "🛠️"
        },
        {
          name: "Setting Up OpenAI API for LLM Development: Keys, Pricing & Best Practices",
          outcome: [
            "Register and create a project on OpenAI",
            "Generate and store API keys securely",
            "Review pricing tiers and quotas",
            "Implement API access using .env and Python SDK"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔌"
        },
        {
          name: "Setting Up Google AI Studio API: Gemini Keys, Pricing & Usage",
          outcome: [
            "Activate APIs via Google Cloud Console",
            "Generate OAuth/service account credentials",
            "Manage billing alerts and quotas",
            "Compare Gemini with OpenAI"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔌"
        },
        {
          name: "Creating a .env File for Storing API Keys Safely",
          outcome: [
            "Use python-dotenv package",
            "Hide .env in .gitignore",
            "Structure keys for multi-API support"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔒"
        },
        {
          name: "Setting Up Local LLMs with Ollama",
          outcome: [
            "Install Ollama on macOS/Linux",
            "Download models like Mistral, LLaMA, Gemma",
            "Run prompts locally for offline development"
          ],
          badge: "Agentic AI Explorer",
          icon: "🏠"
        },
        {
          name: "Mastering LLM Engineering: Key Skills and Tools",
          outcome: [
            "Prompt engineering (zero-shot, few-shot)",
            "Data preprocessing and model evaluation",
            "Fine-tuning and prompt chaining"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Understanding Frontier Models: GPT, Claude, and Open Source LLMs",
          outcome: [
            "Compare GPT (general purpose), Claude (long context), and open-source models",
            "Evaluate performance, licensing, and use cases"
          ],
          badge: "Agentic AI Explorer",
          icon: "📊"
        },
        {
          name: "Doing Inference with Local LLMs",
          outcome: [
            "Craft prompts for clarity/control",
            "Optimize inference with truncation and sampling",
            "Run tasks offline with reduced latency"
          ],
          badge: "Agentic AI Explorer",
          icon: "🏠"
        },
        {
          name: "Basics of NLP",
          outcome: [
            "Tokenization, stemming, lemmatization",
            "Named Entity Recognition (NER)",
            "Sentence segmentation and POS tagging"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔠"
        },
        {
          name: "Understanding Tokens and Vector Embeddings",
          outcome: [
            "Tokens as model-readable chunks",
            "Embeddings as high-dimensional vectors",
            "Cosine similarity and vector search basics"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔠"
        },
        {
          name: "Hands-On Task: OpenAI vs. Ollama for Summarization",
          outcome: [
            "Summarize long text inputs",
            "Measure speed, accuracy, and cost",
            "Compare cloud vs. local inference"
          ],
          badge: "Agentic AI Explorer",
          icon: "📊"
        },
        {
          name: "Creativity and Coding: Using GPT-4o’s Canvas Feature",
          outcome: [
            "Sketch UI mockups/charts in real-time",
            "Generate HTML/CSS layouts",
            "Visualize logic/flowcharts rapidly"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎨"
        },
        {
          name: "Evaluating Meta AI and Perplexity: Nuances of Model Output",
          outcome: [
            "Assess hallucinations, factual consistency",
            "Compare Claude, GPT, Mistral qualitatively"
          ],
          badge: "Agentic AI Explorer",
          icon: "📊"
        },
        {
          name: "How Context Windows Impact LLMs",
          outcome: [
            "Understand token limits (GPT-4: 8K/32K, Claude: 100K+)",
            "Use summarization/chunking to stay within limits"
          ],
          badge: "Agentic AI Explorer",
          icon: "📏"
        },
        {
          name: "AI Model Costs: API Pricing vs. Subscription Tiers",
          outcome: [
            "Compare pay-per-token vs. flat monthly plans",
            "Estimate real-world costs"
          ],
          badge: "Agentic AI Explorer",
          icon: "💰"
        },
        {
          name: "Structured Outputs in LLMs: JSON with Prompt Engineering",
          outcome: [
            "Prompt templates for JSON/YAML/XML",
            "Validate outputs with Pydantic/json.loads()"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        }
      ]
    },
    {
      level: 2,
      title: "Applied LLM Interfaces & API Workflows",
      capsules: [
        {
          name: "Mastering AI APIs: OpenAI, Claude, and Gemini",
          outcome: [
            "Explore API syntax and capabilities",
            "Handle prompt formatting and token limits",
            "Build apps with real-time interaction"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔌"
        },
        {
          name: "Streaming AI Responses in Python",
          outcome: [
            "Use OpenAI/Anthropic streaming endpoints",
            "Implement async streaming for live feedback"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔌"
        },
        {
          name: "Creating Adversarial AI Dialogues",
          outcome: [
            "Test models under stress with adversarial prompts",
            "Detect hallucinations/bias and improve robustness"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Exploring Transformers and LLM Architectures",
          outcome: [
            "Understand attention, layers, embeddings",
            "Learn how LLaMA/Qwen implement transformers"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Rapid Prototyping AI Interfaces with Gradio",
          outcome: [
            "Create web frontends for LLMs in minutes",
            "Build text boxes, buttons, and streaming outputs"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Building Interactive GPT Interfaces with Gradio",
          outcome: [
            "Add feedback loops and session memory",
            "Style apps for professional use"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Streaming Responses in Gradio + LLM APIs",
          outcome: [
            "Display AI responses as they generate",
            "Handle stop tokens and retries"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Building Multi-Model Chat Interfaces",
          outcome: [
            "Route prompts to GPT/Claude dynamically",
            "Compare responses side-by-side"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "End-to-End Chat UI Design with Gradio",
          outcome: [
            "Integrate OpenAI API with memory",
            "Deploy with authentication and multi-turn context"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Designing Support Chatbots with LLMs",
          outcome: [
            "Detect user intent",
            "Generate context-aware responses",
            "Log conversations for improvement"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Conversational AI with OpenAI + Gradio",
          outcome: [
            "Store/pass conversation history",
            "Handle interruptions and topic switching"
          ],
          badge: "Agentic AI Explorer",
          icon: "💬"
        },
        {
          name: "Advanced Prompting: Multi-Shot & Context Enrichment",
          outcome: [
            "Use few-shot prompting for dynamic replies",
            "Inject user history to refine accuracy"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Enabling Code Execution in LLM Workflows",
          outcome: [
            "Connect code interpreters to LLM apps",
            "Run math/processing in sandboxed environments"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Extending LLMs with External Tools",
          outcome: [
            "Integrate web search, databases, or APIs",
            "Build agents that talk to tools"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "AI Assistant Use Case: Airline Booking Agent",
          outcome: [
            "Design memory and tool usage for flights/dates",
            "Build an MVP booking flow"
          ],
          badge: "Agentic AI Explorer",
          icon: "✈️"
        },
        {
          name: "Function Calling in OpenAI",
          outcome: [
            "Define tools with JSON schemas",
            "Parse and route output to tool execution"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Advanced Assistants with OpenAI + Custom Tools",
          outcome: [
            "Combine memory, context, and function-calling",
            "Deploy on web with Gradio/Flask"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚡"
        },
        {
          name: "Multimodal AI: Images, Text, and Sound",
          outcome: [
            "Use GPT + DALL-E for visual generation",
            "Integrate Whisper for speech-to-text"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎨"
        },
        {
          name: "Image Generation with DALL·E 3 in JupyterLab",
          outcome: [
            "Generate visuals from prompts",
            "Prototype in JupyterLab for slides/UI"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎨"
        },
        {
          name: "Building Multimodal AI Agents",
          outcome: [
            "Combine LLMs, voice models, and vision APIs",
            "Handle multi-format inputs/outputs"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎨"
        }
      ]
    },
    {
      level: 3,
      title: "Open-Source LLMs, Hugging Face, and RAG Systems",
      capsules: [
        {
          name: "Introduction to Hugging Face: Exploring Open-Source Models and Datasets",
          outcome: [
            "Browse models/datasets on the Hub",
            "Understand model licenses and community contributions"
          ],
          badge: "Agentic AI Explorer",
          icon: "🤗"
        },
        {
          name: "Hugging Face Hub Essentials",
          outcome: [
            "Search/filter models using Leaderboard",
            "Explore Spaces for live demos"
          ],
          badge: "Agentic AI Explorer",
          icon: "🤗"
        },
        {
          name: "Getting Started with Google Colab",
          outcome: [
            "Set up GPU/TPU for inference",
            "Save/share notebooks"
          ],
          badge: "Agentic AI Explorer",
          icon: "🛠️"
        },
        {
          name: "Integrating Hugging Face with Google Colab",
          outcome: [
            "Store API tokens securely in .env/Colab secrets",
            "Load models/datasets directly in Colab"
          ],
          badge: "Agentic AI Explorer",
          icon: "🤗"
        },
        {
          name: "Running Open-Source Models in Colab",
          outcome: [
            "Load models like LLaMA, Mistral with transformers",
            "Scale with quantization (bitsandbytes)"
          ],
          badge: "Agentic AI Explorer",
          icon: "🏠"
        },
        {
          name: "Using Transformers Pipelines in Python",
          outcome: [
            "Simplify tasks like summarization/translation",
            "Reduce boilerplate with high-level APIs"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Mastering Hugging Face Pipelines",
          outcome: [
            "Customize model configuration",
            "Switch from CPU to GPU seamlessly"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Exploring Tokenizers in Open-Source LLMs",
          outcome: [
            "Compare tokenizers (LLaMA, PHI, Starcoder)",
            "Optimize prompts by minimizing token count"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔠"
        },
        {
          name: "Tokenizer Deep Dive",
          outcome: [
            "Modify pre-tokenization settings",
            "Create domain-specific vocabularies"
          ],
          badge: "Agentic AI Explorer",
          icon: "🔠"
        },
        {
          name: "Using AutoModel and AutoModelForCausalLM",
          outcome: [
            "Fine-tune control over input/output",
            "Understand logits and attention outputs"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Loading & Quantizing Transformers (Bits & Bytes)",
          outcome: [
            "Load models with 4-bit quantization",
            "Save memory for limited hardware"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Fun Use Case: Joke Generator with Hugging Face",
          outcome: [
            "Load a fine-tuned model for jokes",
            "Test randomness and humor quality"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎭"
        },
        {
          name: "Complete Guide to Transformers",
          outcome: [
            "Build workflows with tokenizers/models",
            "Follow best practices for deployment"
          ],
          badge: "Agentic AI Explorer",
          icon: "⚙️"
        },
        {
          name: "Audio-to-Text Summarization with Whisper + Gemini",
          outcome: [
            "Transcribe audio using Whisper",
            "Summarize text with Gemini/LLMs"
          ],
          badge: "Agentic AI Explorer",
          icon: "🎙️"
        },
        {
          name: "AI-Powered Meeting Minutes Generator",
          outcome: [
            "Transcribe/summarize meetings",
            "Generate action points"
          ],
          badge: "Agentic AI Explorer",
          icon: "📝"
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
            href="https://rzp.io/rzp/6a3oxdP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            {/* todo remove blink animation in the button */}
            <button
  className="w-full py-3 px-2 border-none bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white"
>
  🚀 Book Your Seat Now
</button>
          </a>
        </div>
    
        {/* <div className="mt-12 p-6 border border-gray-800 rounded-xl text-center bg-gradient-to-b from-gray-900/40 to-gray-900/10">
          <h3 className="text-xl font-bold mb-2">AI Master Practitioner</h3>
          <p className="text-sm text-gray-400">Complete all levels to achieve the ultimate certification</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-medium flex items-center mx-auto hover:bg-gray-200 transition-colors">
            Start your journey
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AIRoadmap;