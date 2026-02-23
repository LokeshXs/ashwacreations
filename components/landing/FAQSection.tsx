"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question:
      "What’s the difference between MVP Development and Product Engineering?",
    answer:
      "MVP Development focuses on building your first version fast for validation and early users. Product Engineering is a full build designed for growth, scalability, and long-term stability.",
  },
  {
    id: "faq-2",
    question: "How long does it take to build an MVP?",
    answer:
      "Typically 4–8 weeks, depending on features and complexity. We’ll confirm timelines before we start.",
  },
  {
    id: "faq-3",
    question: "What happens after the product is delivered?",
    answer:
      "We include a free maintenance period (15 days for MVP, 1 month for Product Engineering) to fix bugs and make small adjustments.",
  },
  {
    id: "faq-4",
    question: "Will I own the code and intellectual property?",
    answer:
      "Yes — you own 100% of the source code and all product assets once the project is complete and paid for.",
  },
  {
    id: "faq-5",
    question: "Can you help with deployment and hosting?",
    answer:
      "Yes — we handle deployment to production and help configure hosting environments.",
  },
  {
    id: "faq-6",
    question: "Do you provide maintenance or support after launch?",
    answer:
      "Yes — we include a free post-launch support period. Ongoing support plans are also available if needed.",
  },
  {
    id: "faq-7",
    question: "What technologies or stacks do you use?",
    answer:
      "We build products using modern, reliable tools — for example, frontend frameworks like Next.js, React Native, UI tools like Tailwind and shadcn, backend systems with Node.js, authentication with Clerk, databases like Supabase and reliable hosting on AWS and Vercel.",
  },
  {
    id: "faq-8",
    question: "Can you work with my existing team or designs?",
    answer:
      "Absolutely — we can collaborate with your team or work from your designs and specifications.",
  },
  {
    id: "faq-9",
    question: "Do you help with product strategy and planning?",
    answer:
      "Yes — we provide strategic guidance on product scope, prioritization, and roadmap planning as part of our process.",
  },
  {
    id: "faq-10",
    question: "Can you sign an NDA or confidentiality agreement?",
    answer:
      "Yes — we’re happy to sign NDAs to protect your idea and business information.",
  },
];

export default function FAQSection() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left Side - Content */}
      <div className="flex-1 bg-primary flex items-center">
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-0">
          <h2 className="text-xs sm:text-sm md:text-md text-secondary uppercase tracking-wider">
            FAQ
          </h2>
          <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-tight">
            Got Questions?
            <br />
            We've Got Answers
          </p>
          <p className="mt-4 sm:mt-5 md:mt-6 text-muted max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed">
            Find quick answers to common questions about our services, process,
            and what makes us different. Can't find what you're looking for?
            Reach out to us directly.
          </p>
        </div>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="flex-1 flex items-start lg:items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20">
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-1"
            className="ring-foreground/10 bg-background"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="transition-all duration-300"
              >
                <AccordionTrigger className="flex items-start gap-4 hover:no-underline cursor-pointer text-sm sm:text-base md:text-md py-5 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
