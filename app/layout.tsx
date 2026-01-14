import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuffixSec - Advanced Vulnerability Detection Platform",
  description:
    "Harness the power of AI to detect zero-day vulnerabilities, simulate sophisticated attacks, and protect your source code with enterprise-grade security.",
  applicationName: "SuffixSec",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f0f1e",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SuffixSec" />
      </head>
      <body
        className={`${geistSans.className} antialiased overflow-x-hidden`}
        style={{ backgroundColor: "#0f0f1e", color: "#e0e0e0" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
