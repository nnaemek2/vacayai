import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of happy travelers who have planned their perfect vacation with Vacay.ai
        </p>
        <Button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-6 text-lg rounded-full">
          Start Planning Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;