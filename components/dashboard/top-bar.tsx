"use client"

import { Bell, User, Settings, Shield } from "lucide-react"

export default function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b" style={{ backgroundColor: "#0f0f1e", borderColor: "#27272a" }}>
      <div className="px-6 py-4 flex items-center justify-between md:ml-64">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}>
            <Shield size={24} style={{ color: "#8b5cf6" }} />
          </div>
          <h2 className="text-xl font-bold" style={{ color: "#e4e4e7" }}>
            Security Dashboard
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:rounded-lg transition relative" style={{ color: "#e4e4e7" }}>
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: "#ef4444" }}></span>
          </button>

          <button className="p-2 hover:rounded-lg transition" style={{ color: "#e4e4e7" }}>
            <Settings size={20} />
          </button>

          <button className="p-2 hover:rounded-lg transition" style={{ color: "#e4e4e7" }}>
            <User size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
