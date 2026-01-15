"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"

interface HeaderProps {
  isLoggedIn?: boolean
}

export default function Header({ isLoggedIn }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 w-full z-50 border-b"
      style={{
        backgroundColor: "rgba(10, 14, 39, 0.7)",
        backdropFilter: "blur(12px)",
        borderColor: "#1e293b",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
            style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}
          >
            <Shield size={20} />
          </div>
          <span
            className="text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SuffixSec
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="transition duration-300" style={{ color: "#cbd5e1" }}>
            Features
          </a>
          <a href="#stats" className="transition duration-300" style={{ color: "#cbd5e1" }}>
            Capabilities
          </a>
          <a href="#pricing" className="transition duration-300" style={{ color: "#cbd5e1" }}>
            Pricing
          </a>
          <a href="#contact" className="transition duration-300" style={{ color: "#cbd5e1" }}>
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="btn btn-secondary">
                Sign In
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} style={{ color: "#e4e4e7" }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-16 left-0 right-0 md:hidden"
            style={{ backgroundColor: "#0f1629", borderBottom: "1px solid #1e293b" }}
          >
            <div className="flex flex-col p-4 space-y-4">
              <a href="#features" className="transition duration-300" style={{ color: "#cbd5e1" }}>
                Features
              </a>
              <a href="#stats" className="transition duration-300" style={{ color: "#cbd5e1" }}>
                Capabilities
              </a>
              <a href="#pricing" className="transition duration-300" style={{ color: "#cbd5e1" }}>
                Pricing
              </a>
              <a href="#contact" className="transition duration-300" style={{ color: "#cbd5e1" }}>
                Contact
              </a>
              {!isLoggedIn && (
                <>
                  <Link href="/login" className="btn btn-secondary w-full">
                    Sign In
                  </Link>
                  <Link href="/signup" className="btn btn-primary w-full">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
