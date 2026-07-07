"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Calendar, MapPin } from "lucide-react"
import JsonLd from "@/app/schema"

function ProjectDialog({ project, categories }: { project: any; categories: any }) {
  const [activeImage, setActiveImage] = useState(project.image)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Eye className="w-4 h-4 mr-2" />
          Ver Detalles
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-gray-900 border border-gray-200 shadow-2xl p-6 rounded-xl dark:bg-gray-950 dark:text-gray-50 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Columna Izquierda: Imagen Principal y Miniaturas */}
          <div className="space-y-4">
            <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50">
              <Image
                src={activeImage || "/placeholder.svg"}
                alt={`Imagen principal de ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
            {project.gallery.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {project.gallery.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-orange-500 scale-105" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna Derecha: Detalles del Proyecto */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Descripción del Trabajo:</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Especificaciones y Acabados:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-xs flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                {categories.find((cat: any) => cat.id === project.category)?.label}
              </Badge>
              <Button size="sm" asChild>
                <a href="/contacto" className="text-xs">
                  Cotizar Similar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

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
    "id": 1,
    "title": "Cocina Moderna Minimalista",
    "category": "cocinas",
    "location": "Vitacura, Santiago",
    "date": "Noviembre 2023",
    "description": "Cocina integral con isla central, cubiertas de cuarzo blanco y muebles en melamina gris grafito con tiradores perfil gola. Diseño limpio, funcional y altamente estético.",
    "features": [
      "Isla central",
      "Cuarzo blanco",
      "Melamina premium",
      "Tiradores perfil gola"
    ],
    "image": "/images/cocina-minimalista.jpg",
    "gallery": [
      "/images/cocina-minimalista.jpg"
    ]
  },
  {
    "id": 2,
    "title": "Closet de Melamina de Vestidor",
    "category": "closets",
    "location": "Las Condes, Santiago",
    "date": "Octubre 2023",
    "description": "Amplio walk-in closet diseñado a medida en melamina roble texturado. Cuenta con zapateros deslizantes, cajoneras con guías ocultas y barras de colgar iluminadas.",
    "features": [
      "Melamina premium",
      "Riel telescópico",
      "Luz LED",
      "Zapateros"
    ],
    "image": "/images/closet-melamina.jpg",
    "gallery": [
      "/images/closet-melamina.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Mesa de Comedor Rústica",
    "category": "muebles",
    "location": "Lo Barnechea, Santiago",
    "date": "Septiembre 2023",
    "description": "Mesa de comedor fabricada con madera nativa de lenga seleccionada. Cubierta vitrificada de alto tráfico y patas metálicas robustas con acabado en pintura electroestática negra.",
    "features": [
      "Madera nativa",
      "Patas metálicas",
      "Terminación vitrificada",
      "Diseño rústico"
    ],
    "image": "/images/mesa-rustica.jpg",
    "gallery": [
      "/images/mesa-rustica.jpg"
    ]
  },
  {
    "id": 4,
    "title": "Cama Nido Casita Infantil",
    "category": "closets",
    "location": "Colina, Santiago",
    "date": "Agosto 2023",
    "description": "Hermosa cama funcional infantil con diseño de casita. Fabricada en madera sólida de pino selecto y lacada con pinturas atóxicas a base de agua.",
    "features": [
      "Madera maciza",
      "Diseño infantil",
      "Laca atóxica",
      "Funcional"
    ],
    "image": "/images/cama-nido.jpg",
    "gallery": [
      "/images/cama-nido.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Vanitorio Flotante de Baño",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Julio 2023",
    "description": "Mueble vanitorio suspendido fabricado con melamina hidrófuga resistente a la humedad. Cubierta de cuarzo y cajones con sistema push-to-open.",
    "features": [
      "Melamina hidrófuga",
      "Push-to-open",
      "Cuarzo",
      "Baño"
    ],
    "image": "/images/vanitorio-flotante.jpg",
    "gallery": [
      "/images/vanitorio-flotante.jpg"
    ]
  },
  {
    "id": 6,
    "title": "Cocina Rústica de Madera",
    "category": "cocinas",
    "location": "La Reina, Santiago",
    "date": "Junio 2023",
    "description": "Cocina de estilo campestre fabricada con frentes en madera sólida de pino oregón y cubiertas de granito natural. Herrajes clásicos de fierro forjado.",
    "features": [
      "Madera maciza",
      "Pino oregón",
      "Granito natural",
      "Estilo campestre"
    ],
    "image": "/images/cocina-rustica.jpg",
    "gallery": [
      "/images/cocina-rustica.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Closet Empotrado Clásico",
    "category": "closets",
    "location": "Ñuñoa, Santiago",
    "date": "Mayo 2023",
    "description": "Mueble de clóset empotrado de piso a cielo con puertas batientes lisas en melamina blanca. Interior optimizado con repisas regulables y pantalonero.",
    "features": [
      "Melamina blanca",
      "Optimización de espacio",
      "Puertas batientes",
      "Pantalonero"
    ],
    "image": "/images/closet-empacado.jpg",
    "gallery": [
      "/images/closet-empacado.jpg"
    ]
  },
  {
    "id": 8,
    "title": "Escritorio Home Office",
    "category": "muebles",
    "location": "Santiago Centro, Santiago",
    "date": "Abril 2023",
    "description": "Estación de trabajo compacta y funcional para el hogar. Estructura metáitas minimalista y cubierta en melamina roble con pasacables integrado.",
    "features": [
      "Home office",
      "Melamina roble",
      "Pasacables",
      "Diseño compacto"
    ],
    "image": "/images/escritorio-home.jpg",
    "gallery": [
      "/images/escritorio-home.jpg"
    ]
  },
  {
    "id": 9,
    "title": "Mesa de Centro Industrial",
    "category": "muebles",
    "location": "Las Condes, Santiago",
    "date": "Marzo 2023",
    "description": "Mesa de centro para living que combina una gruesa cubierta de madera de demolición recuperada con una base geométrica de fierro negro mate.",
    "features": [
      "Madera recuperada",
      "Fierro negro",
      "Estilo industrial",
      "Living"
    ],
    "image": "/images/mesa-industrial.jpg",
    "gallery": [
      "/images/mesa-industrial.jpg"
    ]
  },
  {
    "id": 10,
    "title": "Repisa Flotante Minimalista",
    "category": "muebles",
    "location": "Vitacura, Santiago",
    "date": "Febrero 2023",
    "description": "Set de repisas flotantes con fijación oculta de alta resistencia. Acabado lacado mate, ideal para exhibición de libros y objetos decorativos.",
    "features": [
      "Fijación oculta",
      "Lacado mate",
      "Decoración",
      "Melamina premium"
    ],
    "image": "/images/repisa-flotante.jpg",
    "gallery": [
      "/images/repisa-flotante.jpg"
    ]
  },
  {
    "id": 11,
    "title": "Cocina con Isla de Granito",
    "category": "cocinas",
    "location": "Lo Barnechea, Santiago",
    "date": "Enero 2023",
    "description": "Espaciosa cocina familiar con una gran isla central revestida en granito negro absoluto. Muebles perimetrales en melamina blanca de alto brillo.",
    "features": [
      "Granito negro",
      "Alto brillo",
      "Isla central",
      "Cocina familiar"
    ],
    "image": "/images/cocina-isla.jpg",
    "gallery": [
      "/images/cocina-isla.jpg"
    ]
  },
  {
    "id": 12,
    "title": "Closet de Madera Nativa",
    "category": "closets",
    "location": "La Reina, Santiago",
    "date": "Diciembre 2022",
    "description": "Lujoso ropero de dormitorio de tres cuerpos fabricado en madera nativa de raulí. Puertas talladas a mano y cajones con ensambles tradicionales de cola de milano.",
    "features": [
      "Madera nativa",
      "Raulí",
      "Tallado a mano",
      "Cola de milano"
    ],
    "image": "/images/closet-madera.jpg",
    "gallery": [
      "/images/closet-madera.jpg"
    ]
  },
  {
    "id": 13,
    "title": "Mesa de Comedor Extensible",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Noviembre 2022",
    "description": "Mesa de comedor inteligente con sistema de extensión suave de origen alemán. Pasa de 6 a 10 comensales en segundos, fabricada en melamina texturada.",
    "features": [
      "Extensible",
      "Mecanismo alemán",
      "Melamina texturada",
      "Diseño inteligente"
    ],
    "image": "/images/mesa-extensible.jpg",
    "gallery": [
      "/images/mesa-extensible.jpg"
    ]
  },
  {
    "id": 14,
    "title": "Cama Funcional Juvenil",
    "category": "closets",
    "location": "Ñuñoa, Santiago",
    "date": "Octubre 2022",
    "description": "Solución de dormitorio juvenil optimizada con cama de una plaza y media, cajonera inferior de gran capacidad y repisas integradas en la cabecera.",
    "features": [
      "Dormitorio juvenil",
      "Optimización de espacio",
      "Cajonera integrada",
      "Melamina premium"
    ],
    "image": "/images/cama-funcional.jpg",
    "gallery": [
      "/images/cama-funcional.jpg"
    ]
  },
  {
    "id": 15,
    "title": "Vanitorio de Mármol Carrara",
    "category": "muebles",
    "location": "Las Condes, Santiago",
    "date": "Septiembre 2022",
    "description": "Elegante vanitorio para baño principal con cubierta de mármol de Carrara importado de Italia. Base en melamina gris antracita resistente al agua.",
    "features": [
      "Mármol Carrara",
      "Importado",
      "Resistente a la humedad",
      "Gris antracita"
    ],
    "image": "/images/vanitorio-marmol.jpg",
    "gallery": [
      "/images/vanitorio-marmol.jpg"
    ]
  },
  {
    "id": 16,
    "title": "Cocina Lineal Compacta",
    "category": "cocinas",
    "location": "Santiago Centro, Santiago",
    "date": "Agosto 2022",
    "description": "Diseño optimizado para departamentos. Cocina lineal de 3 metros con nichos empotrados para horno y microondas, y terminación en melamina roble.",
    "features": [
      "Cocina lineal",
      "Espacios reducidos",
      "Empotrado",
      "Melamina roble"
    ],
    "image": "/images/cocina-lineal.jpg",
    "gallery": [
      "/images/cocina-lineal.jpg"
    ]
  },
  {
    "id": 17,
    "title": "Closet Zapatero Giratorio",
    "category": "closets",
    "location": "Vitacura, Santiago",
    "date": "Julio 2022",
    "description": "Innovador clóset zapatero con sistema giratorio de 360 grados de fabricación nacional. Capacidad para 40 pares de zapatos en un espacio mínimo.",
    "features": [
      "Giratorio 360",
      "Zapatero",
      "Herraje nacional",
      "Espacio eficiente"
    ],
    "image": "/images/closet-zapatero.jpg",
    "gallery": [
      "/images/closet-zapatero.jpg"
    ]
  },
  {
    "id": 18,
    "title": "Mesa de Centro con Cajones",
    "category": "muebles",
    "location": "Ñuñoa, Santiago",
    "date": "Junio 2022",
    "description": "Mesa de centro funcional con cubierta elevable y dos cajones ocultos laterales con rieles telescópicos, ideal para guardar controles y revistas.",
    "features": [
      "Cubierta elevable",
      "Cajones ocultos",
      "Riel telescópico",
      "Funcional"
    ],
    "image": "/images/mesa-cajones.jpg",
    "gallery": [
      "/images/mesa-cajones.jpg"
    ]
  },
  {
    "id": 19,
    "title": "Repisa Hexagonal Flotante",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Mayo 2022",
    "description": "Set decorativo de 3 repisas con forma hexagonal geométrica en melamina texturada. Diseño moderno y minimalista de fácil instalación en pared.",
    "features": [
      "Geométrico",
      "Fácil instalación",
      "Decoración",
      "Melamina premium"
    ],
    "image": "/images/repisa-hexagonal.jpg",
    "gallery": [
      "/images/repisa-hexagonal.jpg"
    ]
  },
  {
    "id": 20,
    "title": "Cocina con Isla Negra y Mesa Adosada",
    "category": "cocinas",
    "location": "Ñuñoa, Santiago",
    "date": "Junio 2024",
    "description": "Espectacular cocina a medida de melamina negra mate con isla de costados espejados, vitrina iluminada para copas y mesa de comedor adosada de madera maciza.",
    "features": [
      "Isla negra",
      "Espejo",
      "Vitrina iluminada",
      "Mesa adosada"
    ],
    "image": "/images/cocina-isla-negra-mesa-adosada.jpeg",
    "gallery": [
      "/images/cocina-isla-negra-mesa-adosada.jpeg",
      "/images/cocina-isla-negra-mesa-adosada-general.jpeg"
    ]
  },
  {
    "id": 21,
    "title": "Cocina Verde Oliva e Isla Curva",
    "category": "cocinas",
    "location": "Vitacura, Santiago",
    "date": "Mayo 2024",
    "description": "Moderna cocina con muebles superiores verde oliva, inferiores de madera clara, piso espigado e isla central curva con cubierta de cuarzo blanco brillante.",
    "features": [
      "Isla curva",
      "Cuarzo blanco",
      "Verde oliva",
      "Piso espigado"
    ],
    "image": "/images/cocina-verde-oliva-isla-curva.jpeg",
    "gallery": [
      "/images/cocina-verde-oliva-isla-curva.jpeg",
      "/images/cocina-verde-oliva-isla-curva-det.jpeg"
    ]
  },
  {
    "id": 22,
    "title": "Cocina en U Bicolor y Luces LED",
    "category": "cocinas",
    "location": "Las Condes, Santiago",
    "date": "Mayo 2024",
    "description": "Funcional cocina en U optimizada con muebles inferiores de melamina negra, mesón de granito, electrodomésticos empotrados y aéreos blancos con LED.",
    "features": [
      "Cocina en U",
      "Melamina negra",
      "Luz LED",
      "Empotrado"
    ],
    "image": "/images/cocina-u-negro-blanco-led.jpeg",
    "gallery": [
      "/images/cocina-u-negro-blanco-led.jpeg",
      "/images/cocina-u-negro-blanco-led-amplio.jpeg"
    ]
  },
  {
    "id": 23,
    "title": "Cocina Moderna Azul e Isla de Cuarzo",
    "category": "cocinas",
    "location": "Lo Barnechea, Santiago",
    "date": "Abril 2024",
    "description": "Proyecto residencial con muebles de melamina azul, gran isla central con encimera de vitrocerámica y cubierta de cuarzo blanco, complementada con repisas aéreas de madera.",
    "features": [
      "Muebles azules",
      "Cuarzo blanco",
      "Repisas aéreas",
      "Tiradores ocultos"
    ],
    "image": "/images/cocina-moderna-azul-isla-cuarzo.jpeg",
    "gallery": [
      "/images/cocina-moderna-azul-isla-cuarzo.jpeg"
    ]
  },
  {
    "id": 24,
    "title": "Cocina Gris Claro y Perfiles Negros",
    "category": "cocinas",
    "location": "Ñuñoa, Santiago",
    "date": "Marzo 2024",
    "description": "Cocina en esquina minimalista fabricada con melamina gris claro texturada, tiradores perfiles negros integrados, encimera de gas y lavaplatos doble.",
    "features": [
      "Melamina gris",
      "Perfil negro",
      "Lavaplatos doble",
      "Encimera gas"
    ],
    "image": "/images/cocina-esquina-gris-claro-perfiles.jpeg",
    "gallery": [
      "/images/cocina-esquina-gris-claro-perfiles.jpeg"
    ]
  },
  {
    "id": 25,
    "title": "Cocina Lineal Gris Mate",
    "category": "cocinas",
    "location": "Santiago Centro, Santiago",
    "date": "Marzo 2024",
    "description": "Cocina lineal compacta en melamina gris mate, cubierta de cuarzo blanco y repisas superiores iluminadas con perfiles LED de encendido cálido.",
    "features": [
      "Compacta",
      "Gris mate",
      "Cuarzo blanco",
      "Perfil LED"
    ],
    "image": "/images/cocina-lineal-gris-mate-led.jpeg",
    "gallery": [
      "/images/cocina-lineal-gris-mate-led.jpeg"
    ]
  },
  {
    "id": 26,
    "title": "Cocina Verde Salvia y Tragaluces",
    "category": "cocinas",
    "location": "La Reina, Santiago",
    "date": "Febrero 2024",
    "description": "Cocina lineal de concepto abierto con gabinetes verde salvia, encimera de cuarzo blanco brillante con lavaplatos e iluminación natural mediante tragaluces.",
    "features": [
      "Verde salvia",
      "Tragaluz",
      "Luz natural",
      "Cocina lineal"
    ],
    "image": "/images/cocina-instalacion-verde-salvia-tragaluz.jpeg",
    "gallery": [
      "/images/cocina-instalacion-verde-salvia-tragaluz.jpeg"
    ]
  },
  {
    "id": 27,
    "title": "Cocina Bicolor Roble y Melamina Oscura",
    "category": "cocinas",
    "location": "Providencia, Santiago",
    "date": "Enero 2024",
    "description": "Cocina en esquina con gabinetes superiores de roble texturado natural, gabinetes inferiores oscuros, encimera de gas integrada y mesón de melamina tipo madera.",
    "features": [
      "Roble texturado",
      "Bicolor",
      "Esquina",
      "Mesón madera"
    ],
    "image": "/images/cocina-esquina-madera-clara-oscura.jpeg",
    "gallery": [
      "/images/cocina-esquina-madera-clara-oscura.jpeg",
      "/images/cocina-esquina-madera-instalacion.jpeg"
    ]
  },
  {
    "id": 28,
    "title": "Cocina Lineal en Roble y Negro Brillante",
    "category": "cocinas",
    "location": "Peñalolén, Santiago",
    "date": "Enero 2024",
    "description": "Mobiliario de cocina lineal con repisas superiores en roble natural, gabinetes inferiores negros de alto brillo, lavaplatos y lavavajillas empotrados.",
    "features": [
      "Negro brillante",
      "Roble natural",
      "Lavavajillas",
      "Lineal"
    ],
    "image": "/images/cocina-lineal-madera-negro.jpeg",
    "gallery": [
      "/images/cocina-lineal-madera-negro.jpeg"
    ]
  },
  {
    "id": 29,
    "title": "Cocina Lineal con Columnas Blancas y Madera",
    "category": "cocinas",
    "location": "Vitacura, Santiago",
    "date": "Diciembre 2023",
    "description": "Cocina moderna lineal que integra despensas de piso a cielo blancas, armarios inferiores de madera clara con horno empotrado y cubierta blanca.",
    "features": [
      "Torre despensa",
      "Blanco y madera",
      "Horno empotrado",
      "Despensa"
    ],
    "image": "/images/cocina-lineal-despensa-blanca-madera.jpeg",
    "gallery": [
      "/images/cocina-lineal-despensa-blanca-madera.jpeg"
    ]
  },
  {
    "id": 30,
    "title": "Cocina Gris Oscuro y Azulejos Blancos",
    "category": "cocinas",
    "location": "Las Condes, Santiago",
    "date": "Diciembre 2023",
    "description": "Cocina contemporánea con armarios aéreos blancos, nicho para microondas y muebles inferiores gris oscuro texturado con salpicadero de azulejos blancos.",
    "features": [
      "Gris oscuro",
      "Azulejo blanco",
      "Nicho microondas",
      "Bicolor"
    ],
    "image": "/images/cocina-blanca-gris-salpicadero-azulejos.jpeg",
    "gallery": [
      "/images/cocina-blanca-gris-salpicadero-azulejos.jpeg"
    ]
  },
  {
    "id": 31,
    "title": "Cocina en Esquina con Muebles Blancos",
    "category": "cocinas",
    "location": "Lo Barnechea, Santiago",
    "date": "Noviembre 2023",
    "description": "Mobiliario de cocina en esquina con muebles inferiores blancos, isla de preparación con cubiertas de madera nativa rojiza y hornos empotrados en obra.",
    "features": [
      "Muebles blancos",
      "Cubierta madera rojiza",
      "Isla central",
      "Empotrado"
    ],
    "image": "/images/cocina-esquina-isla-cubierta-madera.jpeg",
    "gallery": [
      "/images/cocina-esquina-isla-cubierta-madera.jpeg"
    ]
  },
  {
    "id": 32,
    "title": "Cocina Lineal Compacta Blanca y Madera",
    "category": "cocinas",
    "location": "Colina, Santiago",
    "date": "Octubre 2023",
    "description": "Cocina pequeña lineal con muebles de melamina blanca brillante, cubierta y salpicadero en madera clara, encimera de gas y campana extractora.",
    "features": [
      "Compacta",
      "Blanco brillante",
      "Madera clara",
      "Lavaplatos"
    ],
    "image": "/images/cocina-pequena-blanca-cubierta-madera.jpeg",
    "gallery": [
      "/images/cocina-pequena-blanca-cubierta-madera.jpeg"
    ]
  },
  {
    "id": 33,
    "title": "Cocina Rústica de Lujo e Isla de Canto Vivo",
    "category": "cocinas",
    "location": "Peñalolén, Santiago",
    "date": "Octubre 2023",
    "description": "Cocina rústica premium con muebles de melamina negra texturada e isla central robusta con cubierta de madera nativa con canto vivo (borde natural).",
    "features": [
      "Canto vivo",
      "Madera nativa",
      "Mueble negro",
      "Lujo rústico"
    ],
    "image": "/images/cocina-negro-isla-canto-vivo.jpeg",
    "gallery": [
      "/images/cocina-negro-isla-canto-vivo.jpeg"
    ]
  },
  {
    "id": 34,
    "title": "Vestidor Walk-In Roble y Blanco",
    "category": "closets",
    "location": "Vitacura, Santiago",
    "date": "Septiembre 2023",
    "description": "Walk-in closet amplio con estructura perimetral de roble texturado, repisas blancas regulables, cajoneras inferiores y barras para colgar ropa.",
    "features": [
      "Walk-in closet",
      "Roble y blanco",
      "Cajoneras",
      "Repisas regulables"
    ],
    "image": "/images/walkin-closet-madera-clara-blanco.jpeg",
    "gallery": [
      "/images/walkin-closet-madera-clara-blanco.jpeg"
    ]
  },
  {
    "id": 35,
    "title": "Vestidor Blanco Premium con Cajoneras",
    "category": "closets",
    "location": "Las Condes, Santiago",
    "date": "Agosto 2023",
    "description": "Walk-in closet premium en melamina blanca de alta densidad, múltiples zapateras, cajoneras con tiradores dorados y barras de colgar iluminadas.",
    "features": [
      "Tiradores dorados",
      "Melamina blanca",
      "Zapateras",
      "Esquina"
    ],
    "image": "/images/walkin-closet-blanco-tiradores-dorados.jpeg",
    "gallery": [
      "/images/walkin-closet-blanco-tiradores-dorados.jpeg",
      "/images/walkin-closet-blanco-esquina-cajoneras.jpeg"
    ]
  },
  {
    "id": 36,
    "title": "Vestidor con Cajonera Flotante y LED",
    "category": "closets",
    "location": "Lo Barnechea, Santiago",
    "date": "Julio 2023",
    "description": "Lujoso vestidor que cuenta con cajonera flotante central de madera, zócalo inferior iluminado con LED azul y colgadores superiores.",
    "features": [
      "Cajonera flotante",
      "LED azul",
      "Vestidor",
      "Mueble flotante"
    ],
    "image": "/images/walkin-closet-cajonera-flotante-led-azul.jpeg",
    "gallery": [
      "/images/walkin-closet-cajonera-flotante-led-azul.jpeg"
    ]
  },
  {
    "id": 37,
    "title": "Armario de Dormitorio Gris con TV",
    "category": "closets",
    "location": "Peñalolén, Santiago",
    "date": "Junio 2023",
    "description": "Armario empotrado para dormitorio principal con puertas correderas gris oscuro texturado, optimizado al lado de una TV colgada con iluminación trasera.",
    "features": [
      "Puertas correderas",
      "Gris oscuro",
      "Dormitorio",
      "Mueble TV"
    ],
    "image": "/images/closet-dormitorio-gris-tv.jpeg",
    "gallery": [
      "/images/closet-dormitorio-gris-tv.jpeg"
    ]
  },
  {
    "id": 38,
    "title": "Armario Closet en Madera y Blanco",
    "category": "closets",
    "location": "Ñuñoa, Santiago",
    "date": "Mayo 2023",
    "description": "Clóset empotrado de melamina color madera clara con puertas correderas, repisas internas blancas de fácil acceso y cajonera triple.",
    "features": [
      "Puertas correderas",
      "Madera y blanco",
      "Repisas internas",
      "Cajonera"
    ],
    "image": "/images/closet-madera-puertas-correderas-blanco.jpeg",
    "gallery": [
      "/images/closet-madera-puertas-correderas-blanco.jpeg"
    ]
  },
  {
    "id": 39,
    "title": "Armario Empotrado de Madera con Listones",
    "category": "closets",
    "location": "Providencia, Santiago",
    "date": "Mayo 2023",
    "description": "Armario empotrado exclusivo que combina una puerta lisa de madera clara con una puerta de listones de madera verticales, revelando repisas interiores.",
    "features": [
      "Puerta listones",
      "Madera clara",
      "Armario empotrado",
      "Diseño único"
    ],
    "image": "/images/closet-empotrado-puerta-listones.jpeg",
    "gallery": [
      "/images/closet-empotrado-puerta-listones.jpeg"
    ]
  },
  {
    "id": 40,
    "title": "Interior de Closet de Distribución Eficiente",
    "category": "closets",
    "location": "Santiago Centro, Santiago",
    "date": "Abril 2023",
    "description": "Vista interna del armado de un clóset moderno con cajoneras de melamina blanca, zapateras, barras metálicas de colgar y marco perimetral gris.",
    "features": [
      "Interior closet",
      "Cajonera blanca",
      "Zapateras",
      "Metálico"
    ],
    "image": "/images/interior-closet-blanco-gris.jpeg",
    "gallery": [
      "/images/interior-closet-blanco-gris.jpeg"
    ]
  },
  {
    "id": 41,
    "title": "Panel de TV Mural con Repisas y LED",
    "category": "muebles",
    "location": "Las Condes, Santiago",
    "date": "Marzo 2023",
    "description": "Mueble de panel para televisión en living fabricado en melamina gris mate con repisas de madera clara y retroiluminación LED cálida.",
    "features": [
      "Panel TV",
      "Luz LED",
      "Gris y madera",
      "Living"
    ],
    "image": "/images/panel-tv-gris-repisas-madera.jpeg",
    "gallery": [
      "/images/panel-tv-gris-repisas-madera.jpeg",
      "/images/panel-tv-gris-repisas-madera-det.jpeg"
    ]
  },
  {
    "id": 42,
    "title": "Panel TV en Melamina Oscura",
    "category": "muebles",
    "location": "Vitacura, Santiago",
    "date": "Marzo 2023",
    "description": "Elegante panel de TV y repisas en salón de melamina oscura texturada, con nichos superiores iluminados y amplios cajoneros inferiores.",
    "features": [
      "Melamina oscura",
      "Nichos iluminados",
      "Cajonero",
      "TV"
    ],
    "image": "/images/panel-tv-living-melamina-oscura.jpeg",
    "gallery": [
      "/images/panel-tv-living-melamina-oscura.jpeg",
      "/images/panel-tv-living-melamina-oscura-alt.jpeg"
    ]
  },
  {
    "id": 43,
    "title": "Revestimiento de Pared y Panel de Listones",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Febrero 2023",
    "description": "Panel de revestimiento de pared decorativo fabricado con listones de madera clara verticales de lenga y repisa flotante combinada.",
    "features": [
      "Listones madera",
      "Repisa flotante",
      "Revestimiento",
      "Madera lenga"
    ],
    "image": "/images/panel-listones-madera-repisa.jpeg",
    "gallery": [
      "/images/panel-listones-madera-repisa.jpeg"
    ]
  },
  {
    "id": 44,
    "title": "Librero Moderno en Esquina",
    "category": "muebles",
    "location": "Lo Barnechea, Santiago",
    "date": "Enero 2023",
    "description": "Estantería librero en esquina con puertas de color negro mate en los extremos y nichos de madera clara decorados con repisas iluminadas.",
    "features": [
      "Esquina",
      "Negro mate",
      "Nichos madera",
      "Librero"
    ],
    "image": "/images/librero-esquina-negro-nichos-madera.jpeg",
    "gallery": [
      "/images/librero-esquina-negro-nichos-madera.jpeg"
    ]
  },
  {
    "id": 45,
    "title": "Librero de Madera con Puertas Inferiores",
    "category": "muebles",
    "location": "La Reina, Santiago",
    "date": "Enero 2023",
    "description": "Gran mueble estantería y librero fabricado en madera clara con repisas abiertas para libros y dos puertas corredizas de listones inferiores.",
    "features": [
      "Librero",
      "Madera clara",
      "Puertas correderas",
      "Gran formato"
    ],
    "image": "/images/librero-grande-repisas-madera.jpeg",
    "gallery": [
      "/images/librero-grande-repisas-madera.jpeg"
    ]
  },
  {
    "id": 46,
    "title": "Librero de Showroom de Gran Escala",
    "category": "muebles",
    "location": "Las Condes, Santiago",
    "date": "Diciembre 2022",
    "description": "Estantería y librero gigante empotrado de madera clara diseñado para la exhibición de libros y adornos en un showroom comercial.",
    "features": [
      "Librero gigante",
      "Showroom",
      "Madera clara",
      "Comercial"
    ],
    "image": "/images/librero-gigante-showroom.jpeg",
    "gallery": [
      "/images/librero-gigante-showroom.jpeg"
    ]
  },
  {
    "id": 47,
    "title": "Estación Home Office Integrada Moderna",
    "category": "muebles",
    "location": "Ñuñoa, Santiago",
    "date": "Noviembre 2022",
    "description": "Escritorio integrado moderno con gabinetes superiores y laterales de melamina gris oscura texturada, nicho de trabajo de madera clara y luces LED traseras.",
    "features": [
      "Home office",
      "Gris texturado",
      "Nicho madera",
      "Retroiluminado LED"
    ],
    "image": "/images/escritorio-home-office-gris-madera-led.jpeg",
    "gallery": [
      "/images/escritorio-home-office-gris-madera-led.jpeg"
    ]
  },
  {
    "id": 48,
    "title": "Escritorio de Atención con Vidrio Templado",
    "category": "muebles",
    "location": "Lo Barnechea, Santiago",
    "date": "Octubre 2022",
    "description": "Mueble de escritorio para recepción con estructura gris, mesón de trabajo de madera clara y estante elevado de vidrio templado de seguridad.",
    "features": [
      "Recepción",
      "Vidrio templado",
      "Estructura gris",
      "Escritorio"
    ],
    "image": "/images/escritorio-recepcion-gris-madera-vidrio.jpeg",
    "gallery": [
      "/images/escritorio-recepcion-gris-madera-vidrio.jpeg"
    ]
  },
  {
    "id": 49,
    "title": "Mueble de Logia Blanco Brillante",
    "category": "muebles",
    "location": "Peñalolén, Santiago",
    "date": "Septiembre 2022",
    "description": "Mueble organizador de logia y lavadero de color blanco brillante, con repisas superiores altas, espacio optimizado para lavadora y cajoneras bases.",
    "features": [
      "Logia",
      "Blanco brillante",
      "Lavadero",
      "Organizador"
    ],
    "image": "/images/mueble-logia-lavadero-blanco.jpeg",
    "gallery": [
      "/images/mueble-logia-lavadero-blanco.jpeg"
    ]
  },
  {
    "id": 50,
    "title": "Cama Nido Funcional con Cajoneras",
    "category": "muebles",
    "location": "Colina, Santiago",
    "date": "Agosto 2022",
    "description": "Cama de altura media para dormitorio infantil con múltiples cajoneras de melamina grisácea integradas en la base y repisas laterales de guardado.",
    "features": [
      "Cama funcional",
      "Cajoneras base",
      "Dormitorio infantil",
      "Madera gris"
    ],
    "image": "/images/cama-funcional-infantil-cajoneras.jpeg",
    "gallery": [
      "/images/cama-funcional-infantil-cajoneras.jpeg"
    ]
  },
  {
    "id": 51,
    "title": "Recepción Curva de Listones y Negro",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Julio 2022",
    "description": "Imponente counter de recepción comercial curvo diseñado con listones de madera clara verticales, base de melamina negra mate, barra voladiza y luz LED.",
    "features": [
      "Counter recepción",
      "Listones madera",
      "Curvo",
      "Comercial"
    ],
    "image": "/images/counter-recepcion-listones-cubierta-negra.jpeg",
    "gallery": [
      "/images/counter-recepcion-listones-cubierta-negra.jpeg",
      "/images/counter-recepcion-listones-frente.jpeg",
      "/images/counter-recepcion-listones-taller.jpeg"
    ]
  },
  {
    "id": 52,
    "title": "Mostrador de Madera Tienda Bold",
    "category": "muebles",
    "location": "Santiago Centro, Santiago",
    "date": "Junio 2022",
    "description": "Mostrador de recepción en U de madera natural para local comercial Bold, con paneles exhibidores de madera ranurada y repisas grises internas.",
    "features": [
      "Tienda Bold",
      "Mostrador en U",
      "Madera ranurada",
      "Repisas internas"
    ],
    "image": "/images/mostrador-tienda-bold-madera.jpeg",
    "gallery": [
      "/images/mostrador-tienda-bold-madera.jpeg",
      "/images/counter-madera-tienda-u.jpeg",
      "/images/counter-madera-l-tienda.jpeg",
      "/images/counter-madera-tienda-interna.jpeg"
    ]
  },
  {
    "id": 53,
    "title": "Counter Recepción de Madera y Negro",
    "category": "muebles",
    "location": "Ñuñoa, Santiago",
    "date": "Mayo 2022",
    "description": "Módulo de recepción comercial de madera clara y laterales negros, con repisa de atención al cliente y zócalo negro.",
    "features": [
      "Counter comercial",
      "Madera y negro",
      "Atención",
      "Taller"
    ],
    "image": "/images/counter-madera-negro-taller.jpeg",
    "gallery": [
      "/images/counter-madera-negro-taller.jpeg",
      "/images/counter-madera-negro-taller-frente.jpeg"
    ]
  },
  {
    "id": 54,
    "title": "Archivador de Seguridad Azul",
    "category": "muebles",
    "location": "Santiago Centro, Santiago",
    "date": "Abril 2022",
    "description": "Mueble archivador para oficina de melamina azul oscuro empotrado bajo techo inclinado, con cerraduras con llaves y cajonera horizontal de múltiples cuerpos.",
    "features": [
      "Archivador",
      "Azul oscuro",
      "Cerradura",
      "Oficina"
    ],
    "image": "/images/archivador-oficina-azul-cerraduras.jpeg",
    "gallery": [
      "/images/archivador-oficina-azul-cerraduras.jpeg"
    ]
  },
  {
    "id": 55,
    "title": "Archivador y Cómoda Cajonera Azul",
    "category": "muebles",
    "location": "Las Condes, Santiago",
    "date": "Marzo 2022",
    "description": "Cómoda cajonera baja y armario de oficina alto acoplados de color azul grisáceo con tiradores embutidos de bronce en una oficina de pared amarilla.",
    "features": [
      "Cómoda cajonera",
      "Mueble azul",
      "Tiradores bronce",
      "Oficina"
    ],
    "image": "/images/comoda-archivador-azul-oficina.jpeg",
    "gallery": [
      "/images/comoda-archivador-azul-oficina.jpeg"
    ]
  },
  {
    "id": 56,
    "title": "Casilleros de Oficina Modernos",
    "category": "muebles",
    "location": "Providencia, Santiago",
    "date": "Febrero 2022",
    "description": "Bloque de casilleros o lockers de madera con puertas blancas de melamina numeradas de forma minimalista y cerraduras individuales de seguridad.",
    "features": [
      "Lockers",
      "Casilleros",
      "Puertas blancas",
      "Seguridad"
    ],
    "image": "/images/lockers-madera-puertas-blancas.jpeg",
    "gallery": [
      "/images/lockers-madera-puertas-blancas.jpeg"
    ]
  },
  {
    "id": 57,
    "title": "Mostrador de Atención (Estructura Trasera)",
    "category": "muebles",
    "location": "Santiago Centro, Santiago",
    "date": "Enero 2022",
    "description": "Muestra de la construcción interna de un mostrador comercial en taller, revelando la cajonera, las repisas regulables y la estructura de soporte.",
    "features": [
      "Estructura interna",
      "Taller",
      "Mueble comercial",
      "Cajones"
    ],
    "image": "/images/counter-atencion-trasera-taller.jpeg",
    "gallery": [
      "/images/counter-atencion-trasera-taller.jpeg"
    ]
  },
  {
    "id": 58,
    "title": "Pedestales de Exhibición en Taller",
    "category": "muebles",
    "location": "Colina, Santiago",
    "date": "Diciembre 2021",
    "description": "Fabricación de tótems o pedestales inclinados para pantallas interactivas de melamina blanca, listos para despacho a local comercial.",
    "features": [
      "Tótem interactivo",
      "Exhibidores",
      "Melamina blanca",
      "Fabricación"
    ],
    "image": "/images/pedestales-exhibicion-blancos.jpeg",
    "gallery": [
      "/images/pedestales-exhibicion-blancos.jpeg"
    ]
  },
  {
    "id": 59,
    "title": "Estructura Metálica de Exhibición Comercial",
    "category": "muebles",
    "location": "Vitacura, Santiago",
    "date": "Noviembre 2021",
    "description": "Mueble de exhibición tipo clóset industrial con marco de acero inoxidable y barras de colgar en tienda de retail de centro comercial.",
    "features": [
      "Acero inoxidable",
      "Industrial",
      "Exhibidor comercial",
      "Tienda retail"
    ],
    "image": "/images/exhibidor-closet-metalico-tienda.jpeg",
    "gallery": [
      "/images/exhibidor-closet-metalico-tienda.jpeg"
    ]
  },
  {
    "id": 60,
    "title": "Counter de Recepción Taller",
    "category": "muebles",
    "location": "Ñuñoa, Santiago",
    "date": "Octubre 2021",
    "description": "Mueble de counter comercial en taller, fabricado en madera clara con repisa de atención y sección lateral gris para escritorio administrativo.",
    "features": [
      "Counter taller",
      "Madera y gris",
      "Escritorio",
      "Comercial"
    ],
    "image": "/images/counter-recepcion-gris-madera-taller.jpeg",
    "gallery": [
      "/images/counter-recepcion-gris-madera-taller.jpeg"
    ]
  },
  {
    "id": 61,
    "title": "Proceso: Instalación y Armado en Terreno",
    "category": "muebles",
    "location": "Región Metropolitana, Santiago",
    "date": "Proceso de Fabricación",
    "description": "Registro de nuestros maestros e instaladores armando y calibrando muebles de cocina in situ para garantizar ajustes perfectos en muros y esquinas.",
    "features": [
      "Instalación",
      "Montaje",
      "Ajustes",
      "Cocina"
    ],
    "image": "/images/instalacion-terreno-cocina-1.jpeg",
    "gallery": [
      "/images/instalacion-terreno-cocina-1.jpeg",
      "/images/instalacion-terreno-cocina-2.jpeg"
    ]
  }
];

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

                  <ProjectDialog project={project} categories={categories} />
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
