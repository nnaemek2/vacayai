import { Shield, Globe, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Book with confidence using our secure payment system",
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Get help anytime, anywhere with our global support team",
  },
  {
    icon: Zap,
    title: "Instant Recommendations",
    description: "Receive AI-powered suggestions in seconds",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Travel plans tailored to your preferences",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
          Why Choose Vacay.ai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;