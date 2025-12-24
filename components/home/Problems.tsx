import { XCircle, CheckCircle } from "lucide-react";
import problemsTransform from "@/public/problems-transform.png";
import Image from "next/image";

const problems = [
  {
    problem: "Manual reconciliation takes hours",
    solution: "Automated matching in seconds",
  },
  {
    problem: "Limited visibility into cash flow",
    solution: "Real-time dashboard analytics",
  },
  {
    problem: "High international transfer fees",
    solution: "Transparent, low-cost transfers",
  },
  {
    problem: "Complex compliance requirements",
    solution: "Built-in regulatory tools",
  },
];

const Problems = () => {
  return (
    <section id="problems" className="py-24 bg-blue-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">SOLUTIONS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We Solve Your Biggest

            <span className="text-primary block">Financial Challenges</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Say goodbye to outdated processes and hello to streamlined financial operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Image
            src={problemsTransform} 
            alt="Before and after transformation with FinFlow" 
            className="w-full rounded-2xl shadow-soft"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden bg-card border border-border hover-lift"
              >
                {/* Problem Side */}
                <div className="flex-1 p-6 md:p-8 bg-blue-900/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Before</span>
                    <p className="text-foreground font-medium mt-1">{item.problem}</p>
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="hidden md:flex items-center justify-center w-12 bg-card">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-primary"></div>
                </div>

                {/* Solution Side */}
                <div className="flex-1 p-6 md:p-8 bg-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">After</span>
                    <p className="text-foreground font-medium mt-1">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
