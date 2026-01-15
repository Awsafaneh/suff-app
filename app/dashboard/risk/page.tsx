"use client"

import { useState } from "react"
import { AlertTriangle, Shield, Zap } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"

export default function RiskPage() {
  const [risks] = useState([
    {
      id: 1,
      title: "SQL Injection",
      severity: "critical",
      website: "example.com",
      discovered: "Jan 14, 2025",
    },
    {
      id: 2,
      title: "XSS Vulnerability",
      severity: "high",
      website: "test.com",
      discovered: "Jan 13, 2025",
    },
    {
      id: 3,
      title: "CSRF Token Missing",
      severity: "medium",
      website: "mysite.io",
      discovered: "Jan 12, 2025",
    },
    {
      id: 4,
      title: "Weak Password Policy",
      severity: "low",
      website: "example.com",
      discovered: "Jan 11, 2025",
    },
  ])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "#ef4444"
      case "high":
        return "#f59e0b"
      case "medium":
        return "#eab308"
      case "low":
        return "#3b82f6"
      default:
        return "#10b981"
    }
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Vulnerability{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Assessment
              </span>
            </h1>
            <p style={{ color: "#9ca3af" }}>All vulnerabilities detected in your websites</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className="rounded-xl p-6 animate-fade-in overflow-hidden"
              style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ color: "#9ca3af" }} className="text-sm mb-1">
                    Critical Issues
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "#ef4444" }}>
                    3
                  </p>
                </div>
                <AlertTriangle size={32} style={{ color: "#ef4444", opacity: 0.8 }} />
              </div>
            </div>

            <div
              className="rounded-xl p-6 animate-fade-in overflow-hidden"
              style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a", animationDelay: "0.1s" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ color: "#9ca3af" }} className="text-sm mb-1">
                    Medium Severity
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "#f59e0b" }}>
                    5
                  </p>
                </div>
                <Zap size={32} style={{ color: "#f59e0b", opacity: 0.8 }} />
              </div>
            </div>

            <div
              className="rounded-xl p-6 animate-fade-in overflow-hidden"
              style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a", animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ color: "#9ca3af" }} className="text-sm mb-1">
                    Security Score
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "#10b981" }}>
                    72%
                  </p>
                </div>
                <Shield size={32} style={{ color: "#10b981", opacity: 0.8 }} />
              </div>
            </div>
          </div>

          {/* Risks Table */}
          <div
            className="rounded-xl p-6 animate-fade-in overflow-hidden"
            style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a", animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#e4e4e7" }}>
              Detected Vulnerabilities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid #27272a" }}>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Vulnerability
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Severity
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Website
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Discovered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map((risk) => (
                    <tr key={risk.id} style={{ borderBottom: "1px solid rgba(39, 39, 42, 0.5)" }}>
                      <td className="py-4 px-4 font-medium" style={{ color: "#e4e4e7" }}>
                        {risk.title}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: `${getSeverityColor(risk.severity)}20`,
                            color: getSeverityColor(risk.severity),
                          }}
                        >
                          {risk.severity.charAt(0).toUpperCase() + risk.severity.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4" style={{ color: "#9ca3af" }}>
                        {risk.website}
                      </td>
                      <td className="py-4 px-4" style={{ color: "#9ca3af" }}>
                        {risk.discovered}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
