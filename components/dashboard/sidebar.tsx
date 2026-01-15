"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, AlertTriangle, Settings, User, Bell, CreditCard, LogOut, Menu, X, Shield } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", id: "dashboard" },
    { icon: AlertTriangle, label: "Vulnerabilities", href: "/dashboard/risk", id: "risk" },
    { icon: CreditCard, label: "Plans", href: "/dashboard/plans", id: "plans" },
    { icon: User, label: "Profile", href: "/dashboard/profile", id: "profile" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications", id: "notifications" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", id: "settings" },
  ]

  const handleLogout = () => {
    localStorage.removeItem("suffixsec_user")
    router.push("/login")
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex flex-col w-64 transition-all duration-300 fixed h-screen"
        style={{
          backgroundColor: "#1a1a2e",
          borderRight: "1px solid #27272a",
        }}
      >
        <div className="p-6" style={{ borderBottom: "1px solid #27272a" }}>
          <Link href="/dashboard" className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold animate-glow"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
            >
              <Shield size={20} />
            </div>
            <div>
              <h1
                className="text-lg font-bold"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SuffixSec
              </h1>
              <p className="text-xs" style={{ color: "#9ca3af" }}>
                Dashboard
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "rgba(139, 92, 246, 0.2)" : "transparent",
                  borderLeft: isActive ? "2px solid #8b5cf6" : "2px solid transparent",
                  color: isActive ? "#c4b5fd" : "#9ca3af",
                }}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4" style={{ borderTop: "1px solid #27272a" }}>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.2)",
              border: "1px solid #ef4444",
              color: "#fca5a5",
            }}
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-white transition-all duration-200"
          style={{ backgroundColor: "#8b5cf6" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setIsOpen(false)}>
          <aside
            className="w-64 h-full flex flex-col"
            style={{ backgroundColor: "#1a1a2e", borderRight: "1px solid #27272a" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6" style={{ borderBottom: "1px solid #27272a" }}>
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
                >
                  <Shield size={20} />
                </div>
                <div>
                  <h1
                    className="text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SuffixSec
                  </h1>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>
                    Dashboard
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all"
                    style={{
                      backgroundColor: isActive ? "rgba(139, 92, 246, 0.2)" : "transparent",
                      color: isActive ? "#c4b5fd" : "#9ca3af",
                    }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="p-4" style={{ borderTop: "1px solid #27272a" }}>
              <button onClick={handleLogout} className="btn btn-secondary w-full justify-center">
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
