"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("suffixsec_user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  if (!user) return null

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#0f0f1e" }}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
