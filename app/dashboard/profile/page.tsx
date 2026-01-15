"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { User, Mail, Phone, Save, CheckCircle } from "lucide-react"
import TopBar from "@/components/dashboard/top-bar"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("suffixsec_user")
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      setFormData({
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone || "",
      })
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    const updated = { ...user, ...formData }
    localStorage.setItem("suffixsec_user", JSON.stringify(updated))
    setUser(updated)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <TopBar />

      <main className="flex-1 p-6 overflow-auto md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              Profile Settings
            </h1>
            <p style={{ color: "#9ca3af" }}>Manage your account information</p>
          </div>

          {/* Profile Card */}
          <div
            className="rounded-xl p-8 animate-fade-in overflow-hidden"
            style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a" }}
          >
            <div className="flex items-center mb-8 pb-8" style={{ borderBottom: "1px solid #27272a" }}>
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl animate-glow flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              >
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold" style={{ color: "#e4e4e7" }}>
                  {user?.name}
                </h2>
                <p style={{ color: "#9ca3af" }}>{user?.email}</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {saved && (
                <div
                  className="rounded-lg p-4 flex items-center"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid #10b981",
                    color: "#10b981",
                  }}
                >
                  <CheckCircle size={20} className="mr-2" />
                  Profile updated successfully
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#e4e4e7" }}>
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size={20}
                    style={{ color: "#9ca3af" }}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 pl-12 transition focus:ring-2"
                    style={{
                      backgroundColor: "#27272a",
                      border: "1px solid #27272a",
                      color: "#e4e4e7",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#e4e4e7" }}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size={20}
                    style={{ color: "#9ca3af" }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 pl-12 transition"
                    style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#e4e4e7" }}>
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size={20}
                    style={{ color: "#9ca3af" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 pl-12 transition"
                    style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                }}
              >
                <Save className="mr-2" size={20} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
