'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight} from 'lucide-react';
import dashboardMockup from '@/public/dashboard-mockup.jpg';
import Image from 'next/image';
import { Button } from '../ui/button';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const AUTH_SIGNUP_URL = process.env.NEXT_PUBLIC_Backend_Signup_URL as string;

  const handleSignIn = () => {
  window.location.href = AUTH_SIGNUP_URL;
};

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen gt-gradient-hero overflow-hidden pt-24 md:pt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 gt-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left - Dashboard Mockup */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="gt-dashboard-container relative">
              <Image
                src={dashboardMockup}
                alt="GT Finance Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none rounded-3xl" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-0 gt-glass rounded-2xl p-4 shadow-gt-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-gt-cyan to-gt-sky flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">99%</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Accuracy Rate</p>
                  <p className="text-sm text-muted-foreground">In financial reports</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-gt-blue/10 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gt-cyan animate-pulse" />
              <span className="text-sm font-medium text-gt-blue">Enterprise-Ready Financial Software</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Powerful Financial Reporting & Tax Management for{' '}
              <span className="gt-text-gradient">Growing Organizations</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Generate comprehensive income statements, cash flow statements, and statements 
              of financial position. Streamline your tax compliance with automated VAT and CIT 
              management, all with direct auditor communication.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-20"
            style={{ opacity: 1 }}
            >
              <Button variant="hero" size="xl" onClick={handleSignIn}>
              Get Started Now
              <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Organizations</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-foreground">SOC 2</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;