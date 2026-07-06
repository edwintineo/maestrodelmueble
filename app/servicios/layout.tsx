import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Mueblería en Santiago | Cocinas, Closets y Muebles a Medida",
  description: "Diseño y fabricación profesional de cocinas integrales, closets a medida y muebles personalizados en Santiago de Chile. 15+ años de experiencia. Cotización gratis.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.maestrodelmueble.cl/servicios",
    siteName: "El Maestro del Mueble",
    title: "Servicios de Mueblería en Santiago | Cocinas, Closets y Muebles a Medida",
    description: "Diseño y fabricación profesional de cocinas integrales, closets a medida y muebles personalizados en Santiago de Chile. 15+ años de experiencia. Cotización gratis.",
    images: [
      {
        url: "/images/cocina-integral-melamina-negra-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Servicios de mueblería a medida en Santiago",
      },
    ],
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
