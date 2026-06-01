import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import ScrollToTopOnNavigate from "@/components/scroll-to-top-on-navigate"
import WhatsAppChatbot from "@/components/whatsapp-chatbot"
import Script from "next/script"

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
  const googleAdsId = "18191810958"

  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-${googleAdsId}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
        <Toaster />
        <ScrollToTopOnNavigate />
        <WhatsAppChatbot />
      </body>
    </html>
  )
}
