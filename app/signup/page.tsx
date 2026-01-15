"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { User, Mail, Lock, Phone, UserPlus, ArrowRight } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields")
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      setLoading(false)
      return
    }

    setTimeout(() => {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }
      localStorage.setItem("suffixsec_user", JSON.stringify(user))
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ backgroundColor: "#0f0f1e" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#8b5cf6", animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#ec4899", animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className="w-full max-w-md relative z-10 animate-fade-in rounded-2xl p-8"
        style={{ backgroundColor: "#1a1a2e", border: "1px solid #27272a" }}
      >
        <div className="text-center mb-8">
          <div
            className="inline-block w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold mb-4 animate-glow"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            <UserPlus size={24} />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
            Create Account
          </h1>
          <p style={{ color: "#9ca3af" }}>Join SuffixSec today</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          {error && (
            <div
              className="rounded-lg p-4 text-sm"
              style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444", color: "#ef4444" }}
            >
              {error}
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
                className="w-full rounded-lg px-4 py-3 pl-12 transition"
                placeholder="John Doe"
                style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
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
                placeholder="you@example.com"
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
                placeholder="+1234567890"
                style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#e4e4e7" }}>
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={20}
                style={{ color: "#9ca3af" }}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 pl-12 transition"
                placeholder="••••••••"
                style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#e4e4e7" }}>
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={20}
                style={{ color: "#9ca3af" }}
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 pl-12 transition"
                placeholder="••••••••"
                style={{ backgroundColor: "#27272a", border: "1px solid #27272a", color: "#e4e4e7" }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center mt-6"
            style={{
              background: loading ? "rgba(139, 92, 246, 0.5)" : "linear-gradient(135deg, #8b5cf6, #ec4899)",
            }}
          >
            <UserPlus size={20} className="mr-2" />
            {loading ? "Creating account..." : "Create Account"}
            <ArrowRight size={20} className="ml-2" />
          </button>
        </form>

        <div className="mt-6 text-center" style={{ color: "#9ca3af" }}>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold" style={{ color: "#a78bfa" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
