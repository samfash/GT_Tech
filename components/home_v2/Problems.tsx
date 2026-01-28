'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, Clock, AlertTriangle, FileQuestion, TrendingUp, Zap, ShieldCheck, Users } from 'lucide-react';

const beforeItems = [
  { icon: Clock, text: 'Hours spent on manual data entry' },
  { icon: AlertTriangle, text: 'Risk of human error in calculations' },
  { icon: FileQuestion, text: 'Disconnected spreadsheets and documents' },
  { icon: X, text: 'Delayed tax filings and compliance issues' },
];

const afterItems = [
  { icon: Zap, text: 'Automated report generation in minutes' },
  { icon: ShieldCheck, text: '99% accuracy in financial statements' },
  { icon: TrendingUp, text: 'Real-time insights and dashboards' },
  { icon: Users, text: 'Seamless auditor collaboration' },
];

const Problems = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const beforeY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const afterY = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <section id="solutions" className="gt-section relative overflow-hidden bg-linear-to-b from-background via-secondary/40 to-background">
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gt-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Transformation
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the <span className="gt-text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your financial operations from manual chaos to automated excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Card */}
          <motion.div
            style={{ y: beforeY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="gt-card p-8 lg:p-10 border-2 border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 mb-6">
                <X className="w-4 h-4 text-destructive" />
                <span className="font-semibold text-destructive">Before GT Finance</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                The Manual Struggle
              </h3>

              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-muted-foreground pt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            style={{ y: afterY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="gt-card p-8 lg:p-10 border-2 border-gt-cyan/30 bg-linear-to-br from-gt-cyan/5 to-background">
              <div className="inline-flex items-center gap-2 rounded-full bg-gt-cyan/10 px-4 py-2 mb-6">
                <Check className="w-4 h-4 text-gt-cyan" />
                <span className="font-semibold text-cyan">After GT Finance</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Automated Excellence
              </h3>

              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gt-cyan/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gt-cyan/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gt-cyan" />
                    </div>
                    <p className="text-foreground pt-2 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
