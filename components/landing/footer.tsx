"use client"

import Link from "next/link"
import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0e27", borderColor: "#1e293b" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}
              >
                <Shield size={16} />
              </div>
              <span
                className="font-bold"
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
            <p style={{ color: "#94a3b8" }} className="text-sm">
              Next-generation code security platform
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "#f1f5f9" }}>
              Product
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-white transition">
                  Capabilities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "#f1f5f9" }}>
              Company
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "#f1f5f9" }}>
              Legal
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: "#1e293b", color: "#94a3b8" }}>
          <p>&copy; 2026 SuffixSec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
