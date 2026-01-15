"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

type Theme = "aurora" | "neon"

interface NavbarProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  isScrolled: boolean
}

export default function Navbar({ theme, onThemeChange, isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/80 border-b border-red-900" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
            >
              SuffixSec
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => onThemeChange(theme === "aurora" ? "neon" : "aurora")}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "aurora" ? "⚡ Neon" : "🌌 Aurora"}
            </motion.button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-red-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-red-500 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
