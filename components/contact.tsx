"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

type Theme = "aurora" | "neon"

interface ContactProps {
  theme: Theme
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h2>
          <p className="text-gray-400 text-lg">We are here to answer all your questions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, label: "Email", value: "info@suffixsec.com" },
            { icon: Phone, label: "Phone", value: "+1 (800) 555-0100" },
            { icon: MapPin, label: "Location", value: "San Francisco, California, USA" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-red-500/20 bg-gradient-to-br from-red-950/20 to-black/50 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <item.icon size={32} className="text-red-500 mx-auto mb-3" />
              </motion.div>
              <h3 className="font-bold mb-2">{item.label}</h3>
              <p className="text-gray-400">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 rounded-lg border border-red-500/20 bg-gradient-to-br from-red-950/20 to-black/50"
        >
          <div className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all"
              whileFocus={{ scale: 1.02 }}
              required
            />

            <motion.input
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all"
              whileFocus={{ scale: 1.02 }}
              required
            />

            <motion.textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all resize-none"
              whileFocus={{ scale: 1.02 }}
              required
            />

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-center"
              >
                Thank you! We will get back to you soon.
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
