"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type Theme = "aurora" | "neon"

interface HeroProps {
  theme: Theme
}

export default function Hero({ theme }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-black leading-tight text-white">
            Security that moves
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              at the speed of threats.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-lg leading-relaxed">
            Enterprise-grade vulnerability detection, powered by AI. Detect threats before they happen.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-red-500/60 text-white font-bold rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all"
            >
              Book a Demo
            </motion.button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-gray-400 pt-4">
            Trusted by leading security teams globally
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 md:h-full min-h-[400px]"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="200"
              cy="200"
              r="150"
              stroke="url(#gradientStroke)"
              strokeWidth="2"
              opacity="0.5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.circle
              cx="200"
              cy="200"
              r="100"
              stroke="url(#gradientStroke)"
              strokeWidth="2"
              opacity="0.3"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.rect
              x="160"
              y="160"
              width="80"
              height="80"
              fill="#ef4444"
              fillOpacity="0.1"
              rx="10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={200 + Math.cos((i / 6) * Math.PI * 2) * 120}
                cy={200 + Math.sin((i / 6) * Math.PI * 2) * 120}
                r="4"
                fill="#ef4444"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
