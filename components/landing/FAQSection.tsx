"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconSparkles, IconRocket, IconClock, IconCode } from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "How long does it take to build a website?",
    answer:
      "Typically, a standard website takes 2-4 weeks from design to launch. More complex projects with custom features may take 6-8 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    icon: IconClock,
  },
  {
    id: "faq-2",
    question: "What technologies do you use?",
    answer:
      "We use modern, cutting-edge technologies including Next.js, React, TypeScript, and Tailwind CSS. This ensures your website is fast, secure, and scalable for future growth.",
    icon: IconCode,
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We offer various maintenance packages including updates, security monitoring, and feature enhancements. You'll never be left without support after your site goes live.",
    icon: IconRocket,
  },
  {
    id: "faq-4",
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely. Every website we build is optimized for search engines from the ground up. We can also assist with ongoing SEO strategy, content marketing, and digital advertising.",
    icon: IconSparkles,
  },
];

export default function FAQSection() {
  return (
    <section className="flex min-h-screen">
      {/* Left Side - Content */}
      <div className="flex-1 bg-primary flex items-center">
        <div className="px-14">
          <h2 className="text-md text-secondary uppercase tracking-wider">
            FAQ
          </h2>
          <p className="mt-12 text-6xl font-semibold text-secondary leading-tight">
            Got Questions?
            <br />
            We've Got Answers
          </p>
          <p className="mt-6 text-muted max-w-lg text-lg leading-relaxed">
            Find quick answers to common questions about our services, process,
            and what makes us different. Can't find what you're looking for?
            Reach out to us directly.
          </p>
        </div>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="flex-1 flex items-center justify-center px-14 py-20  ">
        <div className="w-full  ">
          <Accordion type="single" collapsible defaultValue="faq-1" className=" ring-foreground/10 bg-background"  >

          {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className=" transition-all duration-300 " >
                <AccordionTrigger className="flex items-center gap-4">
                 
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-muted-foreground">
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
