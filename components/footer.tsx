"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-red-500/20 py-12 px-4 bg-gradient-to-b from-black to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-l from-red-500 to-red-600 bg-clip-text text-transparent">
              SuffixSec
            </h3>
            <p className="text-gray-400">Advanced cybersecurity for the digital world</p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Solutions"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "News"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms & Conditions", "Security"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div className="border-t border-red-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© 2026 SuffixSec. All rights reserved.</p>

          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2, color: "#ef4444" }}
                className="p-2 rounded-lg border border-red-500/20 text-gray-400 hover:border-red-500/50 transition-all"
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
