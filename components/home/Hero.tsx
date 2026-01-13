import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import herodashboard from "@/public/hero-dashboard-new.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-muted/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-muted/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-muted/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 border border-blue-600/30 text-blue-200 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Comprehensive Financial Reporting & Compliance
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up-delay-1 leading-tight">
            Tax Management
            <span className="block mt-2 bg-linear-to-r from-brand-strong to-primary bg-clip-text text-transparent">
            Made Effortless
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-300 mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
            Present your financial reports with confidence. Generate income statements, 
            cash flow statements, and statements of financial position with ease.
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

          <div className="mt-16 animate-fade-up-delay-3">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-blue-400/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-blue-600/30 shadow-2xl shadow-blue-500/20">
                <Image 
                  src={herodashboard} 
                    alt="GT Finance Dashboard - Financial reporting interface showing statements, ledgers, and compliance tools"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-blue-700/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-50">100%</div>
              <div className="text-blue-300 mt-1">Compliance Assured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-50">VAT & CIT</div>
              <div className="text-blue-300 mt-1">Tax Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-50">Real-Time</div>
              <div className="text-blue-300 mt-1">Audit Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
