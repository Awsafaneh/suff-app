"use client"

import { Check, Zap } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"

export default function PlansPage() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small projects",
      features: ["Weekly full scans", "Detailed reports", "Email notifications", "Email support"],
      popular: false,
    },
    {
      name: "Professional",
      price: "79",
      description: "Best for growing teams",
      features: ["Daily scans", "Advanced reports", "Real-time alerts", "Priority support", "Telegram bot integration"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large organizations",
      features: [
        "Continuous monitoring",
        "Custom reports",
        "24/7 support",
        "Dedicated account",
        "Advanced API",
        "Security consulting",
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Choose Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Plan
              </span>
            </h1>
            <p style={{ color: "#9ca3af" }}>Start with a plan that fits your needs</p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="rounded-xl p-8 transition-all animate-fade-in overflow-hidden"
                style={{
                  backgroundColor: "#1a1a2e",
                  border: plan.popular ? "2px solid #8b5cf6" : "1px solid #27272a",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {plan.popular && (
                  <div
                    className="mb-4 inline-block text-white px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
                  >
                    <Zap size={16} className="inline mr-2" />
                    Most Popular
                  </div>
                )}

                <h2 className="text-2xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
                  {plan.name}
                </h2>
                <p style={{ color: "#9ca3af" }} className="text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#8b5cf6" }}>
                    ${plan.price}
                  </span>
                  <span style={{ color: "#9ca3af" }}>/month</span>
                </div>

                <button
                  className="w-full mb-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                  style={{
                    background: plan.popular ? "linear-gradient(135deg, #8b5cf6, #ec4899)" : "rgba(139, 92, 246, 0.2)",
                    border: plan.popular ? "none" : "1px solid #8b5cf6",
                    color: plan.popular ? "#ffffff" : "#c4b5fd",
                  }}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="flex-shrink-0" size={20} style={{ color: "#10b981" }} />
                      <span style={{ color: "#e4e4e7" }} className="text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
