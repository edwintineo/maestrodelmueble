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
        "/images/detalle-bisagra-cierre-suave.jpeg",
        "/images/detalle-griferia-cocina.jpeg",
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
        "/images/detalle-tirador-mueble.jpeg",
        "/images/detalle-cajonera-rieles-1.jpeg",
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
        "/images/detalle-cocina-led-2.jpeg",
        "/images/detalle-cajonera-rieles-2.jpeg",
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
        "/images/detalle-tirador-mueble.jpeg",
        "/images/detalle-cajonera-rieles-1.jpeg",
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
        "/images/detalle-despensa-extraible-1.jpeg",
        "/images/detalle-despensa-extraible-2.jpeg",
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
        "/images/detalle-tirador-mueble.jpeg",
        "/images/detalle-cajonera-rieles-2.jpeg",
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
        "/images/detalle-tirador-mueble.jpeg",
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
        "/images/detalle-tirador-mueble.jpeg",
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
      ],
      features: ["Diseño exclusivo", "Madera maciza", "Base geométrica", "Acabado pulido"],
    },
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
        "/images/detalle-cocina-led-1.jpeg",
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
    {
      id: 31,
      title: "Cocina Moderna Gris con Luz LED",
      category: "cocinas",
      location: "Las Condes, Santiago",
      date: "Enero 2024",
      description:
        "Cocina moderna con un elegante acabado en gris oscuro, cubierta blanca y luces LED empotradas bajo los muebles aéreos para una iluminación perfecta.",
      image: "/images/cocina-moderna-gris-luz-led.jpeg",
      gallery: [
        "/images/cocina-moderna-gris-luz-led.jpeg",
        "/images/detalle-cocina-led-1.jpeg"
      ],
      features: ["Luz LED bajo aéreos", "Encimera a gas", "Cubierta blanca", "Tonos grises mate"],
    },
    {
      id: 32,
      title: "Mueble Bar Moderno con Listones",
      category: "muebles",
      location: "Providencia, Santiago",
      date: "Febrero 2024",
      description:
        "Mueble bar comercial o residencial con frente de listones de madera clara y retroiluminación en la estantería, ideal para exhibición de copas.",
      image: "/images/mueble-bar-listones-madera-clara.jpeg",
      gallery: [
        "/images/mueble-bar-listones-madera-clara.jpeg",
        "/images/mueble-bar-taller-rustico.jpeg"
      ],
      features: ["Listones verticales", "Iluminación cálida", "Revestimiento de madera", "Diseño de bar"],
    },
    {
      id: 33,
      title: "Cocina Base Negra y Aéreos Nogal",
      category: "cocinas",
      location: "Vitacura, Santiago",
      date: "Marzo 2024",
      description:
        "Moderna cocina bicolor que combina gabinetes inferiores en negro brillante con muebles aéreos en tono nogal e iluminación LED integrada.",
      image: "/images/cocina-base-negra-aereos-nogal.jpeg",
      gallery: [
        "/images/cocina-base-negra-aereos-nogal.jpeg",
      ],
      features: ["Aéreos nogal", "Base negra brillante", "Lavaplatos empotrado", "Iluminación integrada"],
    },
    {
      id: 34,
      title: "Mostrador Comercial Tienda Vans",
      category: "muebles",
      location: "Mall Santiago, Santiago",
      date: "Abril 2024",
      description:
        "Gran mostrador comercial en forma de U fabricado para una tienda de zapatillas, combinando madera clara y paneles grises con estanterías internas.",
      image: "/images/mostrador-comercial-tienda-vans.jpeg",
      gallery: [
        "/images/mostrador-comercial-tienda-vans.jpeg",
      ],
      features: ["Diseño en U", "Madera y gris", "Mobiliario comercial", "Estanterías internas"],
    },
    {
      id: 35,
      title: "Walk-In Closet Iluminación Roble",
      category: "closets",
      location: "Lo Barnechea, Santiago",
      date: "Mayo 2024",
      description:
        "Walk-in closet o vestidor diseñado a medida en melamina roble texturizada, con cajoneras suspendidas, zapateros e iluminación LED cálida.",
      image: "/images/walkin-closet-iluminacion-led-roble.jpeg",
      gallery: [
        "/images/walkin-closet-iluminacion-led-roble.jpeg",
      ],
      features: ["Melamina roble", "Cajoneras suspendidas", "Iluminación LED", "Estructura abierta"],
    },
    {
      id: 36,
      title: "Cocina Lineal Gris Claro y Madera",
      category: "cocinas",
      location: "Santiago Centro",
      date: "Marzo 2024",
      description:
        "Diseño de cocina lineal para departamento, maximizando el espacio con gabinetes gris claro, encimeras de madera y baldosa hidráulica decorativa.",
      image: "/images/cocina-lineal-gris-claro-madera.jpeg",
      gallery: [
        "/images/cocina-lineal-gris-claro-madera.jpeg",
      ],
      features: ["Diseño lineal", "Muebles gris claro", "Encimera de madera", "Piso decorativo"],
    },
    {
      id: 37,
      title: "Mueble Bajo de Cocina en Esquina",
      category: "cocinas",
      location: "Ñuñoa, Santiago",
      date: "Abril 2024",
      description:
        "Mueble bajo de cocina en esquina con perfilería negra y cajones de gran profundidad, optimizando los ángulos difíciles del espacio.",
      image: "/images/mueble-bajo-cocina-esquina.jpeg",
      gallery: [
        "/images/mueble-bajo-cocina-esquina.jpeg",
      ],
      features: ["Esquinero funcional", "Perfilería negra", "Cajones profundos", "Cubierta blanca"],
    },
    {
      id: 38,
      title: "Cocina Moderna Isla Curva",
      category: "cocinas",
      location: "Las Condes, Santiago",
      date: "Mayo 2024",
      description:
        "Cocina contemporánea de concepto abierto, destacando una gran isla central curva con cubierta de mármol y elegantes muebles verdes superiores.",
      image: "/images/cocina-moderna-isla-curva-verde.jpeg",
      gallery: [
        "/images/cocina-moderna-isla-curva-verde.jpeg",
      ],
      features: ["Isla curva", "Cubierta mármol", "Muebles verdes", "Concepto abierto"],
    },
    {
      id: 39,
      title: "Mueble Bar y Cava Buffet",
      category: "muebles",
      location: "Colina, Santiago",
      date: "Junio 2024",
      description:
        "Mueble bar y cava de vinos tipo buffet fabricado en madera nativa robusta con compartimentos internos oscuros para botellas y cajoneras.",
      image: "/images/mueble-bar-cava-buffet-rustico.jpeg",
      gallery: [
        "/images/mueble-bar-cava-buffet-rustico.jpeg",
      ],
      features: ["Madera nativa", "Compartimento botellas", "Estilo buffet", "Cajoneras internas"],
    },
    {
      id: 40,
      title: "Closet Alto Puertas de Listones",
      category: "closets",
      location: "La Reina, Santiago",
      date: "Marzo 2024",
      description:
        "Closet empotrado de gran altura con puertas correderas de listones de madera, aportando una textura natural única al dormitorio.",
      image: "/images/closet-alto-puertas-listones-madera.jpeg",
      gallery: [
        "/images/closet-alto-puertas-listones-madera.jpeg",
      ],
      features: ["Puertas de listones", "Gran altura", "Repisas internas", "Diseño empotrado"],
    },
    {
      id: 41,
      title: "Cocina Isla Cubierta Madera Nativa",
      category: "cocinas",
      location: "Peñalolén, Santiago",
      date: "Junio 2024",
      description:
        "Cocina en L con isla central, equipada con cubiertas de madera nativa rojiza vitrificada y muebles inferiores en blanco brillante.",
      image: "/images/cocina-isla-cubierta-madera-nativa.jpeg",
      gallery: [
        "/images/cocina-isla-cubierta-madera-nativa.jpeg",
      ],
      features: ["Isla central", "Cubierta madera nativa", "Base blanca", "Horno empotrado"],
    },
    {
      id: 42,
      title: "Cocina Pequeña Blanca Lineal",
      category: "cocinas",
      location: "Estación Central, Santiago",
      date: "Julio 2024",
      description:
        "Cocina lineal de tamaño compacto ideal para departamentos, diseñada en color blanco con cubiertas de madera clara para mayor luminosidad.",
      image: "/images/cocina-pequena-blanca-lineal.jpeg",
      gallery: [
        "/images/cocina-pequena-blanca-lineal.jpeg",
      ],
      features: ["Tamaño compacto", "Muebles blancos", "Encimera integrada", "Optimización"],
    },
    {
      id: 43,
      title: "Rack TV Madera y Negro",
      category: "muebles",
      location: "La Florida, Santiago",
      date: "Abril 2024",
      description:
        "Rack de TV de diseño flotante o bajo, combinando estructura robusta de madera nativa con gabinetes y frentes en negro mate.",
      image: "/images/rack-tv-taller-madera-negro.jpeg",
      gallery: [
        "/images/rack-tv-taller-madera-negro.jpeg",
      ],
      features: ["Madera y negro", "Diseño flotante", "Espacio multimedia", "Tiradores ocultos"],
    },
    {
      id: 44,
      title: "Closet Vestidor Abierto Industrial",
      category: "closets",
      location: "Santiago Centro",
      date: "Mayo 2024",
      description:
        "Vestidor abierto sin puertas con estructura de melamina gris acero y barras de metal cromado, ideal para un estilo industrial moderno.",
      image: "/images/closet-vestidor-abierto-industrial.jpeg",
      gallery: [
        "/images/closet-vestidor-abierto-industrial.jpeg",
      ],
      features: ["Estilo industrial", "Sin puertas", "Melamina gris acero", "Barras reforzadas"],
    },
    {
      id: 45,
      title: "Cocina L Verde Salvia y Beige",
      category: "cocinas",
      location: "Vitacura, Santiago",
      date: "Junio 2024",
      description:
        "Preciosa cocina en L combinando gabinetes verde salvia y beige, repisas de madera iluminadas y piso de baldosas decorativas.",
      image: "/images/cocina-l-verde-salvia-beige.jpeg",
      gallery: [
        "/images/cocina-l-verde-salvia-beige.jpeg",
      ],
      features: ["Verde salvia", "Repisas iluminadas", "Cubierta de madera", "Piso hidráulico"],
    },
    {
      id: 46,
      title: "Vestidor Blanco de Esquina",
      category: "closets",
      location: "Las Condes, Santiago",
      date: "Julio 2024",
      description:
        "Walk-in closet blanco en forma de L diseñado para esquinas complicadas, incorporando cajoneras con tiradores dorados elegantes.",
      image: "/images/vestidor-walkin-closet-blanco-esquina.jpeg",
      gallery: [
        "/images/vestidor-walkin-closet-blanco-esquina.jpeg",
      ],
      features: ["Diseño en esquina", "Melamina blanca", "Tiradores dorados", "Cajoneras amplias"],
    },
    {
      id: 47,
      title: "Mostrador Comercial en U",
      category: "muebles",
      location: "Centro Comercial, Santiago",
      date: "Mayo 2024",
      description:
        "Mostrador curvo o en forma de U de gran tamaño para tienda de retail, combinando madera noble con zócalos grises de alto tráfico.",
      image: "/images/mostrador-comercial-forma-u.jpeg",
      gallery: [
        "/images/mostrador-comercial-forma-u.jpeg",
      ],
      features: ["Forma de U", "Uso comercial", "Alto tráfico", "Repisas traseras"],
    },
    {
      id: 48,
      title: "Estantería Exhibidora Showroom",
      category: "muebles",
      location: "Local Comercial, Providencia",
      date: "Junio 2024",
      description:
        "Gran estantería o mueble exhibidor que cubre una pared completa, diseñada en madera clara con múltiples nichos de exhibición.",
      image: "/images/estanteria-exhibidor-pared-showroom.jpeg",
      gallery: [
        "/images/estanteria-exhibidor-pared-showroom.jpeg",
      ],
      features: ["Pared completa", "Exhibidor de nichos", "Madera clara", "Fácil montaje"],
    },
    {
      id: 49,
      title: "Closet Abierto Blanco Dormitorio",
      category: "closets",
      location: "San Miguel, Santiago",
      date: "Abril 2024",
      description:
        "Closet abierto empotrado en color blanco con marco gris oscuro, barras y cajones telescópicos para optimizar el espacio del dormitorio.",
      image: "/images/closet-abierto-blanco-dormitorio.jpeg",
      gallery: [
        "/images/closet-abierto-blanco-dormitorio.jpeg",
      ],
      features: ["Estructura blanca", "Marco gris oscuro", "Cajones telescópicos", "Optimizado"],
    },
    {
      id: 50,
      title: "Cocina Isla Oscura y Vitrina",
      category: "cocinas",
      location: "Lo Barnechea, Santiago",
      date: "Mayo 2024",
      description:
        "Espectacular cocina con isla central en negro mate, vitrina de copas iluminada con luz cálida y aéreos en roble natural.",
      image: "/images/cocina-moderna-isla-oscura-vitrina.jpeg",
      gallery: [
        "/images/cocina-moderna-isla-oscura-vitrina.jpeg",
      ],
      features: ["Isla negra mate", "Vitrina iluminada", "Aéreos roble", "Estilo moderno"],
    },
    {
      id: 51,
      title: "Mostrador Comercial Tienda Ropa",
      category: "muebles",
      location: "Providencia, Santiago",
      date: "Mayo 2024",
      description:
        "Mostrador largo para caja y atención al cliente en tienda de ropa, combinando melamina gris y cubiertas de madera nativa.",
      image: "/images/mostrador-comercial-tienda-ropa.jpeg",
      gallery: [
        "/images/mostrador-comercial-tienda-ropa.jpeg",
      ],
      features: ["Mostrador largo", "Uso comercial", "Cubierta madera", "Cajoneras traseras"],
    },
    {
      id: 52,
      title: "Mueble Recepción Listones Blancos",
      category: "muebles",
      location: "Oficina Corporativa, Ñuñoa",
      date: "Junio 2024",
      description:
        "Mostrador de recepción para oficina con panel frontal de listones verticales blancos y cubierta lateral gris para atención.",
      image: "/images/mueble-recepcion-listones-blancos.jpeg",
      gallery: [
        "/images/mueble-recepcion-listones-blancos.jpeg",
      ],
      features: ["Listones blancos", "Recepción moderna", "Cubierta gris", "Taller a medida"],
    },
    {
      id: 53,
      title: "Cocina Torre Despensa Blanca",
      category: "cocinas",
      location: "San Joaquín, Santiago",
      date: "Julio 2024",
      description:
        "Cocina moderna con una gran torre de despensa blanca que integra microondas y horno, y muebles bajos en tono madera natural.",
      image: "/images/cocina-torre-despensa-blanca.jpeg",
      gallery: [
        "/images/cocina-torre-despensa-blanca.jpeg",
      ],
      features: ["Torre de despensa", "Electrodomésticos empotrados", "Base madera", "Despensa blanca"],
    },
    {
      id: 54,
      title: "Cocina Bicolor Blanco y Azul",
      category: "cocinas",
      location: "La Reina, Santiago",
      date: "Julio 2024",
      description:
        "Llamativa cocina bicolor con muebles aéreos blancos para mayor amplitud y muebles base en color azul petróleo con encimera integrada.",
      image: "/images/cocina-bicolor-blanco-azul.jpeg",
      gallery: [
        "/images/cocina-bicolor-blanco-azul.jpeg",
      ],
      features: ["Bicolor", "Azul petróleo", "Aéreos blancos", "Diseño contemporáneo"],
    },
    {
      id: 55,
      title: "Escritorio Rack Living Paneles LED",
      category: "muebles",
      location: "Las Condes, Santiago",
      date: "Abril 2024",
      description:
        "Mueble de escritorio multifuncional integrado al rack de TV del living, con paneles de madera clara retroiluminados con tiras LED.",
      image: "/images/escritorio-rack-living-paneles-led.jpeg",
      gallery: [
        "/images/escritorio-rack-living-paneles-led.jpeg",
      ],
      features: ["Escritorio integrado", "Paneles retroiluminados", "Luces LED", "Gabinetes flotantes"],
    },
    {
      id: 56,
      title: "Closet Grande Puertas Correderas",
      category: "closets",
      location: "Vitacura, Santiago",
      date: "Mayo 2024",
      description:
        "Closet de pared a pared de gran tamaño con puertas correderas de madera clara, optimizando el espacio del dormitorio principal.",
      image: "/images/closet-grande-puertas-correderas.jpeg",
      gallery: [
        "/images/closet-grande-puertas-correderas.jpeg",
      ],
      features: ["Puertas correderas", "Gran tamaño", "Madera clara", "Almacenamiento masivo"],
    },
    {
      id: 57,
      title: "Escritorio Estudio Gris Oscuro",
      category: "muebles",
      location: "Las Condes, Santiago",
      date: "Mayo 2024",
      description:
        "Mueble de escritorio flotante para estudio o teletrabajo, fabricado con melamina gris oscuro e iluminación LED indirecta.",
      image: "/images/escritorio-estudio-gris-oscuro-led.jpeg",
      gallery: [
        "/images/escritorio-estudio-gris-oscuro-led.jpeg",
      ],
      features: ["Escritorio flotante", "Melamina gris oscuro", "Iluminación LED", "Diseño estudio"],
    },
    {
      id: 58,
      title: "Mesa Arrimo Hall Entrada",
      category: "muebles",
      location: "Peñalolén, Santiago",
      date: "Enero 2024",
      description:
        "Elegante mesa de arrimo o consola diseñada para el hall de entrada, fabricada a medida en madera sólida con acabados finos.",
      image: "/images/mesa-arrimo-hall-entrada.jpeg",
      gallery: [
        "/images/mesa-arrimo-hall-entrada.jpeg",
      ],
      features: ["Consola arrimo", "Hall de entrada", "Madera sólida", "Acabados finos"],
    },
    {
      id: 59,
      title: "Mesa de Centro Living",
      category: "muebles",
      location: "Vitacura, Santiago",
      date: "Enero 2024",
      description:
        "Mesa de centro para living con cubierta de madera rústica y diseño minimalista, ideal para el centro de la sala de estar.",
      image: "/images/mesa-centro-living-1.jpeg",
      gallery: [
        "/images/mesa-centro-living-1.jpeg",
        "/images/mesa-centro-living-2.jpeg",
      ],
      features: ["Mesa de centro", "Madera rústica", "Diseño minimalista", "Living moderno"],
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
