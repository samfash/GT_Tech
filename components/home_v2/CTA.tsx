'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  
  const AUTH_SIGNUP_URL = process.env.NEXT_PUBLIC_Backend_Signup_URL as string;

  const handleSignIn = () => {
  window.location.href = AUTH_SIGNUP_URL;
  };

  return (
    <section id="cta" className="gt-section relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gt-navy via-gt-navy-light to-gt-slate" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full bg-gt-cyan/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full bg-gt-cyan/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gt-cyan-light" />
            <span className="text-sm font-medium text-white/90">Start Your Free Trial Today</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-gt-cyan-light">Financial Operations?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of organizations already using GT Finance to streamline 
            their reporting, ensure compliance, and save countless hours every month.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-1 py-1 font-semibold text-gt-navy bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-gt-cyan-light to-gt-sky transition-transform duration-300"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
              <Button  size="xl" variant="ghost" onClick={handleSignIn} className="relative z-10 text-gt-navy"  >
              Try our services
              <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.button>

            <Button variant="cta" size="xxl">
              Talk to Sales
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '85%', label: 'Time Saved' },
                { value: '$50K+', label: 'Avg. Cost Savings' },
                { value: '24/7', label: 'Support' },
                { value: '2 Weeks', label: 'Avg. Implementation' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;