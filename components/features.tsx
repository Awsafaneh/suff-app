"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, AlertCircle, Smartphone, Lock } from "lucide-react"

type Theme = "aurora" | "neon"

interface FeaturesProps {
  theme: Theme
}

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Multi-layer defense against known and unknown threats",
  },
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Real-time vulnerability detection with instant alerts",
  },
  {
    icon: Eye,
    title: "Comprehensive Monitoring",
    description: "Continuous surveillance of your entire infrastructure",
  },
  {
    icon: AlertCircle,
    title: "Intelligent Analysis",
    description: "Advanced threat analysis powered by machine learning",
  },
  {
    icon: Smartphone,
    title: "Easy Management",
    description: "Intuitive dashboard accessible from any device",
  },
  {
    icon: Lock,
    title: "Military-Grade Security",
    description: "Enterprise encryption for all your critical data",
  },
]

export default function Features({ theme }: FeaturesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Powerful Features</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade security tools designed to protect your digital assets
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
              }}
              className="p-6 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-black/50 backdrop-blur-sm hover:border-red-500/50 transition-all group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="text-red-500 mb-4 group-hover:text-red-400 transition-colors"
              >
                <feature.icon size={32} />
              </motion.div>

              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 mt-4 rounded"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
