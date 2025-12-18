import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FinFlow transformed how we handle international payments. What used to take days now happens in seconds.",
    author: "Sarah Chen",
    role: "CFO at TechStart",
    rating: 5,
  },
  {
    quote: "The analytics dashboard alone has saved us countless hours. We finally have visibility into our cash flow.",
    author: "Marcus Johnson",
    role: "Finance Director at GrowthCo",
    rating: 5,
  },
  {
    quote: "Best decision we made was switching to FinFlow. The compliance tools are incredibly robust.",
    author: "Elena Rodriguez",
    role: "CEO at GlobalTrade",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Loved by Businesses
            <span className="gradient-text block">Around the World</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers have to say about their experience with FinFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
