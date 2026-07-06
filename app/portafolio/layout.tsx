import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio de Muebles a Medida en Santiago | El Maestro del Mueble",
  description: "Galería de proyectos realizados de mueblería y carpintería: cocinas modernas, closets empotrados, muebles de TV y más. Proyectos reales en Santiago, Las Condes, Providencia y La Reina.",
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.maestrodelmueble.cl/portafolio",
    siteName: "El Maestro del Mueble",
    title: "Portafolio de Muebles a Medida en Santiago | El Maestro del Mueble",
    description: "Galería de proyectos realizados de mueblería y carpintería: cocinas modernas, closets empotrados, muebles de TV y más. Proyectos reales en Santiago, Las Condes, Providencia y La Reina.",
    images: [
      {
        url: "/images/cocina-isla-cubierta-cuarzo-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portafolio de proyectos de El Maestro del Mueble",
      },
    ],
  },
}

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
