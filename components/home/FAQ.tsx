import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started with GT Tech?",
    answer: "You can get started in under 5 minutes. Simply sign up, verify your business, and you'll have access to all features immediately. Our onboarding team is available 24/7 to help you through the process.",
  },
  {
    question: "What currencies and countries do you support?",
    answer: "We support 50+ currencies and operate in 150+ countries. This includes all major currencies like USD, EUR, GBP, as well as emerging market currencies. We're constantly expanding our coverage.",
  },
  {
    question: "How secure is GT Tech?",
    answer: "We use bank-grade 256-bit encryption, multi-factor authentication, and are SOC 2 Type II certified. Your funds are held in segregated accounts with tier-1 banking partners. We also have a dedicated security team monitoring for threats 24/7.",
  },
  {
    question: "What are your fees for international transfers?",
    answer: "We offer transparent, low-cost transfers starting at 0.5% for most corridors. There are no hidden fees - you'll always see the total cost upfront before confirming any transaction.",
  },
  {
    question: "Can I integrate GT Tech with my existing tools?",
    answer: "Yes! We offer integrations with popular accounting software like QuickBooks, Xero, and NetSuite, as well as ERP systems and custom API access for enterprise clients.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 support via chat, email, and phone. Enterprise clients also get a dedicated account manager. Our average response time is under 2 minutes for chat support.",
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

        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;
