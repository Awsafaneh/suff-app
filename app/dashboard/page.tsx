"use client"

import { useState, useEffect } from "react"
import { Activity, TrendingUp, AlertCircle, CheckCircle, Play } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [stats] = useState({
    scans: 12,
    vulnerabilities: 3,
    fixed: 9,
    rating: 85,
  })

  useEffect(() => {
    const userData = localStorage.getItem("suffixsec_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const recentScans = [
    {
      id: 1,
      website: "example.com",
      date: "Jan 14, 2025",
      status: "completed",
      issues: 2,
    },
    { id: 2, website: "test.com", date: "Jan 13, 2025", status: "completed", issues: 5 },
    {
      id: 3,
      website: "mysite.io",
      date: "Jan 12, 2025",
      status: "in-progress",
      issues: 0,
    },
  ]

  const statsList = [
    {
      icon: Activity,
      label: "Total Scans",
      value: stats.scans,
      color: "#8b5cf6",
    },
    {
      icon: AlertCircle,
      label: "Vulnerabilities Found",
      value: stats.vulnerabilities,
      color: "#f59e0b",
    },
    {
      icon: CheckCircle,
      label: "Fixed Issues",
      value: stats.fixed,
      color: "#10b981",
    },
    {
      icon: TrendingUp,
      label: "Security Rating",
      value: `${stats.rating}%`,
      color: "#ec4899",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Welcome back,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {user?.name}
              </span>
            </h1>
            <p style={{ color: "#9ca3af" }}>Here's your security overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsList.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="group rounded-xl p-6 transition-all animate-fade-in hover:scale-105"
                  style={{
                    backgroundColor: "#1a1a2e",
                    border: "1px solid #27272a",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="inline-block p-3 rounded-lg mb-4 group-hover:animate-rotate"
                    style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <p style={{ color: "#9ca3af" }} className="text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "#e4e4e7" }}>
                    {stat.value}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Recent Scans */}
          <div
            className="rounded-xl p-6 animate-fade-in overflow-hidden"
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid #27272a",
              animationDelay: "0.4s",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: "#e4e4e7" }}>
                Recent Scans
              </h2>
              <button
                className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 flex items-center"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                }}
              >
                <Play size={16} className="mr-2" />
                New Scan
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid #27272a" }}>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Website
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Date
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Status
                    </th>
                    <th className="text-left py-4 px-4 font-semibold" style={{ color: "#9ca3af" }}>
                      Issues
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentScans.map((scan) => (
                    <tr key={scan.id} style={{ borderBottom: "1px solid rgba(39, 39, 42, 0.5)" }}>
                      <td className="py-4 px-4 font-medium" style={{ color: "#e4e4e7" }}>
                        {scan.website}
                      </td>
                      <td className="py-4 px-4" style={{ color: "#9ca3af" }}>
                        {scan.date}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor:
                              scan.status === "completed" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                            color: scan.status === "completed" ? "#10b981" : "#f59e0b",
                          }}
                        >
                          {scan.status === "completed" ? "Completed" : "In Progress"}
                        </span>
                      </td>
                      <td className="py-4 px-4" style={{ color: "#9ca3af" }}>
                        {scan.issues} issue{scan.issues !== 1 ? "s" : ""}
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
