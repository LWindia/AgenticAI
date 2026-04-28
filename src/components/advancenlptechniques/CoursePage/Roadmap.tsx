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
      title: "Advanced Language Models",
      capsules: [
        {
          name: "Transformer Architecture",
          outcome: [
            "Self-attention mechanisms deep dive",
            "Multi-head attention implementation",
            "Positional encoding strategies"
          ],
          badge: "NLP Specialist",
          icon: "🔄"
        },
        {
          name: "BERT & Variants",
          outcome: [
            "Bidirectional encoder representations",
            "RoBERTa, ALBERT optimizations",
            "Fine-tuning strategies"
          ],
          badge: "NLP Specialist",
          icon: "🧠"
        },
        {
          name: "GPT Models",
          outcome: [
            "Generative pre-training approach",
            "GPT-3/4 architecture insights",
            "Prompt engineering techniques"
          ],
          badge: "NLP Specialist",
          icon: "⚡"
        }
      ]
    },
    {
      level: 2,
      title: "Advanced Text Processing",
      capsules: [
        {
          name: "Neural Machine Translation",
          outcome: [
            "Seq2Seq with attention",
            "Transformer-based translation",
            "Multilingual model training"
          ],
          badge: "NLP Specialist",
          icon: "🌐"
        },
        {
          name: "Text Summarization",
          outcome: [
            "Extractive vs abstractive methods",
            "BART, T5 for summarization",
            "Evaluation metrics (ROUGE, BLEU)"
          ],
          badge: "NLP Specialist",
          icon: "📋"
        }
      ]
    },
    {
      level: 3,
      title: "Advanced Applications",
      capsules: [
        {
          name: "Question Answering",
          outcome: [
            "Reading comprehension models",
            "Open-domain QA systems",
            "Knowledge graph integration"
          ],
          badge: "NLP Specialist",
          icon: "❓"
        },
        {
          name: "Dialogue Systems",
          outcome: [
            "Conversational AI architecture",
            "Context management",
            "Multi-turn dialogue handling"
          ],
          badge: "NLP Specialist",
          icon: "💬"
        },
        {
          name: "Information Extraction",
          outcome: [
            "Advanced NER techniques",
            "Relation extraction",
            "Event extraction systems"
          ],
          badge: "NLP Specialist",
          icon: "🔍"
        }
      ]
    },
    {
      level: 4,
      title: "Cutting-edge Techniques",
      capsules: [
        {
          name: "Few-shot Learning",
          outcome: [
            "Meta-learning for NLP",
            "In-context learning",
            "Prompt-based learning"
          ],
          badge: "NLP Specialist",
          icon: "🎯"
        },
        {
          name: "Multimodal NLP",
          outcome: [
            "Vision-language models",
            "CLIP, DALL-E architectures",
            "Cross-modal understanding"
          ],
          badge: "NLP Specialist",
          icon: "🖼️"
        },
        {
          name: "Ethical NLP",
          outcome: [
            "Bias detection and mitigation",
            "Fairness in language models",
            "Responsible AI practices"
          ],
          badge: "NLP Specialist",
          icon: "⚖️"
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white h-full p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">View our curriculum</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Master advanced NLP techniques with cutting-edge transformer models and real-world applications.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((module) => (
            <ModuleSection key={module.level} moduleData={module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRoadmap;