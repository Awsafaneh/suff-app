"use client"

import { Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0e27" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff, #6ee7b7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get in Touch
          </h2>
          <p className="text-xl" style={{ color: "#94a3b8" }}>
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl p-8" style={{ backgroundColor: "#0f1629", border: "1px solid #1e293b" }}>
            <Mail size={32} style={{ color: "#10b981", marginBottom: "1rem" }} />
            <h3 className="text-lg font-bold mb-2" style={{ color: "#f1f5f9" }}>
              Email
            </h3>
            <a href="mailto:support@suffixsec.com" style={{ color: "#6ee7b7" }} className="hover:text-white transition">
              support@suffixsec.com
            </a>
          </div>

          <div className="rounded-xl p-8" style={{ backgroundColor: "#0f1629", border: "1px solid #1e293b" }}>
            <Phone size={32} style={{ color: "#06b6d4", marginBottom: "1rem" }} />
            <h3 className="text-lg font-bold mb-2" style={{ color: "#f1f5f9" }}>
              Phone
            </h3>
            <a href="tel:+1234567890" style={{ color: "#22d3ee" }} className="hover:text-white transition">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#f1f5f9" }}>
            Follow Us
          </h3>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: "#25d366", color: "#ffffff" }}
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
            >
              <Instagram size={24} style={{ color: "#ffffff" }} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: "#1877f2", color: "#ffffff" }}
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
