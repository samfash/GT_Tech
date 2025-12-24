import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ctaIllustration from "@/public/cta-illustration.png";
import Image from "next/image";


const benefits = [
  "14-day free trial, no credit card required",
  "Setup in under 5 minutes",
  "Cancel anytime, no questions asked",
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_200px] gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">
            Ready to Transform Your
            <span className="block mt-2 bg-linear-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
              Financial Operations?
            </span>
          </h2>
          <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust FinFlow to manage their finances. 
            Get started today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="xl">
              Try our services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Talk to Sales
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-blue-300">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
           </div>
        
        <div className="hidden md:block">
          <Image
            src={ctaIllustration} 
            alt="Launch illustration" 
            className="w-full max-w-50"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
