"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

type Theme = "aurora" | "neon"

interface PricingProps {
  theme: Theme
}

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for getting started",
    features: ["Monthly scanning", "Email support", "Basic reports", "Core protection"],
  },
  {
    name: "Professional",
    price: { monthly: 99, yearly: 990 },
    description: "For growing teams",
    features: [
      "Weekly scanning",
      "Priority support",
      "Detailed reports",
      "Advanced protection",
      "24/7 monitoring",
      "API access",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 299, yearly: 2990 },
    description: "Complete solution",
    features: [
      "Daily scanning",
      "Dedicated support",
      "Custom reports",
      "Military-grade protection",
      "Real-time monitoring",
      "Advanced APIs",
      "SLA guarantee",
    ],
  },
]

export default function Pricing({ theme }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg mb-8">Choose the plan that's right for you</p>

          <motion.div className="flex items-center justify-center gap-4" whileHover={{ scale: 1.05 }}>
            <span className={isYearly ? "text-gray-400" : "text-white font-bold"}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all"
            >
              <motion.div
                layout
                className="absolute top-1 w-6 h-6 bg-white rounded-full"
                animate={{ right: isYearly ? 4 : 32 }}
              />
            </button>
            <span className={!isYearly ? "text-gray-400" : "text-white font-bold"}>Yearly</span>
            {isYearly && (
              <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                Save 17%
              </span>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: plan.featured ? -20 : -10,
                boxShadow: plan.featured ? "0 30px 60px rgba(239, 68, 68, 0.2)" : "0 20px 40px rgba(239, 68, 68, 0.1)",
              }}
              className={`relative p-8 rounded-xl border transition-all ${
                plan.featured
                  ? "border-red-500 bg-gradient-to-br from-red-950/40 to-black/50 shadow-2xl shadow-red-500/20 md:scale-105"
                  : "border-red-500/20 bg-gradient-to-br from-red-950/20 to-black/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="text-4xl font-black text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </div>
                <p className="text-gray-400 text-sm">{isYearly ? "/year" : "/month"}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-6 transition-all ${
                  plan.featured
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50"
                    : "border border-red-500/50 text-white hover:border-red-500"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <Check size={16} className="text-red-500 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
