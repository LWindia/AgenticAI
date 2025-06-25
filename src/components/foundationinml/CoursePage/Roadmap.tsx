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
    <div className="rounded-xl bg-gray-900/60 p-4 md:p-5 transition-all hover:bg-gray-800/70 border border-gray-800 flex flex-col">
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
    <div className="mb-8 md:mb-12">
      <div className="flex items-center mb-2 md:mb-3">
        <div className={`w-4 h-4 rotate-45 ${levelColor} mr-2`}></div>
        <span className="text-xs text-gray-400">Module {moduleData.level}</span>
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">{moduleData.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      title: "Introduction to Machine Learning",
      capsules: [
        {
          name: "What is Machine Learning?",
          outcome: [
            "ML vs. Traditional Programming",
            "Supervised, Unsupervised, and Reinforcement Learning",
            "Real-world analogies for each paradigm"
          ],
          badge: "ML Explorer",
          icon: "🤖"
        },
        {
          name: "Applications of ML",
          outcome: [
            "Healthcare: Disease prediction",
            "Finance: Fraud detection",
            "E-commerce: Recommendation systems",
            "Autonomous vehicles"
          ],
          badge: "ML Explorer",
          icon: "🌐"
        },
        {
          name: "Types of Datasets",
          outcome: [
            "Structured (tabular) vs. Unstructured (images, text)",
            "Labeled vs. Unlabeled data",
            "Common dataset sources (Kaggle, UCI)"
          ],
          badge: "ML Explorer",
          icon: "📊"
        },
        {
          name: "ML Lifecycle",
          outcome: [
            "End-to-end workflow",
            "Data Collection → Preprocessing → Model Training → Evaluation → Deployment",
            "Iterative nature of ML projects"
          ],
          badge: "ML Explorer",
          icon: "🔄"
        }
      ]
    },
    {
      level: 2,
      title: "Data Preprocessing",
      capsules: [
        {
          name: "Data Cleaning",
          outcome: [
            "Handling missing values (Mean/Median imputation)",
            "Dealing with outliers (IQR method, Z-score)",
            "Duplicate detection and removal"
          ],
          badge: "ML Explorer",
          icon: "🧹"
        },
        {
          name: "Feature Engineering",
          outcome: [
            "One-Hot Encoding for categorical data",
            "Feature Scaling: Standardization (Z-score) & Normalization (Min-Max)",
            "Creating polynomial features"
          ],
          badge: "ML Explorer",
          icon: "⚙️"
        },
        {
          name: "Splitting Data",
          outcome: [
            "Train-test split (80-20 rule)",
            "Stratified sampling for imbalanced data",
            "K-Fold Cross-Validation (k=5, k=10)"
          ],
          badge: "ML Explorer",
          icon: "✂️"
        }
      ]
    },
    {
      level: 3,
      title: "Supervised Learning",
      capsules: [
        {
          name: "Linear Regression",
          outcome: [
            "Line of best fit and cost function (MSE)",
            "Gradient descent optimization",
            "Implementation: scikit-learn's LinearRegression"
          ],
          badge: "ML Explorer",
          icon: "📈"
        },
        {
          name: "Classification Models",
          outcome: [
            "Logistic Regression (sigmoid function)",
            "Decision Trees (Gini impurity, entropy)",
            "Random Forest (ensemble methods)"
          ],
          badge: "ML Explorer",
          icon: "🎯"
        },
        {
          name: "Model Evaluation",
          outcome: [
            "Classification metrics: Accuracy, Precision, Recall, F1-Score",
            "Confusion matrix interpretation",
            "Regression metrics: RMSE, R² Score"
          ],
          badge: "ML Explorer",
          icon: "📝"
        }
      ]
    },
    {
      level: 4,
      title: "Unsupervised Learning",
      capsules: [
        {
          name: "Clustering",
          outcome: [
            "K-means clustering (elbow method)",
            "Hierarchical clustering (dendrograms)",
            "DBSCAN for density-based clustering"
          ],
          badge: "ML Explorer",
          icon: "🔮"
        },
        {
          name: "Dimensionality Reduction",
          outcome: [
            "Principal Component Analysis (PCA)",
            "t-SNE for visualization",
            "Feature importance analysis"
          ],
          badge: "ML Explorer",
          icon: "📉"
        },
        {
          name: "Applications",
          outcome: [
            "Customer segmentation (RFM analysis)",
            "Anomaly detection (isolation forest)",
            "Market basket analysis"
          ],
          badge: "ML Explorer",
          icon: "💡"
        }
      ]
    }
  ];
  return (
    <div className="bg-black text-white h-full p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">View our curriculum</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            The entire program leads to mastery in the field and is intended to give future practitioners a complete curriculum.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
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