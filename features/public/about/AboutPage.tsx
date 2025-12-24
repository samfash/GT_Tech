import { Button } from "@/components/ui/button";
import { Sparkles, Target, Eye, Heart, Shield, Users, Award, ArrowRight } from "lucide-react";
import aboutHero from "@/public/about-hero.png";
import teamSarah from "@/public/team-sarah.png";
import teamMichael from "@/public/team-michael.png";
import teamEmily from "@/public/team-emily.png";
import teamDavid from "@/public/team-david.png";
import Image from "next/image";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the safety of your financial data with enterprise-grade security.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Every decision we make starts with how it impacts our customers' success.",
  },
  {
    icon: Users,
    title: "Inclusive Growth",
    description: "We believe financial tools should be accessible to businesses of all sizes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every feature, every interaction, every day.",
  },
];

const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", image: teamSarah },
  { name: "Michael Torres", role: "CTO & Co-founder", image: teamMichael },
  { name: "Emily Rodriguez", role: "Chief Product Officer", image: teamEmily },
  { name: "David Kim", role: "Chief Financial Officer", image: teamDavid },
];

const AboutPage = () => {
  return (
    <main className="bg-blue-950 min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
       <div className="relative container mx-auto px-6 py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-600/30 text-blue-200 text-sm mb-6 mt-6">
                <Sparkles className="w-4 h-4" />
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-50 mb-6 leading-tight">
                Building the Future of
                <span className="block mt-2 bg-linear-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  Financial Technology
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 max-w-2xl">
                Founded in 2019, GT Tech has grown from a small startup to a global leader 
                in financial management solutions, serving over 10,000 businesses worldwide.
              </p>
            </div>
            <div className="relative">
              <Image
                src={aboutHero} 
                alt="Global fintech network visualization" 
                className="w-full rounded-2xl shadow-2xl shadow-blue-500/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-blue-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-linear-to-br from-blue-800/50 to-blue-900/50 border border-blue-700/30">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-blue-50 mb-4">Our Mission</h2>
              <p className="text-blue-200 leading-relaxed">
                To democratize financial management by providing powerful, intuitive tools 
                that enable businesses of all sizes to thrive. We believe that every company 
                deserves access to enterprise-grade financial solutions without the enterprise price tag.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-linear-to-br from-blue-800/50 to-blue-900/50 border border-blue-700/30">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-blue-50 mb-4">Our Vision</h2>
              <p className="text-blue-200 leading-relaxed">
                A world where financial complexity is no longer a barrier to business success. 
                We envision a future where AI-powered insights and seamless automation allow 
                entrepreneurs to focus on what they do best—building great businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2019", label: "Founded" },
              { value: "10K+", label: "Customers" },
              { value: "150+", label: "Countries" },
              { value: "200+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-50 mb-2">{stat.value}</div>
                <div className="text-blue-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-600/30 text-blue-200 text-sm mb-6">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-50 mb-4">Our Core Values</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-blue-900/50 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-50 mb-2">{value.title}</h3>
                <p className="text-blue-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-600/30 text-blue-200 text-sm mb-6">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-50 mb-4">Leadership</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our experienced team brings together decades of expertise in finance, technology, and business.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-50">{member.name}</h3>
                <p className="text-blue-300 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-50 mb-4">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Join thousands of businesses already using FinFlow to simplify their financial operations.
          </p>
          <Button variant="hero" size="xl">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
