'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does GT Finance ensure tax compliance?',
    answer:
      'GT Finance includes built-in VAT and CIT tax management features that automatically calculate tax obligations, track deadlines, and prepare filing-ready reports. Our system is regularly updated to reflect the latest tax regulations and requirements.',
  },
  {
    question: 'Can external auditors access the system directly?',
    answer:
      'Yes, GT Finance provides a secure auditor portal where you can grant read-only access to external auditors. They can review financial statements, supporting documentation, and audit trails without compromising your data integrity.',
  },
  {
    question: 'How accurate are the automated financial reports?',
    answer:
      'Our financial reports maintain 99% accuracy through automated data validation, reconciliation checks, and real-time error detection. All calculations follow internationally recognized accounting standards (IFRS/GAAP).',
  },
  {
    question: 'What types of financial statements can GT Finance generate?',
    answer:
      'GT Finance generates comprehensive income statements, cash flow statements, statements of financial position (balance sheets), trial balances, and detailed ledger reports. All statements can be customized to match your organization\'s reporting requirements.',
  },
  {
    question: 'How long does implementation typically take?',
    answer:
      'Most organizations are fully operational within 2-4 weeks. Our implementation team handles data migration, system configuration, and staff training. We offer parallel running support to ensure a smooth transition from your existing systems.',
  },
  {
    question: 'Is my financial data secure with GT Finance?',
    answer:
      'Absolutely. GT Finance is SOC 2 Type II certified and employs bank-level encryption for all data at rest and in transit. We maintain comprehensive audit logs, multi-factor authentication, and role-based access controls to protect your sensitive financial information.',
  },
];

const FAQItem = ({ 
  faq, 
  isOpen, 
  onClick, 
  index 
}: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="font-display font-semibold text-lg text-foreground pr-8 group-hover:text-gt-teal transition-colors">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-gt-teal transition-colors" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="gt-section relative overflow-hidden">
      <div className="absolute inset-0 gt-gradient-bg pointer-events-none" />
      
      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gt-teal font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Common <span className="gt-text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about GT Finance and how it can help your organization.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto gt-card p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
