// import React from 'react';
// import { FaPython, FaChartLine, FaDatabase, FaFileExcel, FaCogs, FaProjectDiagram, FaChartBar, FaEquals } from 'react-icons/fa';

// interface Card {
//   title: string;
//   description: string;
//   icon: JSX.Element;
// }

// interface Module {
//   title: string;
//   cards: Card[];
// }

// interface CourseModuleProps {
//   modules: Module[];
// }

// const CourseModule: React.FC<CourseModuleProps> = ({ modules }) => {
//   return (
//     <div className="bg-black text-white py-10 px-4">
//       <div className="max-w-6xl mx-auto border-[0.05px] p-20 rounded-3xl">
//         <div className="text-center mb-10">
//           <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
//             Syllabus
//           </span>
//           <h2 className="text-3xl font-bold">View our curriculum</h2>
//           <p className="text-gray-400 mt-2">
//             The entire program takes 6 months to finish and 6 months in part-time constraints to complete.
//           </p>
//         </div>
//         {modules.map((module, moduleIndex) => (
//           <div key={moduleIndex} className="mb-12">
//             <div className="flex flex-col items-start mb-4 ">
//               <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mb-2">
//                 Module {moduleIndex + 1}
//               </span>
//               <h3 className="text-2xl font-semibold">{module.title}</h3>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {module.cards.map((card, cardIndex) => (
//                 <div
//                   key={cardIndex}
//                   className="bg-black p-6 rounded-3xl shadow-lg border-[0.5px] border-gray-600 relative"
//                 >
//                   <div className="absolute inset-0 border-l border-r border-b border-gray-400 rounded-3xl m-1 pointer-events-none"></div>
//                   <h4 className="text-xl font-bold mb-2 flex items-center">
//                     <span className="mr-2 flex items-center  text-black justify-center w-10 h-10  bg-red-200 rounded-full">
//                       {card.icon}
//                     </span>
//                     {card.title}
//                   </h4>
//                   <p className="text-gray-300">{card.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Example usage
// const modulesData: Module[] = [
//   {
//     title: 'Fundamentals',
//     cards: [
//       { title: 'Core Python', description: 'Master both fundamental and advanced concepts in Python...', icon: <FaPython className="text-black" /> },
//       { title: 'Python for Data Science', description: 'Acquire proficiency in essential Data Science tools...', icon: <FaChartLine className="text-white" /> },
//       { title: 'SQL', description: 'SQL (Structured Query Language) is a standardized programming language...', icon: <FaDatabase className="text-white" /> },
//       { title: 'Excel - Power BI', description: 'Learn to analyze data efficiently and create interactive visualizations...', icon: <FaFileExcel className="text-white" /> },
//     ],
//   },
//   {
//     title: 'Supervised Learning',
//     cards: [
//       { title: 'Model Preparation', description: 'Understand steps to prepare data and create models...', icon: <FaCogs className="text-white" /> },
//       { title: 'Classification Problems', description: 'Dive into classification algorithms to distinguish distinct categories...', icon: <FaProjectDiagram className="text-white" /> },
//       { title: 'Regression Problems', description: 'Explore methods to predict continuous values...', icon: <FaChartBar className="text-white" /> },
//       { title: 'Similarity Models', description: 'Learn to measure and analyze the similarity between data points...', icon: <FaEquals className="text-white" /> },
//     ],
//   },
//   // Add more modules as needed
// ];

// const App: React.FC = () => {
//   return <CourseModule modules={modulesData} />;
// };

// export default App;




import React from 'react';
import { FaBrain, FaDatabase, FaChartLine, FaProjectDiagram, FaCamera, FaLanguage, FaRobot, FaServer, FaCloud } from 'react-icons/fa';

interface Module {
  title: string;
  topics: string[];
  icon: JSX.Element;
}

interface Capsule {
  title: string;
  badge: string;
  duration: string;
  price: string;
  outcome: string;
  modules: Module[];
}

interface CourseModuleProps {
  capsules: Capsule[];
}

