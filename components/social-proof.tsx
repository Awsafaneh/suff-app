"use client"

import { motion } from "framer-motion"

export default function SocialProof() {
  const stats = [
    { label: "Vulnerability Detection Rate", value: 99.9 },
    { label: "24/7 Monitoring", value: "100" },
    { label: "Free Trial Days", value: 30 },
  ]

  const logos = ["Acme Corp", "TechVision", "SecureNet", "CloudVault", "DataShield", "CyberGuard"]

  return (
    <section className="py-16 px-4 border-t border-red-500/20 border-b border-red-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <p className="text-center text-gray-400 mb-8 font-medium">Trusted by industry-leading security teams</p>
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="px-6 py-3 border border-red-500/30 rounded-lg bg-red-500/5 text-gray-300 font-medium min-w-fit hover:border-red-500/60 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2"
              >
                {typeof stat.value === "number" && stat.value !== 30 ? (
                  <>{typeof stat.value === "number" && stat.value < 100 ? <>{stat.value}%</> : <>{stat.value}</>}</>
                ) : (
                  stat.value
                )}
                {stat.label.includes("Rate") && "%"}
                {stat.label.includes("Days") && "%"}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
