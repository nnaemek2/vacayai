import { Button } from "@/components/ui/button";
import ChatInterface from "./ChatInterface";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
            Your AI Travel
            <span className="text-primary block">Companion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Plan your perfect trip with our AI-powered travel assistant. Get personalized recommendations, instant answers, and seamless booking experiences.
          </p>
          <Button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-6 text-lg rounded-full">
            Start Planning
          </Button>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-2xl p-6 animate-float">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;