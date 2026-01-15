"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

type Theme = "aurora" | "neon"

interface TimelineProps {
  theme: Theme
}

const steps = [
  { title: "Scan", description: "Comprehensive scanning of your digital assets" },
  { title: "Analyze", description: "Advanced threat analysis and risk assessment" },
  { title: "Report", description: "Detailed reports with actionable recommendations" },
  { title: "Protect", description: "Continuous security and real-time updates" },
]

export default function Timeline({ theme }: TimelineProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">How It Works</h2>
          <p className="text-gray-400 text-lg">Your journey to comprehensive cybersecurity</p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                className="flex-shrink-0 mt-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <motion.div
                  className="absolute right-1/2 translate-x-6 mt-12 w-1 h-12 bg-gradient-to-b from-red-500 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
