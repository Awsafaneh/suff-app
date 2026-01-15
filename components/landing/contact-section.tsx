"use client"

import { Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #27272a" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#e4e4e7" }}>
            تواصل <span className="text-gradient">معنا</span>
          </h2>
          <p style={{ color: "#a1a1aa" }} className="text-lg">
            لأي استفسارات أو دعم، نحن هنا لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <div
            className="text-center rounded-xl p-6 transition-transform hover:scale-105"
            style={{ backgroundColor: "#0f0f1e", border: "1px solid #27272a" }}
          >
            <Phone className="mx-auto mb-4 animate-bounce" size={32} style={{ color: "#6366f1" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              الهاتف
            </h3>
            <a href="tel:+966123456789" style={{ color: "#6366f1" }} className="hover:opacity-80">
              +966 12 345 6789
            </a>
          </div>

          {/* Email */}
          <div
            className="text-center rounded-xl p-6 transition-transform hover:scale-105"
            style={{ backgroundColor: "#0f0f1e", border: "1px solid #27272a" }}
          >
            <Mail
              className="mx-auto mb-4 animate-bounce"
              size={32}
              style={{ color: "#ec4899", animationDelay: "0.2s" }}
            />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#e4e4e7" }}>
              البريد الإلكتروني
            </h3>
            <a href="mailto:info@suffixsec.com" style={{ color: "#6366f1" }} className="hover:opacity-80">
              info@suffixsec.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-xl p-6" style={{ backgroundColor: "#0f0f1e", border: "1px solid #27272a" }}>
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "#e4e4e7" }}>
            تابعنا على وسائل التواصل
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="https://wa.me/966123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group hover:animate-pulse"
            >
              <MessageCircle className="group-hover:animate-float" size={20} />
              <span className="ml-2">واتس آب</span>
            </a>
            <a
              href="https://instagram.com/suffixsec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              <Instagram className="group-hover:animate-float" size={20} />
              <span className="ml-2">إنستقرام</span>
            </a>
            <a
              href="https://facebook.com/suffixsec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              <Facebook className="group-hover:animate-float" size={20} />
              <span className="ml-2">فيسبوك</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
