"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import Features from "@/components/landing/features"
import Stats from "@/components/landing/stats"
import Pricing from "@/components/landing/pricing"
import Contact from "@/components/landing/contact"
import Footer from "@/components/landing/footer"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("suffixsec_user")
    if (user) {
      setIsLoggedIn(true)
      router.push("/dashboard")
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  return (
    <main style={{ backgroundColor: "#0f0f1e" }}>
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
