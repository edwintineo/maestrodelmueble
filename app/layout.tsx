import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import ScrollToTopOnNavigate from "@/components/scroll-to-top-on-navigate" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Maestro del Mueble - Mueblista en Santiago",
  description: "Servicio profesional de mueblería en Santiago. Especialistas en cocinas, closets y muebles a medida.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
        <Toaster />
        <ScrollToTopOnNavigate /> {/* Add the new component here */}
      </body>
    </html>
  )
}
