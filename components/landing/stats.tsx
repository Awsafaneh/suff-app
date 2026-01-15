"use client"

import { Eye, Zap, Shield } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Eye,
      value: "96.2%",
      label: "Vulnerability Detection Rate",
      color: "#10b981",
    },
    {
      icon: Zap,
      value: "Zero-Day",
      label: "Discovery Capable",
      color: "#06b6d4",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Continuous Monitoring",
      color: "#f59e0b",
    },
  ]

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0e27" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 transition-all duration-300 animate-fade-in overflow-hidden hover:shadow-lg"
                style={{
                  backgroundColor: "#0f1629",
                  border: "1px solid #1e293b",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.1))` }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)` }}
                  >
                    <Icon size={28} />
                  </div>
                  <div className="text-4xl font-bold mb-3" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <p style={{ color: "#94a3b8" }} className="text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
