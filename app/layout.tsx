import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Raleway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] })
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "SuffixSec - Advanced Cybersecurity Platform",
  description: "Enterprise-grade vulnerability detection and security intelligence powered by AI",
  applicationName: "SuffixSec",
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ef4444",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="dark scroll-smooth">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SuffixSec" />
      </head>
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
