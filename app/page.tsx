"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import Timeline from "@/components/timeline"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [theme, setTheme] = useState<"aurora" | "neon">("aurora")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Aurora Theme */}
        {theme === "aurora" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 opacity-100" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-2xl" />
          </>
        )}

        {/* Neon Theme */}
        {theme === "neon" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black opacity-100" />
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-red-500/15 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-red-700/10 rounded-full blur-2xl" />
          </>
        )}

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <Navbar theme={theme} onThemeChange={setTheme} isScrolled={isScrolled} />
      <Hero theme={theme} />
      <SocialProof />
      <Features theme={theme} />
      <Solutions theme={theme} />
      <Timeline theme={theme} />
      <Pricing theme={theme} />
      <Testimonials theme={theme} />
      <FAQ theme={theme} />
      <Contact theme={theme} />
      <Footer />
    </motion.div>
  )
}
