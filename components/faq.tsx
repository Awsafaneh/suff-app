"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

type Theme = "aurora" | "neon"

interface FAQProps {
  theme: Theme
}

const faqs = [
  {
    question: "What is SuffixSec?",
    answer:
      "SuffixSec is an advanced cybersecurity platform providing vulnerability detection and threat protection using artificial intelligence.",
  },
  {
    question: "How much does the service cost?",
    answer: "We offer multiple plans starting from $29 per month, with discounted annual payment options available.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 30-day free trial for all plans.",
  },
  {
    question: "What security level is provided?",
    answer: "We use military-grade encryption and follow global security best practices.",
  },
  {
    question: "Can I integrate SuffixSec with our systems?",
    answer: "Yes, we provide powerful and comprehensive APIs for integration with any system.",
  },
  {
    question: "What about technical support?",
    answer: "We offer 24/7 technical support via email and live chat.",
  },
]

export default function FAQ({ theme }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Answers to your most common questions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-lg border border-red-500/20 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-950/10 to-black/50 hover:from-red-950/20 hover:to-black/60 transition-all"
              >
                <span className="font-bold text-lg text-left">{faq.question}</span>
                <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {activeIndex === i ? (
                    <Minus size={24} className="text-red-500" />
                  ) : (
                    <Plus size={24} className="text-red-500" />
                  )}
                </motion.div>
              </button>

              {activeIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 bg-black/50 border-t border-red-500/10 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
