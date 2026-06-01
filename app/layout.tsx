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
        {/* Google tag (gtag.js) tradicional asíncrono para indexación y validación estática de Google Ads */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-${googleAdsId}`}></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);}
              window.gtag('js', new Date());
              window.gtag('config', 'AW-${googleAdsId}');

              window.gtag_report_conversion = function(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'conversion', {
                      'send_to': 'AW-18191810958/lixiCM3t-bYcEl6DxOJD',
                      'value': 1.0,
                      'currency': 'CLP',
                      'event_callback': callback
                  });
                }
                return false;
              };
            `
          }}
        />
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