const CourseModule: React.FC<CourseModuleProps> = ({ capsules }) => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto border-[0.05px] p-20 rounded-3xl">
        <div className="text-center mb-10">
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
            Syllabus
          </span>
          <h2 className="text-3xl font-bold">View our curriculum</h2>
          <p className="text-gray-400 mt-2">
            The entire program takes 6 months to finish and 6 months in part-time constraints to complete.
          </p>
        </div>
        {capsules.map((capsule, capsuleIndex) => (
          <div key={capsuleIndex} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{capsule.title}</h3>
              <span className="text-sm bg-gray-700 text-white px-3 py-1 rounded-full">
                Badge: {capsule.badge}
              </span>
            </div>
            <p className="text-gray-300 mb-2">{capsule.outcome}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-gray-300 mr-4">Price: {capsule.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  Wanna go for individual
                </button>
              </div>
              <span className="text-gray-300">Duration: {capsule.duration}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capsule.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="bg-black p-6 rounded-3xl shadow-lg border-[0.5px] border-gray-600 relative"
                >
                  <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded-full text-xs">
                    Module {moduleIndex + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <span className="mr-2">{module.icon}</span>
                    {module.title}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const capsulesData: Capsule[] = [
  {
    title: 'Foundation in Machine Learning',
    badge: 'ML Explorer',
    duration: '8 hrs',
    price: '₹ 999',
    outcome: 'Learn the fundamentals of Machine Learning, including data handling, supervised & unsupervised learning, and model evaluation.',
    modules: [
      {
        title: 'Introduction to Machine Learning',
        topics: [
          'What is Machine Learning?',
          'ML vs. Traditional Programming',
          'Supervised, Unsupervised, and Reinforcement Learning',
          'Applications of ML',
          'Types of Datasets',
          'ML Lifecycle',
        ],
        icon: <FaBrain className="text-white" />,
      },
      {
        title: 'Data Preprocessing',
        topics: [
          'Data Cleaning',
          'Handling missing values',
          'Dealing with outliers',
          'Feature Engineering',
          'Splitting Data',
        ],
        icon: <FaDatabase className="text-white" />,
      },
      {
        title: 'Supervised Learning',
        topics: [
          'Linear Regression',
          'Classification Models',
          'Model Evaluation',
        ],
        icon: <FaChartLine className="text-white" />,
      },
      {
        title: 'Unsupervised Learning',
        topics: [
          'Clustering',
          'Dimensionality Reduction',
          'Applications',
        ],
        icon: <FaProjectDiagram className="text-white" />,
      },
    ],
  },
  {
    title: 'Advanced ML Techniques',
    badge: 'ML Practitioner',
    duration: '14 hrs',
    price: '₹ 2500',
    outcome: 'Gain expertise in hyperparameter tuning, model optimization, and evaluation metrics.',
    modules: [
      {
        title: 'Model Evaluation & Validation',
        topics: [
          'Train-Test Split Review',
          'Cross-Validation Techniques',
          'Model Selection & Validation',
        ],
        icon: <FaChartLine className="text-white" />,
      },
      {
        title: 'Feature Engineering & Model Optimization',
        topics: [
          'Feature Importance',
          'Hyperparameter Tuning',
          'Bias-Variance Tradeoff',
        ],
        icon: <FaCloud className="text-white" />,
      },
      {
        title: 'Time-Series Analysis',
        topics: [
          'Introduction to Time Series',
          'ARIMA and SARIMA models',
          'Time series forecasting',
        ],
        icon: <FaChartLine className="text-white" />,
      },
      {
        title: 'Ensemble Methods',
        topics: [
          'Bagging & Boosting',
          'Model Stacking',
        ],
        icon: <FaProjectDiagram className="text-white" />,
      },
      {
        title: 'Introduction to Reinforcement Learning (RL)',
        topics: [
          'Markov Decision Processes (MDPs)',
          'Q-Learning & Deep Q-Networks (DQN)',
        ],
        icon: <FaBrain className="text-white" />,
      },
      {
        title: 'Bayesian Machine Learning',
        topics: [
          'Bayesian Networks & Probabilistic Programming',
          'Uncertainty Estimation in ML Models',
        ],
        icon: <FaBrain className="text-white" />,
      },
    ],
  },
  {
    title: 'Computer Vision Fundamentals',
    badge: 'Vision Novice',
    duration: '8 hrs',
    price: '₹ 1299',
    outcome: 'Learn the fundamentals of image processing and CNN basics.',
    modules: [
      {
        title: 'Introduction to Computer Vision',
        topics: [
          'What is Computer Vision?',
          'Applications: Image classification, Object detection',
          'Image Representation',
        ],
        icon: <FaCamera className="text-white" />,
      },
      {
        title: 'Image Processing with OpenCV',
        topics: [
          'Basic Image Operations',
          'Filtering Techniques',
          'Edge Detection',
        ],
        icon: <FaCamera className="text-white" />,
      },
      {
        title: 'Introduction to CNNs',
        topics: [
          'Convolutional Neural Networks',
          'Training CNN on MNIST Dataset',
          'Model evaluation',
        ],
        icon: <FaCamera className="text-white" />,
      },
    ],
  },
  // Add more capsules as needed
];

const App: React.FC = () => {
  return <CourseModule capsules={capsulesData} />;
};

export default App;