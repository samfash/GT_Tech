import { Shield, Zap, Globe, LineChart, CreditCard, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money globally in seconds with our lightning-fast payment infrastructure.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your data is protected with 256-bit encryption and multi-factor authentication.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Operate in 150+ countries with support for 50+ currencies and local payment methods.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Get instant insights into your cash flow, spending patterns, and financial health.",
  },
  {
    icon: CreditCard,
    title: "Smart Cards",
    description: "Issue virtual and physical cards with customizable spending limits and controls.",
  },
  {
    icon: Lock,
    title: "Compliance Built-In",
    description: "Stay compliant with automated KYC, AML, and regulatory reporting tools.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-medium mb-4 block">FEATURES</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text block">Manage Your Finances</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools designed to simplify complex financial operations and help your business grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-blue-500 group-hover:text-primary-foreground transition-colors" />
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
