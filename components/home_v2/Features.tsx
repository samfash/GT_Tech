'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Calculator,
  BookOpen,
  Receipt,
  Percent,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Financial Statements',
    description:
      'Generate income statements, cash flow statements, and statements of financial position with ease.',
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'shadow-[0_0_30px_-5px_hsl(195,85%,50%)]',
  },
  {
    icon: Shield,
    title: 'Audit & Security',
    description:
      'Built-in audit feature for security monitoring and compliance with direct auditor communication.',
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'shadow-[0_0_30px_-5px_hsl(217,71%,50%)]',
  },
  {
    icon: BookOpen,
    title: 'Ledger Management',
    description:
      'Manage sales & purchase ledgers, receipts & payments ledgers, and cash book presentations.',
    gradient: 'from-cyan-400 to-teal-400',
    glow: 'shadow-[0_0_30px_-5px_hsl(180,70%,45%)]',
  },
  {
    icon: Receipt,
    title: 'Receipts & Payments',
    description:
      'Track all receipts and payments with automated ledger entries and reconciliation tools.',
    gradient: 'from-emerald-400 to-cyan-400',
    glow: 'shadow-[0_0_30px_-5px_hsl(160,60%,45%)]',
  },
  {
    icon: Percent,
    title: 'VAT & CIT Management',
    description:
      'Automated tax management for VAT and Corporate Income Tax with deadline tracking and filing support.',
    gradient: 'from-violet-500 to-indigo-500',
    glow: 'shadow-[0_0_30px_-5px_hsl(250,60%,55%)]',
  },
  {
    icon: Calculator,
    title: 'Financial Reports',
    description:
  'Create accurate statements of financial position showing current assets, liabilities, and equity.',
    gradient: 'from-sky-400 to-blue-500',
    glow: 'shadow-[0_0_30px_-5px_hsl(200,80%,50%)]',  
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="gt-section relative overflow-hidden">
      <div className="absolute inset-0 gt-gradient-bg pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gt-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
           Complete{' '}
            <span className="gt-text-gradient">Financial Management</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Present essential financial statements, manage tax positions, and ensure compliance with 
            powerful built-in tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
         {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="gt-feature-card group relative"
            >
              {/* Glowing icon container */}
              <div className="relative mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center ${feature.glow} transition-all duration-500 group-hover:scale-110`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>
                {/* Glow effect behind icon */}
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500`} />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-gt-cyan transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-gt-cyan/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;