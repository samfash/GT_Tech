import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@gttechnology.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+234 (081) 3553-7494",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "18 Ajibulu Street",
      description: "Lagos, LG 12004"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST"
    }
  ];

  return (
    
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let&apos;s Start a{" "}
              {/* <span className="text-transparent bg-clip-text bg-gradient-cta"> */}
                Conversation
              {/* </span> */}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Want to explore partnership opportunities? 
              We&apos;re here to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-elegant animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-background border-border focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background border-border focus:border-primary h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-border focus:border-primary h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="bg-background border-border focus:border-primary h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    placeholder="How can we help?" 
                    className="bg-background border-border focus:border-primary h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="bg-background border-border focus:border-primary min-h-[150px] resize-none"
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {/* Map Placeholder */}
              <div className="bg-linear-to-br from-primary/20 to-secondary/30 rounded-3xl h-80 flex items-center justify-center border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-semibold">123 Finance Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-card rounded-3xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Find quick answers to common questions about our services, pricing, and support.
                </p>
                <Link href="/#faq">
                  <Button variant="outline" className="w-full">
                    View FAQ
                  </Button>
                </Link>
              </div>

              {/* Support Hours */}
              <div className="bg-linear-to-br from-primary/10 to-transparent rounded-3xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Priority Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise clients enjoy 24/7 dedicated support with guaranteed response times.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Clock className="w-5 h-5" />
                  <span>Average response time: 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
