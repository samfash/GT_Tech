import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 border border-blue-600/30 text-blue-200 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Trusted by 10,000+ businesses worldwide
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-300 mb-6 animate-fade-up-delay-1 leading-tight">
            Financial Management
            <span className="block mt-2 bg-linear-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
              Made Effortless
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-300 mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
            Streamline your finances with intelligent automation, real-time insights, 
            and seamless integrations. Take control of your financial future today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            {/* <Button variant="hero-outline" size="xl">
              Watch Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-blue-700/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">$2.5B+</div>
              <div className="text-blue-300 mt-1">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">99.9%</div>
              <div className="text-blue-300 mt-1">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">150+</div>
              <div className="text-blue-300 mt-1">Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
