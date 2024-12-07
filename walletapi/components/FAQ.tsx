'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is Wallet API?",
    answer: "Wallet API is a comprehensive suite of tools for wallet and blockchain data analysis, enabling developers, enterprises, and protocols to integrate wallet labeling, compliance tracking, and actionable insights seamlessly into their applications."
  },
  {
    question: "How do I get started?",
    answer: "To get started, sign up for an account on our website, obtain your API key, and follow our quick start guide in the documentation. You'll be able to make your first API call in minutes."
  },
  {
    question: "What are the pricing tiers?",
    answer: "We offer three main pricing tiers: Free, Pro, and Enterprise. The Free tier is perfect for small projects and testing, Pro is designed for growing businesses with higher API limits and priority support, and Enterprise offers custom solutions for large-scale operations."
  },
  {
    question: "How secure is the Wallet API?",
    answer: "Wallet API prioritizes security. We use industry-standard encryption, comply with major privacy regulations, and regularly undergo security audits. Your data and API keys are always protected."
  }
]

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

