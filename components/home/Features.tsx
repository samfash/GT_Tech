// import { Shield, Zap, Globe, LineChart, CreditCard, Lock } from "lucide-react";
import featureInstant from "@/public/feature-instant.png";
import featureSecurity from "@/public/feature-security.png";
import featureGlobal from "@/public/feature-global.png";
import featureAnalytics from "@/public/feature-analytics.png";
import featureCards from "@/public/feature-cards.png";
import featureCompliance from "@/public/feature-compliance.png";
import Image from "next/image";

const features = [
  {
    image: featureInstant,
    title: "Financial Statements",
    description: "Generate income statements, cash flow statements, and statements of financial position with ease.",
  },
  {
    image: featureSecurity,
    title: "Audit & Security",
    description: "Built-in audit feature for security monitoring and compliance with direct auditor communication.",
  },
  {
    image: featureGlobal,
    title: "Ledger Management",
    description: "Manage sales & purchase ledgers, receipts & payments ledgers, and cash book presentations.",
  },
  {
    image: featureAnalytics,
    title: "Revenue & Expenditure",
    description: "Track revenue, company expenditures, receivables, payables, and cash/bank balances in real-time.",
  },
  {
    image: featureCards,
    title: "Tax Management",
    description: "Manage VAT and CIT positions to ensure compliance and avoid tax liabilities, saving consultant costs.",
  },
  {
    // icon: Lock,
    image: featureCompliance,
    title: "Compliance Built-In",
    description: "Stay compliant with automated tax reporting and regulatory requirements built into every report.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-medium mb-4 block">FEATURES</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Complete Financial
            <span className="gradient-text block">Reporting Suite</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Present essential financial statements, manage tax positions, and ensure compliance with powerful built-in tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
               <div className="w-20 h-20 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-all duration-300">
                <Image
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
