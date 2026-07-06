import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto y Cotización Gratis | Mueblista en Santiago - El Maestro del Mueble",
  description: "Solicita tu cotización de muebles a medida sin costo. Contáctanos por WhatsApp, teléfono o nuestro formulario. Mueblería profesional en toda la Región Metropolitana.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.maestrodelmueble.cl/contacto",
    siteName: "El Maestro del Mueble",
    title: "Contacto y Cotización Gratis | Mueblista en Santiago - El Maestro del Mueble",
    description: "Solicita tu cotización de muebles a medida sin costo. Contáctanos por WhatsApp, teléfono o nuestro formulario. Mueblería profesional en toda la Región Metropolitana.",
    images: [
      {
        url: "/images/modern-carpentry-workshop.png",
        width: 1200,
        height: 630,
        alt: "Contacto El Maestro del Mueble",
      },
    ],
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
