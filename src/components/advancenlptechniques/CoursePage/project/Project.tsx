import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsSection() {
  // components/programs-data.ts
const tracks = [
  // Advanced NLP projects
  {
    id: 1,
    number: "NLP Specialist",
    title: "Neural Machine Translation",
    titleColor: "text-blue-300",
    experience: "",
    description: "Building a transformer-based translation system with attention mechanisms.",
  },
  {
    id: 2,
    number: "NLP Specialist",
    title: "Question Answering System",
    titleColor: "text-purple-300",
    experience: "",
    description: "Developing a BERT-based QA system for reading comprehension tasks.",
  },
  {
    id: 3,
    number: "NLP Specialist",
    title: "Advanced Text Summarization",
    titleColor: "text-green-300",
    experience: "",
    description: "Creating abstractive summarization using T5 and BART models.",
  },
  {
    id: 4,
    number: "NLP Specialist",
    title: "Conversational AI",
    titleColor: "text-amber-300",
    experience: "",
    description: "Building a multi-turn dialogue system with context management.",
  },
  {
    id: 5,
    number: "NLP Specialist",
    title: "Information Extraction",
    titleColor: "text-red-300",
    experience: "",
    description: "Advanced NER and relation extraction using transformer models.",
  },
  {
    id: 6,
    number: "NLP Specialist",
    title: "Multimodal NLP",
    titleColor: "text-pink-300",
    experience: "",
    description: "Vision-language models for image captioning and VQA tasks.",
  },
];

  return (
    <section className="w-full bg-black text-white py-16 px-4" id="timeline">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-sm uppercase tracking-wider mb-2">Advanced NLP Specialist Projects:</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4"> Master Advanced NLP Techniques</h1>
      <p className="text-lg">Build cutting-edge NLP applications using transformer models and advanced techniques.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tracks.map((track, index) => (
        <Card 
          key={index} 
          className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col min-h-[290px]"
        >
          <div className="flex-grow">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-400"> {track.number}</p>
              <CardTitle className={`text-2xl font-bold ${track.titleColor}`}>{track.title}</CardTitle>
              <p className="text-sm text-gray-300">{track.experience}</p>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-sm text-gray-300">{track.description}</p>
            </CardContent>
          </div>
          <CardFooter className="mt-auto">
            {/* <Button
              variant="outline"
              className="w-full text-white font-bold hover:text-white bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Know More
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

  )
}