"use client"

import Link from "next/link"
import { Zap, Play } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0a0e27" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: "#10b981", animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: "#06b6d4", animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold border"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", borderColor: "#10b981", color: "#6ee7b7" }}
            >
              Next-Gen Security Platform
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            Advanced
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Code Security
            </span>
            <br />
            Intelligence
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "#94a3b8" }}>
            Harness the power of AI to detect zero-day vulnerabilities, simulate sophisticated attacks, and protect your
            source code with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              enterprise-grade security
            </span>{" "}
            that scales with your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="btn btn-primary text-white font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                padding: "0.875rem 2rem",
                fontSize: "1rem",
              }}
            >
              <Zap size={20} className="mr-2" />
              Start Free Trial
            </Link>
            <button
              className="btn text-white font-semibold transition-all duration-300"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid #10b981",
                padding: "0.875rem 2rem",
                fontSize: "1rem",
              }}
            >
              <Play size={20} className="mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
