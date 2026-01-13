import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqIllustration from "@/public/faq-illustration.png";
import Image from "next/image";

const faqs = [
  {
    question: "What financial statements can GT Finance generate?",
    answer: "GT Finance generates comprehensive financial statements including income statements, cash flow statements, and statements of financial position. We also provide cash book presentations, sales and purchase ledgers, and receipts and payments ledgers.",
  },
  {
    question: "How does GT Finance help with tax compliance?",
    answer: "GT Finance helps organizations manage their tax positions for VAT and CIT, ensuring compliance and avoiding tax liabilities. This can save significant costs associated with hiring external tax consultants.",
  },
  {
    question: "What financial data can I track in real-time?",
    answer: "You can track revenue for any period, company expenditures, current assets like receivables and cash/bank balances, and current liabilities like payables. All data is updated in real-time for accurate reporting.",
  },
  {
    question: "How does the audit feature work?",
    answer: "GT Finance includes a built-in audit feature for security monitoring and compliance. It enables direct communication with external auditors, streamlining the audit process and ensuring transparency.",
  },
  {
    question: "Can GT Finance replace my tax consultant?",
    answer: "For basic tax matters like VAT and CIT, GT Finance can help you manage compliance independently. However, for complex tax situations, we recommend consulting with a professional while using our tools for documentation.",
  },
  {
    question: "What ledgers and books are included?",
    answer: "GT Finance provides comprehensive cash book presentations, sales ledgers, purchase ledgers, receipts ledgers, and payments ledgers. All are integrated with your financial statements for seamless reporting.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_300px] gap-12 items-start">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="hidden md:block">
            <Image
              src={faqIllustration} 
              alt="FAQ illustration" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
