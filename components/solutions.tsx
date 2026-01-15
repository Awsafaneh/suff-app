"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Store, Code, Shield } from "lucide-react"

type Theme = "aurora" | "neon"

interface SolutionsProps {
  theme: Theme
}

const solutions = [
  {
    id: "startups",
    label: "Startups",
    icon: Building2,
    description: "Affordable security for growing teams",
    points: ["Easy integration", "Flexible pricing", "Quick setup", "Scalable"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: Store,
    description: "Protect your customers and transactions",
    points: ["Payment protection", "Data integrity", "Compliance ready", "High performance"],
  },
  {
    id: "developers",
    label: "Developers",
    icon: Code,
    description: "Security-first development tools",
    points: ["API integration", "Automation", "Security testing", "Monitoring"],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Shield,
    description: "Complete security infrastructure",
    points: ["24/7 support", "Custom solutions", "Advanced analytics", "SLA guaranteed"],
  },
]

export default function Solutions({ theme }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState("startups")

  return (
    <section id="solutions" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Built for Every Team</h2>
          <p className="text-gray-400 text-lg">Tailored solutions for your specific security needs</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution) => (
            <motion.button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === solution.id
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50"
                  : "border border-red-500/30 text-gray-300 hover:border-red-500/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {solution.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {solutions.map((solution) =>
            activeTab === solution.id ? (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="text-6xl text-red-500 mb-6"
                  >
                    <solution.icon size={64} />
                  </motion.div>
                  <h3 className="text-3xl font-black mb-4 text-white">{solution.description}</h3>
                  <ul className="space-y-3">
                    {solution.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-red-950/20 to-black/50 rounded-xl p-8 border border-red-500/20"
                >
                  <div className="aspect-square bg-gradient-to-br from-red-500/20 to-black rounded-lg" />
                </motion.div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
