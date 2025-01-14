import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDestinations />
      <HowItWorks />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;