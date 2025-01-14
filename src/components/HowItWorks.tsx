import { MessageSquare, Map, Calendar } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Chat with AI",
    description: "Tell our AI assistant about your dream vacation",
  },
  {
    icon: Map,
    title: "Get Recommendations",
    description: "Receive personalized destination and activity suggestions",
  },
  {
    icon: Calendar,
    title: "Plan & Book",
    description: "Create your itinerary and book with confidence",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;