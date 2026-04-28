import { RoadmapLevel } from '../types/navbar';

export const roadmapData: RoadmapLevel[] = [
    {
      level: "Srishti",
      capsules: [
        { name: "Foundation in Machine Learning", outcome: "ML fundamentals, data handling, and model training", badge: "ML Explorer", duration: "8 hrs", price: "2000", href: "/foundationinmachinelearning" },
        { name: "Advanced ML Techniques", outcome: "Hyperparameter tuning, EDA, evaluation metrics", badge: "ML Practitioner", duration: "6 hrs", price: "2999", href: "/advancedmltechniques" },
        { name: "Deep Learning with Neural Networks", outcome: "CNNs, RNNs, and LSTMs", badge: "Deep Learning Pro", duration: "8 hrs", price: "4999", href: "/deeplearningwithneuralnetworks" },
      ],
    },
    {
      level: "Drishti",
      capsules: [
        { name: "Computer Vision Fundamentals", outcome: "Image processing, CNNs, OpenCV", badge: "Vision Novice", duration: "6 hrs", price: "1299", href: "/computer-vision-fundamentals" },
        { name: "Advanced Computer Vision", outcome: "Object detection, GANs, Style Transfer", badge: "Vision Expert", duration: "2 hrs", price: "2999", href: "/advance-computer-vision" },
      ],
    },
    {
      level: "Vaani",
      capsules: [
        { name: "NLP Fundamentals", outcome: "Text processing, tokenization, NER", badge: "NLP Explorer", duration: "8 hrs", price: "1999", href: "/nlp-fundamentals" },
        { name: "Advanced NLP Techniques", outcome: "LLMs, Transformers, LangChain", badge: "NLP Specialist", duration: "8 hrs", price: "2999", href: "/advance-nlp-techniques" },
      ],
    },
    {
      level: "Maya Nirmaan",
      capsules: [
        { name: "Generative AI Basics", outcome: "GANs, VAEs, and StyleGAN", badge: "GenAI Innovator", duration: "2 hrs", price: "2999", href: "/generative-ai-basics" },
        { name: "Advanced Generative AI Models", outcome: "Prompt engineering, Pix2Pix, CycleGAN", badge: "GenAI Master", duration: "8 hrs", price: "3999", href: "/advance-generative-models" },
      ],
    },
    {
      level: "Prana",
      capsules: [
        { name: "Agentic AI & Autonomous Systems", outcome: "Agents, LLM integration, autonomy", badge: "Agentic AI Explorer", duration: "50 hrs", price: "25000", href: "/agenticaiautonomoussystems" },
      ],
    },
  ];
