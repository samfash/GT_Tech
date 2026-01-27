'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "GT Finance transformed our month-end closing process. What used to take our team a full week now takes just two days with complete accuracy.",
    author: "Sarah Mitchell",
    role: "CFO, TechCorp Industries",
    company: "TechCorp Industries",
    avatar: "SM",
  },
  {
    quote:
      "The direct auditor communication feature is a game-changer. Our annual audits are now smoother than ever, with all documentation readily accessible.",
    author: "James Chen",
    role: "Finance Director, Global Manufacturing Ltd",
    company: "Global Manufacturing Ltd",
    avatar: "JC",
  },
  {
    quote:
      "Tax compliance used to keep us up at night. With GT Finance's VAT and CIT management, we've never missed a deadline or filing requirement.",
    author: "Maria Rodriguez",
    role: "Tax Manager, Retail Dynamics",
    company: "Retail Dynamics",
    avatar: "MR",
  },
  {
    quote:
      "The automated cash flow statements give us real-time visibility into our financial health. It's like having a financial analyst working 24/7.",
    author: "David Thompson",
    role: "CEO, StartupVentures",
    company: "StartupVentures",
    avatar: "DT",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="gt-section relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gt-teal font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="gt-text-gradient">Finance Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how organizations are transforming their financial operations with GT Finance.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="gt-card p-8 md:p-12 relative overflow-hidden min-h-[320px]">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-gt-blue/10" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10"
              >
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gt-navy to-gt-teal flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-border hover:border-gt-teal hover:bg-gt-teal/5 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gt-teal'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-border hover:border-gt-teal hover:bg-gt-teal/5 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
