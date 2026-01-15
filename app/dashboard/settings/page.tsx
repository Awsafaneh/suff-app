"use client"

import { Bell, Lock, Trash2 } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    telegramNotifications: true,
    darkMode: true,
    twoFactor: false,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      localStorage.removeItem("suffixsec_user")
      router.push("/login")
    }
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Settings
            </h1>
            <p style={{ color: "#9ca3af" }}>Manage your preferences and account security</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {/* Notifications */}
            <div
              className="rounded-xl p-6 animate-fade-in overflow-hidden"
              style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a" }}
            >
              <div className="flex items-center mb-6">
                <Bell className="mr-3" size={24} style={{ color: "#8b5cf6" }} />
                <h2 className="text-xl font-bold" style={{ color: "#e4e4e7" }}>
                  Notifications
                </h2>
              </div>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ backgroundColor: "#27272a" }}
                >
                  <div>
                    <p className="font-medium" style={{ color: "#e4e4e7" }}>
                      Email Notifications
                    </p>
                    <p className="text-sm" style={{ color: "#9ca3af" }}>
                      Receive alerts via email
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("emailNotifications")}
                    className="w-14 h-8 rounded-full transition"
                    style={{ backgroundColor: settings.emailNotifications ? "#8b5cf6" : "#27272a" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full bg-white transition"
                      style={{
                        transform: settings.emailNotifications ? "translateX(1.75rem)" : "translateX(0.25rem)",
                      }}
                    />
                  </button>
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ backgroundColor: "#27272a" }}
                >
                  <div>
                    <p className="font-medium" style={{ color: "#e4e4e7" }}>
                      Telegram Notifications
                    </p>
                    <p className="text-sm" style={{ color: "#9ca3af" }}>
                      Receive alerts on Telegram bot
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("telegramNotifications")}
                    className="w-14 h-8 rounded-full transition"
                    style={{ backgroundColor: settings.telegramNotifications ? "#8b5cf6" : "#27272a" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full bg-white transition"
                      style={{
                        transform: settings.telegramNotifications ? "translateX(1.75rem)" : "translateX(0.25rem)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Security */}
            <div
              className="rounded-xl p-6 animate-fade-in overflow-hidden"
              style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a", animationDelay: "0.1s" }}
            >
              <div className="flex items-center mb-6">
                <Lock className="mr-3" size={24} style={{ color: "#8b5cf6" }} />
                <h2 className="text-xl font-bold" style={{ color: "#e4e4e7" }}>
                  Security
                </h2>
              </div>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ backgroundColor: "#27272a" }}
                >
                  <div>
                    <p className="font-medium" style={{ color: "#e4e4e7" }}>
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm" style={{ color: "#9ca3af" }}>
                      Enable extra protection for your account
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("twoFactor")}
                    className="w-14 h-8 rounded-full transition"
                    style={{ backgroundColor: settings.twoFactor ? "#8b5cf6" : "#27272a" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full bg-white transition"
                      style={{
                        transform: settings.twoFactor ? "translateX(1.75rem)" : "translateX(0.25rem)",
                      }}
                    />
                  </button>
                </div>

                <button
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid #8b5cf6",
                    color: "#c4b5fd",
                  }}
                >
                  <Lock className="mr-2 inline" size={18} />
                  Change Password
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div
              className="rounded-xl p-6 overflow-hidden animate-fade-in"
              style={{
                backgroundColor: "#1a1a2e",
                border: "2px solid rgba(239, 68, 68, 0.5)",
                animationDelay: "0.2s",
              }}
            >
              <div className="flex items-center mb-6">
                <Trash2 className="mr-3" size={24} style={{ color: "#ef4444" }} />
                <h2 className="text-xl font-bold" style={{ color: "#ef4444" }}>
                  Danger Zone
                </h2>
              </div>

              <p style={{ color: "#9ca3af" }} className="mb-4">
                Permanently delete your account and all associated data
              </p>
              <button
                onClick={handleDeleteAccount}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center"
                style={{ backgroundColor: "#ef4444" }}
              >
                <Trash2 className="mr-2" size={20} />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
