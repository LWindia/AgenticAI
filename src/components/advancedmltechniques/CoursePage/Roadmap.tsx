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
      title: "Model Evaluation & Validation",
      capsules: [
        {
          name: "Train-Test Split Review",
          outcome: [],
          badge: "  ML Practitioner",
          icon: "🎓"
        },
        {
          name: "Cross-Validation Techniques",
          outcome: ["K-Fold", "Stratified K-Fold"    ],
          badge: "  ML Practitioner",
          icon: "🌟"
        },
        {
          name: "Model Selection & Validation",
          outcome: ["Grid Search & Random Search","Hyperparameter tuning with GridSearchCV"],
          badge: " ML Practitioner",
          icon: "📊"
        },
        
      ]
    },
    {
      level: 2,
      title: "Data Preprocessing",
      capsules: [
        {
          name: "Data Cleaning",
          outcome: ["Handling missing values (Imputation Techniques)", "Dealing with outliers"],
          badge: " ML Practitioner",
          icon: "🧹"
        },
        {
          name: "Feature Engineering",
          outcome: ["One-Hot Encoding", "Feature Scaling (Standardization & Normalization)"],
          badge: " ML Practitioner",
          icon: "⚙️"
        },
        {
          name: "Splitting Data",
          outcome: ["Train-test split", "K-Fold Cross-Validation"],
          badge: " ML Practitioner",
          icon: "✂️"
        }
      ]
    },
    {
      level: 3,
      title: " Feature Engineering & Model Optimization",
      capsules: [
        {
          name: "Linear Regression",
          outcome: ["Stationarity & trend analysis"],
          badge: " ML Practitioner",
          icon: "📈"
        },
        {
          name: "ARIMA and SARIMA models",
          outcome: [""],
          badge: " ML Practitioner",
          icon: "🎯"
        },
        {
          name: "Time series forecasting",
          outcome: [""],
          badge: " ML Practitioner",
          icon: "📊"
        }
      ]
    },
    {
      "level": 4,
      "title": "Ensemble Methods",
      "capsules": [
        {
          "name": "Bagging & Boosting",
          "outcome": ["Random Forest", "XGBoost & AdaBoost"],
          "badge": "ML Practitioner",
          "icon": "🌲"
        },
        {
          "name": "Model Stacking",
          "outcome": ["Combining multiple models for improved accuracy"],
          "badge": "ML Practitioner",
          "icon": "🔗"
        }
      ]
    },
    {
      "level": 5,
      "title": "Introduction to Reinforcement Learning (RL)",
      "capsules": [
        {
          "name": "Markov Decision Processes (MDPs)",
          "outcome": ["Fundamentals of MDPs"],
          "badge": "ML Practitioner",
          "icon": "🎲"
        },
        {
          "name": "Q-Learning & Deep Q-Networks (DQN)",
          "outcome": ["Value-based RL methods"],
          "badge": "ML Practitioner",
          "icon": "🤖"
        },
        {
          "name": "Policy Gradient Methods",
          "outcome": ["Optimizing policies directly"],
          "badge": "ML Practitioner",
          "icon": "📈"
        }
      ]
    },
    {
      "level": 6,
      "title": "Bayesian Machine Learning",
      "capsules": [
        {
          "name": "Bayesian Networks & Probabilistic Programming",
          "outcome": ["Understanding Bayesian methods"],
          "badge": "ML Practitioner",
          "icon": "🔍"
        },
        {
          "name": "Uncertainty Estimation in ML Models",
          "outcome": ["Handling uncertainty in predictions"],
          "badge": "ML Practitioner",
          "icon": "⚠️"
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
            The entire program leads to mastery in the field and is intended to give future practitioners a complete curriculum.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((module) => (
            <ModuleSection key={module.level} moduleData={module} />
          ))}
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