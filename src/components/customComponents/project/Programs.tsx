"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProgramsSection() {
  // components/programs-data.ts
const tracks = [
  // First 4 tracks with specific colors as requested
  // {
  //   id: 1,
  //   number: "ML Explorer",
  //   title: "Price Prediction",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Predicting house prices using Linear Regression based on square footage, bedrooms, location, and other factors.",
  // },
  // {
  //   id: 2,
  //   number: "ML Explorer",
  //   title: "Spam Detection",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Classifying emails as spam or not spam using a Logistic Regression model.",
  // },
   {
    id: 1,
    number: "ML Explorer",
    title: "Customer Segmentation",
    titleColor: "text-green-300",
    experience: "",
    description: "Grouping customers based on purchasing behavior using K-Means Clustering.",
    link: "https://www.aiwarriors.in/foundationinmachinelearning"

  },
  // {
  //   id: 4,
  //   number: "ML Explorer",
  //   title: "Anomaly Detection",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Detecting fraudulent credit card transactions using PCA for dimensionality reduction.",
  // },
  // Continuing with all remaining tracks (5-43)
  // {
  //   id: 5,
  //   number: "05",
  //   title: "AutoML Tuning",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Automating model selection and hyperparameter tuning using AutoML frameworks.",
  // },
  // {
  //   id: 6,
  //   number: "06",
  //   title: "Stock Forecasting",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Predicting stock prices using time-series models like ARIMA and LSTM.",
  // },
  {
    id: 2,
    number: "  Vision Novoice", 
    title: "Fake News Detection",
    titleColor: "text-purple-300",
    experience: "",
    description: "Classifying news articles as fake or real using ensemble learning techniques.",
  },
  // {
  //   id: 8,
  //   number: "08",
  //   title: "Car Simulation",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Training an autonomous vehicle to navigate using Reinforcement Learning.",
  // },
  // {
  //   id: 9,
  //   number: "09",
  //   title: "Expression Recognition",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Recognizing human emotions from facial images using Convolutional Neural Networks.",
  // },
  // {
  //   id: 10,
  //   number: "10",
  //   title: "Traffic Sign Recognition",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Identifying and classifying traffic signs from images to aid autonomous driving systems.",
  // },
  // {
  //   id: 11,
  //   number: "11",
  //   title: "Medical Classification",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Classifying medical images (e.g., X-rays, MRIs) into diagnostic categories using deep learning.",
  // },
  // {
  //   id: 12,
  //   number: "12",
  //   title: "Object Detection",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Detecting and tracking objects in video streams by integrating CNN models with OpenCV.",
  // },
  // {
  //   id: 13,
  //   number: "13",
  //   title: "Real-Time Detection",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Building a real-time object detection system using YOLO (You Only Look Once) and OpenCV.",
  // },
  // {
  //   id: 14,
  //   number: "14",
  //   title: "Style Transfer",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Transforming images into artistic masterpieces using deep learning-based style transfer.",
  // },
  // {
  //   id: 15,
  //   number: "15",
  //   title: "Face Generation",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Generating realistic human faces using Generative Adversarial Networks (GANs).",
  // },
  // {
  //   id: 16,
  //   number: "16",
  //   title: "Image Translation",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Converting images between different domains without paired datasets using CycleGAN.",
  // },
  // {
  //   id: 17,
  //   number: "17",
  //   title: "Sentiment Analysis",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Building a robust sentiment analysis model using ensemble learning techniques.",
  // },
  // {
  //   id: 3,
  //   number: "NLP Explorer",
  //   title: "Resume Parsing",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Extracting key information from resumes using NER models.",
  // },
  {
    id: 19,
    number: "NLP Explorer",
    title: "Text Summarization",
    titleColor: "text-orange-300",
    experience: "",
    description: "Developing an extractive and abstractive text summarization tool for news.",
  },
  // {
  //   id: 20,
  //   number: "NLP Explorer",
  //   title: "Speech Transcription",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Building an ASR (Automatic Speech Recognition) system with enhanced readability.",
  // },
  // {
  //   id: 21,
  //   number: "21",
  //   title: "Chatbot Development",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Creating conversational AI agents using transformer-based language models.",
  // },
  // {
  //   id: 22,
  //   number: "22",
  //   title: "Fake News BERT",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Developing an NLP-based classifier to detect fake news articles.",
  // },
  // {
  //   id: 23,
  //   number: "23",
  //   title: "Essay Scoring",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Building an AI-powered system to grade essays based on linguistic and structural features.",
  // },
  // {
  //   id: 24,
  //   number: "24",
  //   title: "QA System",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Developing a QA system that retrieves answers from a knowledge graph using GNNs.",
  // },
  // {
  //   id: 25,
  //   number: "25",
  //   title: "Text Generation",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Generating human-like text using a pre-trained transformer model.",
  // },
  // {
  //   id: 26,
  //   number: "26",
  //   title: "VAE Detection",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Detecting anomalies in images or time-series data using VAEs.",
  // },
  {
    id: 4,
    number: "GenAI Master",
    title: "Music Generation",
    titleColor: "text-amber-300",
    experience: "",
    description: "Creating AI-generated music using Generative Adversarial Networks.",
  },
  // {
  //   id: 28,
  //   number: "28",
  //   title: "Image Super-Resolution",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Enhancing low-resolution images using a Super-Resolution GAN (SRGAN).",
  // },
  // {
  //   id: 29,
  //   number: "29",
  //   title: "Text-to-Image",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Generating high-quality images from text prompts using a diffusion model.",
  // },
  // {
  //   id: 30,
  //   number: "30",
  //   title: "Custom Chatbot",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Developing a chatbot with memory and personality using LLMs.",
  // },
  // {
  //   id: 31,
  //   number: "31",
  //   title: "Text-to-Video",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Synthesizing short video clips from text descriptions.",
  // },
  // {
  //   id: 32,
  //   number: "32",
  //   title: "Research Assistant",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Creating an autonomous research agent that gathers and summarizes online information.",
  // },
  // {
  //   id: 33,
  //   number: "33",
  //   title: "AI Personal Assistant",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Developing a personal AI assistant with long-term memory using LangChain.",
  // },
  // {
  //   id: 34,
  //   number: "34",
  //   title: "Task Planner",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Automating task planning and scheduling using AI optimization techniques.",
  // },
  // {
  //   id: 35,
  //   number: "35",
  //   title: "Document Analyzer",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Creating an AI-powered agent that reads, summarizes, and answers questions from documents.",
  // },
  // {
  //   id: 36,
  //   number: "36",
  //   title: "Research Agent",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Building an autonomous agent that conducts literature reviews and summarizes findings.",
  // },
  // {
  //   id: 37,
  //   number: "37",
  //   title: "AI Task Manager",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Creating an autonomous agent that breaks down and manages tasks.",
  // },
  // {
  //   id: 38,
  //   number: "38",
  //   title: "Code Generator",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Developing an AI-powered agent that writes and improves code autonomously.",
  // },
  // {
  //   id: 39,
  //   number: "39",
  //   title: "Data Analyst",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Creating an autonomous agent that processes and visualizes data.",
  // },
  // {
  //   id: 40,
  //   number: "40",
  //   title: "AI Deployment",
  //   titleColor: "text-amber-300",
  //   experience: "",
  //   description: "Containerizing and deploying a machine learning model using Docker and FastAPI.",
  // },
  // {
  //   id: 41,
  //   number: "41",
  //   title: "Model Deployment",
  //   titleColor: "text-orange-300",
  //   experience: "",
  //   description: "Deploying an AI model on Kubernetes with auto-scaling and load balancing.",
  // },
  // {
  //   id: 42,
  //   number: "42",
  //   title: "ML - CI/CD",
  //   titleColor: "text-purple-300",
  //   experience: "",
  //   description: "Automating model deployment with GitHub Actions and version control.",
  // },
  // {
  //   id: 43,
  //   number: "",
  //   title: "Model Retraining",
  //   titleColor: "text-green-300",
  //   experience: "",
  //   description: "Building an MLOps pipeline to retrain and deploy ML models automatically.",
  // },
];

  return (
    <section className="w-full bg-black text-white py-16 px-4" id="timeline">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider mb-2">AI Warrior Projects:</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sharpen Your Skills with 36+ Battles</h1>
        <p className="text-lg">Master AI by working on 36+ real-world projects—building, innovating, and solving challenges to prepare for the fast-moving industry.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tracks.map((track, index) => (
          <Card
            key={index}
            className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col min-h-[290px]"
          >
            <div className="flex-grow">
              <CardHeader className="pb-2">
                <p className="text-sm text-gray-400">{track.number}</p>
                <CardTitle className={`text-2xl font-bold ${track.titleColor}`}>{track.title}</CardTitle>
                <p className="text-sm text-gray-300">{track.experience}</p>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-gray-300">{track.description}</p>
              </CardContent>
            </div>
            <CardFooter className="mt-auto">
              <Link 
                href={track.link || "#"}
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full text-white font-bold hover:text-white bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Know More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* "Many more..." text on the right side */}
      <div className="text-right mt-6 pr-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-lg">
        &mdash; and many more...
      </div>
    </div>
  </section>
  )
}

