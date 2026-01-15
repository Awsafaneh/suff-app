"use client"

import { Shield, Zap, TrendingUp, AlertCircle, BarChart3, Bell, Lock, Activity } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Scanning",
      description: "Advanced vulnerability detection using cutting-edge AI and machine learning algorithms",
      color: "#10b981",
    },
    {
      icon: AlertCircle,
      title: "Detailed Reports",
      description: "Get comprehensive reports with all vulnerabilities, severity levels, and remediation paths",
      color: "#06b6d4",
    },
    {
      icon: TrendingUp,
      title: "Security Tracking",
      description: "Monitor your security posture over time with detailed analytics and trend analysis",
      color: "#f59e0b",
    },
    {
      icon: Zap,
      title: "Telegram Integration",
      description: "Receive instant alerts and detailed reports directly on your Telegram bot",
      color: "#ec4899",
    },
    {
      icon: BarChart3,
      title: "Advanced Dashboard",
      description: "Manage all scans, reports, and security metrics from one powerful interface",
      color: "#10b981",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get real-time notifications when new threats are detected automatically",
      color: "#06b6d4",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols for maximum data protection",
      color: "#f59e0b",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring with instant response to emerging security threats",
      color: "#ec4899",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0e27" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff, #6ee7b7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powerful Features
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Everything you need to protect your codebase from zero-day vulnerabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group rounded-xl p-6 transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "#0f1629",
                  border: "1px solid #1e293b",
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white group-hover:animate-rotate"
                  style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)` }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#f1f5f9" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#94a3b8" }} className="text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
