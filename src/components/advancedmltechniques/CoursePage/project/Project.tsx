import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsSection() {
  const tracks = [
  {
    id: 1,
    number: "ML Practitioner",
    title: "Hyperparameter Optimization",
    titleColor: "text-orange-300",
    experience: "",
    description: "Optimizing model performance using Grid Search, Random Search, and Bayesian Optimization techniques.",
  },
  {
    id: 2,
    number: "ML Practitioner",
    title: "Time Series Forecasting",
    titleColor: "text-purple-300",
    experience: "",
    description: "Predicting future values using ARIMA, SARIMA, and Prophet models for time-series data.",
  },
  {
    id: 3,
    number: "ML Practitioner",
    title: "Feature Engineering Pipeline",
    titleColor: "text-green-300",
    experience: "",
    description: "Building automated feature engineering pipelines for improved model accuracy.",
  },
  {
    id: 4,
    number: "ML Practitioner",
    title: "Model Validation Framework",
    titleColor: "text-amber-300",
    experience: "",
    description: "Implementing cross-validation strategies and learning curves for robust model evaluation.",
  },
];

  return (
    <section className="w-full bg-black text-white py-16 px-4" id="timeline">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-sm uppercase tracking-wider mb-2">ML Practitioner Projects:</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Sharpen Your Skills with Real Battles</h1>
      <p className="text-lg">Master advanced ML techniques by working on 4+ real-world projects—optimizing, tuning, and solving complex challenges.</p>
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
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>
  )
}
