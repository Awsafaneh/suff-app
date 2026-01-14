"use client"

import Link from "next/link"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 5 website scans",
        "Basic vulnerability reports",
        "Email notifications",
        "7-day report history",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited website scans",
        "Advanced AI detection",
        "Telegram bot integration",
        "30-day report history",
        "Priority support",
        "Custom scanning schedules",
        "Detailed analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited report history",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "API access",
        "White-label options",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0e27" }}>
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Choose the perfect plan for your security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 animate-fade-in hover:shadow-lg ${plan.popular ? "md:scale-105 origin-center" : ""}`}
              style={{
                backgroundColor: "#0f1629",
                border: plan.popular ? "2px solid #10b981" : "1px solid #1e293b",
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {plan.popular && (
                <div
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#6ee7b7" }}
                >
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2" style={{ color: "#f1f5f9" }}>
                {plan.name}
              </h3>
              <p style={{ color: "#94a3b8" }} className="mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {plan.price}
                </span>
                {plan.price !== "Custom" && <span style={{ color: "#94a3b8" }}>/month</span>}
              </div>

              <Link
                href="/signup"
                className="w-full btn text-white font-semibold transition-all duration-300 block text-center mb-6"
                style={{
                  background: plan.popular ? "linear-gradient(135deg, #10b981, #06b6d4)" : "rgba(16, 185, 129, 0.1)",
                  border: plan.popular ? "none" : "1px solid #10b981",
                  color: plan.popular ? "#ffffff" : "#6ee7b7",
                  padding: "0.75rem 1.5rem",
                }}
              >
                Get Started
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check size={20} style={{ color: "#10b981" }} />
                    <span style={{ color: "#94a3b8" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
