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
import JsonLd from "@/app/schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maestrodelmueble.cl"),
  title: "El Maestro del Mueble - Mueblista en Santiago",
  description: "Servicio profesional de mueblería en Santiago. Especialistas en cocinas, closets y muebles a medida con 15+ años de trayectoria.",
  keywords: [
    "mueblista santiago",
    "muebles a medida santiago",
    "cocinas integrales santiago",
    "closets a medida santiago",
    "carpintero santiago",
    "muebles de cocina santiago",
    "muebleria santiago",
    "mueblista a medida"
  ],
  authors: [{ name: "Víctor Maestro", url: "https://www.maestrodelmueble.cl" }],
  creator: "Víctor Maestro",
  publisher: "El Maestro del Mueble",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.maestrodelmueble.cl",
    siteName: "El Maestro del Mueble",
    title: "El Maestro del Mueble - Mueblista en Santiago",
    description: "Servicio profesional de mueblería en Santiago. Especialistas en cocinas, closets y muebles a medida con 15+ años de trayectoria.",
    images: [
      {
        url: "/images/modern-carpentry-workshop.png",
        width: 1200,
        height: 630,
        alt: "Taller de mueblería y carpintería El Maestro del Mueble en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Maestro del Mueble - Mueblista en Santiago",
    description: "Especialistas en cocinas, closets y muebles a medida en Santiago. Calidad artesanal y diseño personalizado.",
    images: ["/images/modern-carpentry-workshop.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const googleAdsId = "18191810958"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.maestrodelmueble.cl/#organization",
    "name": "El Maestro del Mueble",
    "url": "https://www.maestrodelmueble.cl",
    "logo": "https://www.maestrodelmueble.cl/images/logo-2.webp",
    "sameAs": [
      "https://www.facebook.com/share/1SypW3Waxq/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56922596802",
      "contactType": "customer service",
      "areaServed": "CL",
      "availableLanguage": "Spanish"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.maestrodelmueble.cl/#localbusiness",
    "name": "El Maestro del Mueble",
    "image": [
      "https://www.maestrodelmueble.cl/images/modern-carpentry-workshop.png"
    ],
    "priceRange": "$$",
    "telephone": "+56922596802",
    "email": "victor@maestrodelmueble.cl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.448889,
      "longitude": -70.669278
    },
    "url": "https://www.maestrodelmueble.cl",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.maestrodelmueble.cl/#website",
    "url": "https://www.maestrodelmueble.cl",
    "name": "El Maestro del Mueble",
    "publisher": {
      "@id": "https://www.maestrodelmueble.cl/#organization"
    }
  }

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
        <meta name="geo.region" content="CL-RM" />
        <meta name="geo.placename" content="Santiago" />
        <meta name="geo.position" content="-33.448889;-70.669278" />
        <meta name="ICBM" content="-33.448889, -70.669278" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
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
