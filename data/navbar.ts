// roadmapData.ts

import { RoadmapLevel } from '../types/navbar'; // Ensure this path is correct based on your project structure

export const roadmapData: RoadmapLevel[] = [
    {
      level: "Srishti",
      capsules: [
        {
          name: "Foundation in Machine Learning",
          outcome: "ML fundamentals, data handling, and model training",
          badge: "ML Explorer",
          duration: "12 hrs",
          price: "2000",
        },
        {
          name: "Advanced ML Techniques",
          outcome: "Hyperparameter tuning, EDA, evaluation metrics",
          badge: "ML Practitioner",
          duration: "14 hrs",
          price: "2999",
        },
        {
          name: "Deep Learning with Neural Networks",
          outcome: "CNNs, RNNs, and LSTMs",
          badge: "Deep Learning Pro",
          duration: "14 hrs",
          price: "4999",
        },
      ],
    },
    {
      level: "Drishti",
      capsules: [
        {
          name: "Computer Vision Fundamentals",
          outcome: "Image processing, CNNs, OpenCV",
          badge: "Vision Novice",
          duration: "8 hrs",
          price: "1299",
        },
        {
          name: "Advanced Computer Vision",
          outcome: "Object detection, GANs, Style Transfer",
          badge: "Vision Expert",
          duration: "12 hrs",
          price: "2999",
        },
      ],
    },
    {
      level: " Vaani",
      capsules: [
        {
          name: "NLP Fundamentals",
          outcome: "Text processing, tokenization, NER",
          badge: "NLP Explorer",
          duration: "12 hrs",
          price: "1999",
        },
        {
          name: "Advanced NLP Techniques",
          outcome: "LLMs, Transformers, LangChain",
          badge: "NLP Specialist",
          duration: "12 hrs",
          price: "2999",
        },
      ],
    },
    {
      level: "Maya Nirmaan",
      capsules: [
        {
          name: "Generative AI Basics",
          outcome: "GANs, VAEs, and StyleGAN",
          badge: "GenAI Innovator",
          duration: "8 hrs",
          price: "2999",
        },
        {
          name: "Advanced Generative AI Models",
          outcome: "Prompt engineering, Pix2Pix, CycleGAN",
          badge: "GenAI Master",
          duration: "12 hrs",
          price: "3999",
        },
      ],
    },
    {
      level: " Prana",
      capsules: [
        {
          name: "Agentic AI & Autonomous Systems",
          outcome: "Agents, LLM integration, autonomy",
          badge: "Agentic AI Explorer",
          duration: "14 hrs",
          price: "2999",
        },
        {
          name: "Advanced Agentic AI & AutoGPT",
          outcome: "Multi-agent systems, fine-tuning",
          badge: "Agentic AI Architect",
          duration: "14 hrs",
          price: "4999",
        },
      ],
    },
    {
      level: "Moksha",
      capsules: [
        {
          name: "AI Ops & MLOps",
          outcome: "Model deployment, DevOps, CI/CD",
          badge: "AI Ops Specialist",
          duration: "15 hrs",
          price: "12999",
        },
        {
          name: "Cloud & MLOps Integration",
          outcome: "AWS, Docker, Kubernetes, OpenShift",
          badge: "Cloud AI Engineer",
          duration: "14 hrs",
          price: "9999",
        },
      ],
    },
    // {
    //   level: "Completion",
    //   capsules: [
    //     {
    //       name: "Completion",
    //       outcome: "After completing all levels",
    //       badge: "AI Master Practitioner",
    //       duration: "3 month",
    //       price: "",
    //     },
    //   ],
    // },
  ];