import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeaturedDestinations />
        <HowItWorks />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;