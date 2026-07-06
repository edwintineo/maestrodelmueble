"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Calendar, MapPin } from "lucide-react"
import JsonLd from "@/app/schema"

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Portafolio de Muebles a Medida - El Maestro del Mueble",
    "description": "Galería de proyectos reales de cocinas, closets, baños y muebles a medida fabricados en Santiago de Chile.",
    "url": "https://www.maestrodelmueble.cl/portafolio"
  }

  const categories = [
    { id: "todos", label: "Todos los Proyectos" },
    { id: "cocinas", label: "Cocinas" },
    { id: "closets", label: "Closets" },
    { id: "muebles", label: "Muebles a Medida" },
    { id: "banos", label: "Baños" },
    { id: "restauracion", label: "Restauración" },
  ]


  const projects = [
    {
      id: 1,
      title: "Cocina Moderna Minimalista",
      category: "cocinas",
      location: "Santiago",
      date: "Enero 2024",
      description:
        "Cocina integral con diseño minimalista, muebles en tonos grises y blancos, y estantes de madera natural. Equipada con electrodomésticos integrados para un acabado limpio y funcional.",
      image: "/images/COCINA-MODERNA-GRIS.jpeg",
      gallery: [
        "/images/COCINA-MODERNA-GRIS.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño minimalista", "Electrodomésticos integrados", "Estantes abiertos", "Acabados de alta calidad"],
    },
    {
      id: 2,
      title: "Closet Empotrado Funcional",
      category: "closets",
      location: "La Reina, Santiago",
      date: "Diciembre 2023",
      description:
        "Amplio closet empotrado con puertas de madera oscura, diseñado para maximizar el almacenamiento y la organización en el dormitorio principal.",
      image: "/images/CLOSET-OSCURO.jpeg",
      gallery: [
        "/images/CLOSET-OSCURO.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Puertas batientes", "Amplio espacio de almacenamiento", "Diseño a medida", "Materiales resistentes"],
    },
    {
      id: 3,
      title: "Mueble de Salón Integrado",
      category: "muebles",
      location: "Providencia, Santiago",
      date: "Noviembre 2023",
      description:
        "Mueble de salón a medida que integra espacio para TV, estantes decorativos y gabinetes de almacenamiento, con iluminación LED para un ambiente acogedor.",
      image: "/images/MUEBLE-TV-SALON.jpeg",
      gallery: [
        "/images/MUEBLE-TV-SALON.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Iluminación LED", "Almacenamiento oculto", "Diseño moderno", "Integración de TV"],
    },
    {
      id: 4,
      title: "Cama Nido Casita Infantil",
      category: "muebles",
      location: "Las Condes, Santiago",
      date: "Octubre 2023",
      description:
        "Cama nido con un divertido diseño de casita, ideal para habitaciones infantiles, incluye una cama extraíble para invitados o hermanos.",
      image: "/images/CAMA-NIDO-CASITA.jpeg",
      gallery: [
        "/images/CAMA-NIDO-CASITA.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño temático", "Cama extraíble", "Seguridad infantil", "Madera resistente"],
    },
    {
      id: 5,
      title: "Cocina Estilo Industrial",
      category: "cocinas",
      location: "Ñuñoa, Santiago",
      date: "Septiembre 2023",
      description:
        "Cocina con un toque industrial, combinando muebles bajos en tono verde, encimera empotrada y estantes abiertos con soportes metálicos.",
      image: "/images/COCINA-VERDE.jpeg",
      gallery: [
        "/images/COCINA-VERDE.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Estilo industrial", "Encimera empotrada", "Estantes abiertos", "Diseño funcional"],
    },
    {
      id: 6,
      title: "Mueble Modular Versátil",
      category: "muebles",
      location: "Santiago Centro",
      date: "Agosto 2023",
      description:
        "Mueble modular adaptable a diferentes espacios, con estantes abiertos y cajones con persianas de madera, ideal para almacenamiento y decoración.",
      image: "/images/MUEBLE-MODULAR.jpeg",
      gallery: [
        "/images/MUEBLE-MODULAR.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño modular", "Almacenamiento versátil", "Madera y melamina", "Fácil adaptación"],
    },
    {
      id: 7,
      title: "Mesa de Reunión Ejecutiva",
      category: "muebles",
      location: "Oficina Corporativa, Santiago",
      date: "Julio 2023",
      description:
        "Imponente mesa de reunión de gran tamaño, ideal para oficinas corporativas, con acabados de alta calidad y diseño ergonómico.",
      image: "/images/MESA-REUNION-OFICINA.jpeg",
      gallery: [
        "/images/MESA-REUNION-OFICINA.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Gran capacidad", "Acabados premium", "Diseño robusto", "Ideal para corporativos"],
    },
    {
      id: 8,
      title: "Cama Infantil Coche de Carreras",
      category: "muebles",
      location: "Vitacura, Santiago",
      date: "Junio 2023",
      description:
        "Divertida cama con diseño de coche de carreras, perfecta para los pequeños amantes de la velocidad, con detalles realistas y estructura segura.",
      image: "/images/CAMA-CARS.jpeg",
      gallery: [
        "/images/CAMA-CARS.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño temático", "Seguridad infantil", "Colores vibrantes", "Fácil montaje"],
    },
    {
      id: 9,
      title: "Mueble de Recepción Curvo",
      category: "muebles",
      location: "Clínica Dental, Santiago",
      date: "Mayo 2023",
      description:
        "Elegante mueble de recepción con diseño curvo, ideal para clínicas o consultorios, que combina funcionalidad y estética profesional.",
      image: "/images/MUEBLE-RECEPCION.jpeg",
      gallery: [
        "/images/MUEBLE-RECEPCION.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño curvo", "Cajonera integrada", "Acabado profesional", "Espacio optimizado"],
    },
    {
      id: 10,
      title: "Mesa de Comedor Diseño Único",
      category: "muebles",
      location: "Casa Particular, Santiago",
      date: "Abril 2023",
      description:
        "Mesa de comedor redonda de madera con una base geométrica distintiva, ideal para espacios modernos y con personalidad.",
      image: "/images/MESA-REDONDA-MADERA.jpeg",
      gallery: [
        "/images/MESA-REDONDA-MADERA.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño exclusivo", "Madera maciza", "Base geométrica", "Acabado pulido"],
    },
    // New projects from the second batch of images
    {
      id: 11,
      title: "Cocina Moderna con Detalles Negros",
      category: "cocinas",
      location: "Vitacura, Santiago",
      date: "Marzo 2024",
      description:
        "Cocina contemporánea con gabinetes inferiores en negro brillante, encimera de madera natural y electrodomésticos integrados, ofreciendo un contraste elegante y funcional.",
      image: "/images/MUEBLE-COCINA-4.jpeg",
      gallery: [
        "/images/MUEBLE-COCINA-4.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Gabinetes negros", "Encimera de madera", "Diseño moderno", "Electrodomésticos integrados"],
    },
    {
      id: 12,
      title: "Cocina Blanca con Lavadora Integrada",
      category: "cocinas",
      location: "Providencia, Santiago",
      date: "Febrero 2024",
      description:
        "Cocina funcional con gabinetes blancos, encimera de madera y espacio optimizado para integrar una lavadora, ideal para departamentos pequeños.",
      image: "/images/MUEBLE-COCINA-5.jpeg",
      gallery: [
        "/images/MUEBLE-COCINA-5.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Optimización de espacio", "Lavadora integrada", "Diseño luminoso", "Encimera de madera"],
    },
    {
      id: 14,
      title: "Mueble de TV Flotante con Almacenamiento",
      category: "muebles",
      location: "Las Condes, Santiago",
      date: "Enero 2024",
      description:
        "Mueble de TV moderno con diseño flotante, gabinetes inferiores con ruedas para fácil movilidad y un marco superior que enmarca la pantalla.",
      image: "/images/MUEBLE-TV-2.jpeg",
      gallery: [
        "/images/MUEBLE-TV-2.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño flotante", "Almacenamiento con ruedas", "Estilo minimalista", "Marco para TV"],
    },
    {
      id: 15,
      title: "Mostrador de Recepción Iluminado",
      category: "muebles",
      location: "Oficina Comercial, Santiago",
      date: "Febrero 2024",
      description:
        "Impresionante mostrador de recepción con diseño de listones verticales y retroiluminación LED, creando un ambiente acogedor y profesional.",
      image: "/images/MUEBLE-CAJA-RECEPCION.jpeg",
      gallery: [
        "/images/MUEBLE-CAJA-RECEPCION.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Iluminación LED", "Diseño moderno", "Acabados de madera", "Ideal para recepciones"],
    },
    {
      id: 16,
      title: "Mueble de Pared para Sala de Estar",
      category: "muebles",
      location: "Ñuñoa, Santiago",
      date: "Marzo 2024",
      description:
        "Amplio mueble de pared que combina gabinetes inferiores y superiores con estantes abiertos, ideal para organizar y decorar la sala de estar.",
      image: "/images/MUEBLE-TV-PARED.jpeg",
      gallery: [
        "/images/MUEBLE-TV-PARED.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Gran capacidad de almacenamiento", "Diseño integrado", "Acabados en madera", "Espacio para TV"],
    },
    {
      id: 19,
      title: "Barra de Café Comercial",
      category: "muebles",
      location: "Cafetería, Santiago",
      date: "Enero 2024",
      description:
        "Imponente barra de café diseñada a medida para un espacio comercial, con un acabado de listones de madera que aporta calidez y estilo.",
      image: "/images/MUEBLE-BARRA-CAFE.jpeg",
      gallery: [
        "/images/MUEBLE-BARRA-CAFE.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: ["Diseño comercial", "Madera natural", "Funcionalidad", "Estilo moderno"],
    },
    {
      id: 20,
      title: "Cocina Integral Melamina Negra",
      category: "cocinas",
      location: "Ñuñoa, Santiago",
      date: "Abril 2024",
      description:
        "Moderna cocina integral fabricada con melamina negra mate de alta resistencia, tiradores perfil oculto y herrajes de cierre suave para un acabado elegante.",
      image: "/images/cocina-integral-melamina-negra-1.jpeg",
      gallery: [
        "/images/cocina-integral-melamina-negra-1.jpeg",
        "/images/cocina-integral-melamina-negra-2.jpeg"
      ],
      features: ["Melamina negra mate", "Tiradores perfil oculto", "Cubierta resistente", "Cierre suave"],
    },
    {
      id: 21,
      title: "Cocina con Isla y Cubierta de Cuarzo",
      category: "cocinas",
      location: "Las Condes, Santiago",
      date: "Mayo 2024",
      description:
        "Espaciosa cocina equipada con una isla central y cubiertas de cuarzo blanco brillante, ofreciendo una superficie amplia, higiénica y duradera.",
      image: "/images/cocina-isla-cubierta-cuarzo-1.jpeg",
      gallery: [
        "/images/cocina-isla-cubierta-cuarzo-1.jpeg",
        "/images/cocina-isla-cubierta-cuarzo-2.jpeg"
      ],
      features: ["Isla central amplia", "Cubierta de cuarzo blanco", "Gabinetes integrados", "Luz LED funcional"],
    },
    {
      id: 22,
      title: "Mueble Aéreo de Cocina en Roble",
      category: "cocinas",
      location: "Lo Barnechea, Santiago",
      date: "Junio 2024",
      description:
        "Muebles aéreos de cocina fabricados en madera sólida de roble natural, combinando calidez rústica con un diseño funcional de fácil acceso.",
      image: "/images/mueble-cocina-aereo-roble-1.jpeg",
      gallery: [
        "/images/mueble-cocina-aereo-roble-1.jpeg",
        "/images/mueble-cocina-aereo-roble-2.jpeg"
      ],
      features: ["Madera de roble natural", "Gran espacio superior", "Terminación hidrófuga", "Diseño rústico moderno"],
    },
    {
      id: 23,
      title: "Closet de Dormitorio en Melamina",
      category: "closets",
      location: "Santiago Centro",
      date: "Marzo 2024",
      description:
        "Closet empotrado diseñado a medida en melamina de alta densidad, optimizando el espacio con cajoneras, zapateros y barras reforzadas.",
      image: "/images/closet-dormitorio-melamina-1.jpeg",
      gallery: [
        "/images/closet-dormitorio-melamina-1.jpeg",
        "/images/closet-dormitorio-melamina-2.jpeg"
      ],
      features: ["Divisiones funcionales", "Cajoneras reforzadas", "Barras cromadas", "Color melamina texturizada"],
    },
    {
      id: 24,
      title: "Walk-In Closet con Iluminación LED",
      category: "closets",
      location: "La Reina, Santiago",
      date: "Mayo 2024",
      description:
        "Elegante vestidor o walk-in closet sin puertas, con estructura autoportante y sistema de iluminación LED indirecta para una óptima visualización.",
      image: "/images/walkin-closet-vestidor-led-1.jpeg",
      gallery: [
        "/images/walkin-closet-vestidor-led-1.jpeg",
        "/images/walkin-closet-vestidor-led-2.jpeg"
      ],
      features: ["Iluminación LED indirecta", "Estructura abierta", "Repisas ajustables", "Zapateros dedicados"],
    },
    {
      id: 25,
      title: "Mueble de Baño con Espejo LED",
      category: "banos",
      location: "Vitacura, Santiago",
      date: "Junio 2024",
      description:
        "Vanitorio de baño a medida con cajones de gran capacidad y un espejo retroiluminado con luces LED para crear un ambiente moderno.",
      image: "/images/mueble-bano-espejo-led-1.jpeg",
      gallery: [
        "/images/mueble-bano-espejo-led-1.jpeg",
        "/images/mueble-bano-espejo-led-2.jpeg"
      ],
      features: ["Espejo con luz LED integrada", "Apto para humedad", "Lavamanos empotrado", "Tiradores minimalistas"],
    },
    {
      id: 26,
      title: "Vanitorio Suspendido de Baño",
      category: "banos",
      location: "Providencia, Santiago",
      date: "Julio 2024",
      description:
        "Vanitorio flotante o suspendido para baño principal, fabricado en madera nativa protegida contra la humedad y con cajoneras ocultas.",
      image: "/images/vanitorio-bano-suspendido-1.jpeg",
      gallery: [
        "/images/vanitorio-bano-suspendido-1.jpeg",
        "/images/vanitorio-bano-suspendido-2.jpeg"
      ],
      features: ["Diseño flotante suspendido", "Madera nativa protegida", "Cajoneras amplias", "Fácil limpieza inferior"],
    },
    {
      id: 27,
      title: "Rack de TV Living Diseño",
      category: "muebles",
      location: "Macul, Santiago",
      date: "Abril 2024",
      description:
        "Mueble modular para centro de entretenimiento, que combina paneles de madera clara con gabinetes gris cemento y repisas iluminadas con LED.",
      image: "/images/rack-tv-living-diseno-1.jpeg",
      gallery: [
        "/images/rack-tv-living-diseno-1.jpeg",
        "/images/rack-tv-living-diseno-2.jpeg"
      ],
      features: ["Paneles de madera clara", "Iluminación LED integrada", "Gabinetes gris cemento", "Gestión de cables oculta"],
    },
    {
      id: 28,
      title: "Mueble Bar con Cava Iluminada",
      category: "muebles",
      location: "La Florida, Santiago",
      date: "Junio 2024",
      description:
        "Imponente mueble bar para living con compartimentos para copas, botelleros y una cava de vinos iluminada que resalta los detalles del acabado.",
      image: "/images/mueble-bar-cava-iluminada-1.jpeg",
      gallery: [
        "/images/mueble-bar-cava-iluminada-1.jpeg",
        "/images/mueble-bar-cava-iluminada-2.jpeg"
      ],
      features: ["Cava retroiluminada", "Soportes para copas", "Detalles en madera rústica", "Puertas de vidrio"],
    },
    {
      id: 29,
      title: "Mesa de Comedor en Madera Nativa",
      category: "muebles",
      location: "Peñalolén, Santiago",
      date: "Enero 2024",
      description:
        "Mesa de comedor de gran tamaño confeccionada con tablones sólidos de madera nativa seleccionada y patas metálicas robustas con terminación industrial.",
      image: "/images/mesa-comedor-madera-nativa-1.jpeg",
      gallery: [
        "/images/mesa-comedor-madera-nativa-1.jpeg",
        "/images/mesa-comedor-madera-nativa-2.jpeg",
        "/images/mesa-comedor-madera-nativa-3.jpeg"
      ],
      features: ["Madera nativa sólida", "Terminación vitrificada", "Base metálica robusta", "Capacidad para 8 personas"],
    },
    {
      id: 30,
      title: "Escritorio Home Office",
      category: "muebles",
      location: "Las Condes, Santiago",
      date: "Febrero 2024",
      description:
        "Estación de trabajo ergonómica para oficina en casa, combinando una cubierta resistente en tono madera y gabinetes organizadores en gris oscuro.",
      image: "/images/escritorio-home-office-1.jpeg",
      gallery: [
        "/images/escritorio-home-office-1.jpeg",
        "/images/escritorio-home-office-2.jpeg"
      ],
      features: ["Cubierta resistente", "Cajoneras organizadoras", "Diseño ergonómico", "Estructura reforzada"],
    },
  ]

  const filteredProjects =
    selectedCategory === "todos" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <main>
      <JsonLd data={gallerySchema} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portafolio de Muebles a Medida en Santiago</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados y la calidad que caracteriza cada uno de nuestros
            trabajos.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Proyecto de mueblería: ${project.title} en Santiago - El Maestro del Mueble`}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-orange-500 text-white">
                      {categories.find((cat) => cat.id === project.category)?.label}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 2} más
                      </Badge>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="grid grid-cols-1 gap-4 mb-4">
                            {project.gallery.map((image, index) => (
                              <Image
                                key={index}
                                src={image || "/placeholder.svg"}
                                alt={`Detalle de ${project.title} - Foto ${index + 1} - El Maestro del Mueble`}
                                width={600}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Ubicación:</h4>
                            <p className="text-gray-600">{project.location}</p>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Fecha de Finalización:</h4>
                            <p className="text-gray-600">{project.date}</p>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Descripción:</h4>
                            <p className="text-gray-600">{project.description}</p>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Características:</h4>
                            <ul className="space-y-1">
                              {project.features.map((feature, index) => (
                                <li key={index} className="text-gray-600 flex items-center">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Números</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-gray-600">Servicio Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Te Gustó Algún Proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Podemos crear algo similar o completamente personalizado para ti
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contacto">Solicitar Cotización</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
