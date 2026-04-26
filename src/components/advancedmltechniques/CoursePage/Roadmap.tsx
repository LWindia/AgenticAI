"use client"
import React from 'react';

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
      title: "Model Evaluation & Validation",
      capsules: [
        {
          name: "Train-Test Split Review",
          outcome: [
            "Importance of data splitting",
            "Stratified sampling for imbalanced datasets",
            "Holdout validation"
          ],
          badge: "ML Practitioner",
          icon: "✂️"
        },
        {
          name: "Cross-Validation Techniques",
          outcome: [
            "K-Fold Cross-Validation",
            "Stratified K-Fold",
            "Leave-One-Out Cross-Validation (LOOCV)"
          ],
          badge: "ML Practitioner",
          icon: "🔄"
        },
        {
          name: "Model Selection & Validation",
          outcome: [
            "Overfitting vs. Underfitting",
            "Learning curves",
            "Validation curves"
          ],
          badge: "ML Practitioner",
          icon: "📊"
        }
      ]
    },
    {
      level: 2,
      title: "Feature Engineering & Model Optimization",
      capsules: [
        {
          name: "Feature Importance",
          outcome: [
            "Correlation analysis",
            "Feature selection methods (RFE, SelectKBest)",
            "Feature extraction with PCA"
          ],
          badge: "ML Practitioner",
          icon: "🔍"
        },
        {
          name: "Hyperparameter Tuning",
          outcome: [
            "Grid Search",
            "Random Search",
            "Bayesian Optimization"
          ],
          badge: "ML Practitioner",
          icon: "⚙️"
        },
        {
          name: "Bias-Variance Tradeoff",
          outcome: [
            "Understanding bias and variance",
            "Model complexity vs. performance",
            "Regularization techniques (L1, L2)"
          ],
          badge: "ML Practitioner",
          icon: "⚖️"
        }
      ]
    },
    {
      level: 3,
      title: "Time-Series Analysis",
      capsules: [
        {
          name: "Introduction to Time Series",
          outcome: [
            "Components: Trend, Seasonality, Noise",
            "Stationarity and differencing",
            "Autocorrelation (ACF) and Partial Autocorrelation (PACF)"
          ],
          badge: "ML Practitioner",
          icon: "📈"
        },
        {
          name: "ARIMA and SARIMA models",
          outcome: [
            "AutoRegressive (AR) models",
            "Moving Average (MA) models",
            "ARIMA model selection"
          ],
          badge: "ML Practitioner",
          icon: "📉"
        },
        {
          name: "Time series forecasting",
          outcome: [
            "Prophet for forecasting",
            "LSTM for time series",
            "Model evaluation (MAPE, RMSE)"
          ],
          badge: "ML Practitioner",
          icon: "🔮"
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
      </div>
    </div>
  );
};

export default AIRoadmap;
