"use client"

import { Bell, X } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Critical Vulnerability Found",
      message: "SQL Injection vulnerability detected on example.com",
      time: "Jan 14, 10:30 AM",
      type: "critical",
      read: false,
    },
    {
      id: 2,
      title: "Scan Report Available",
      message: "Your comprehensive security scan has been completed",
      time: "Jan 14, 09:15 AM",
      type: "info",
      read: false,
    },
    {
      id: 3,
      title: "Plan Upgraded",
      message: "Your account has been upgraded to Professional plan",
      time: "Jan 13, 3:45 PM",
      type: "success",
      read: true,
    },
    {
      id: 4,
      title: "Security Alert",
      message: "Recommend updating your access credentials",
      time: "Jan 13, 12:00 PM",
      type: "warning",
      read: true,
    },
  ])

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "critical":
        return { bg: "rgba(239, 68, 68, 0.1)", border: "#ef4444", text: "#ef4444" }
      case "warning":
        return { bg: "rgba(245, 158, 11, 0.1)", border: "#f59e0b", text: "#f59e0b" }
      case "success":
        return { bg: "rgba(16, 185, 129, 0.1)", border: "#10b981", text: "#10b981" }
      default:
        return { bg: "rgba(139, 92, 246, 0.1)", border: "#8b5cf6", text: "#8b5cf6" }
    }
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Notifications
            </h1>
            <p style={{ color: "#9ca3af" }}>Latest updates and alerts</p>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.length === 0 ? (
              <div
                className="rounded-xl text-center py-12"
                style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a" }}
              >
                <Bell className="mx-auto mb-4" size={48} style={{ color: "#9ca3af", opacity: 0.5 }} />
                <p style={{ color: "#9ca3af" }}>No notifications</p>
              </div>
            ) : (
              notifications.map((notif, index) => {
                const colors = getTypeColor(notif.type)
                return (
                  <div
                    key={notif.id}
                    className="rounded-xl p-6 transition-all animate-fade-in hover:scale-105"
                    style={{
                      backgroundColor: colors.bg,
                      border: `2px solid ${colors.border}`,
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold mb-1" style={{ color: colors.text }}>
                          {notif.title}
                        </h3>
                        <p className="text-sm mb-2" style={{ color: colors.text, opacity: 0.8 }}>
                          {notif.message}
                        </p>
                        <p className="text-xs" style={{ color: colors.text, opacity: 0.6 }}>
                          {notif.time}
                        </p>
                      </div>
                      <button
                        onClick={() => removeNotification(notif.id)}
                        className="p-2 hover:bg-white/10 rounded-lg transition ml-4"
                        style={{ color: colors.text }}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
