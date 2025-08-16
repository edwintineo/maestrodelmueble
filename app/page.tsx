"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Play,
  Award,
  Users,
  Clock,
  Shield,
  Target,
  Hammer,
  Wrench,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const galleryImages = [
    {
      src: "/images/COCINA-MODERNA-GRIS.jpeg",
      alt: "Cocina moderna con muebles grises y blancos",
      title: "Cocina Moderna Minimalista",
      location: "Santiago",
    },
    {
      src: "/images/CLOSET-OSCURO.jpeg",
      alt: "Closet empotrado con puertas de madera oscura",
      title: "Closet Amplio y Funcional",
      location: "La Reina",
    },
    {
      src: "/images/MUEBLE-TV-SALON.jpeg",
      alt: "Mueble de salón a medida con iluminación",
      title: "Mueble de Salón Integrado",
      location: "Providencia",
    },
    {
      src: "/images/MUEBLE-COCINA-4.jpeg", // New image
      alt: "Cocina moderna con gabinetes negros y encimera de madera",
      title: "Cocina Elegante Negra",
      location: "Vitacura",
    },
    {
      src: "/images/MUEBLE-BARRA-CAFE.jpeg", // New image
      alt: "Barra de café comercial con diseño de listones",
      title: "Barra de Café Moderna",
      location: "Centro",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      location: "Las Condes",
      rating: 5,
      text: "Excelente trabajo en mi cocina. Superaron todas mis expectativas. El equipo es muy profesional y la calidad es excepcional.",
      project: "Cocina Integral",
      image: "/placeholder.svg?height=80&width=80&text=MG",
    },
    {
      name: "Carlos Mendoza",
      location: "Providencia",
      rating: 5,
      text: "Mi closet quedó perfecto. Aprovecharon cada centímetro del espacio y el diseño es hermoso. Totalmente recomendados.",
      project: "Closet Walk-in",
      image: "/placeholder.svg?height=80&width=80&text=CM",
    },
    {
      name: "Ana Rodríguez",
      location: "Ñuñoa",
      rating: 5,
      text: "Restauraron mi mesa antigua familiar y quedó como nueva. El cuidado en los detalles es impresionante.",
      project: "Restauración",
      image: "/placeholder.svg?height=80&width=80&text=AR",
    },
  ]

  const stats = [
    { number: 150, suffix: "+", label: "Proyectos Completados", icon: <Award className="w-8 h-8" /> },
    { number: 15, suffix: "+", label: "Años de Experiencia", icon: <Clock className="w-8 h-8" /> },
    { number: 100, suffix: "%", label: "Clientes Satisfechos", icon: <Users className="w-8 h-8" /> },
    { number: 24, suffix: "/7", label: "Servicio Disponible", icon: <Shield className="w-8 h-8" /> },
  ]

  const services = [
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Cocinas Integrales",
      description: "Diseño y fabricación de cocinas modernas y funcionales",
      color: "from-orange-400 to-red-500",
      image: "/images/COCINA-MODERNA-GRIS.jpeg", // Added image
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Closets y Vestidores",
      description: "Soluciones de almacenamiento personalizadas",
      color: "from-blue-400 to-purple-500",
      image: "/images/CLOSET-OSCURO.jpeg", // Added image
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Muebles a Medida",
      description: "Creación de muebles únicos según tus necesidades",
      color: "from-green-400 to-teal-500",
      image: "/images/MUEBLE-TV-PARED.jpeg", // Added image
    },
  ]

  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <main className="overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-orange-200 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-orange-500 rounded-full animate-float-delayed"></div>
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src="/images/modern-carpentry-workshop.png"
          alt="Modern carpentry workshop"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 border border-white/30 rounded-full animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-20 py-20">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-6"></div>

            {/* Efecto de Revelación (Clip-path) */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold leading-normal">
                <motion.span
                  className="inline-block bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ lineHeight: "1.2" }}
                >
                  Maestro Mueblista en Santiago
                </motion.span>
              </h1>
            </div>

            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Creamos muebles únicos y funcionales para tu hogar. Especialistas en cocinas, closets y muebles a medida
              con más de 15 años de experiencia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button size="lg" variant="secondary" asChild className="group hover:scale-105 transition-transform">
                <Link href="/contacto">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Solicitar Cotización
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent group hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/portafolio">
                  <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Ver Trabajos
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Animated Services Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas en mueblería con la más alta calidad y diseños personalizados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 border-2 border-orange-500 group-hover:border-orange-600 bg-white relative overflow-hidden">
                  {/* Image at the top */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optional: a subtle gradient overlay on the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 -mt-10 relative z-20`} // Adjusted margin-top to overlap with image
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Carousel */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-orange-500">Trabajos</span>
            </h2>
            <p className="text-xl text-gray-300">Conoce algunos de nuestros proyectos más destacados</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentSlide].src || "/placeholder.svg"}
                    alt={galleryImages[currentSlide].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Badge className="mb-3 bg-orange-500 hover:bg-orange-600">
                        {galleryImages[currentSlide].location}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{galleryImages[currentSlide].title}</h3>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-orange-500 w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section ref={statsRef} className="py-20 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white group-hover:scale-110 transition-transform">{stat.icon}</div>
                </motion.div>
                <div className="text-5xl font-bold mb-2">
                  {statsInView && <CountUp end={stat.number} duration={2.5} delay={index * 0.2} suffix={stat.suffix} />}
                </div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Lo Que Dicen Nuestros <span className="text-orange-500">Clientes</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="text-center p-8 shadow-2xl border-0 bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  <Quote className="w-12 h-12 text-orange-500 mx-auto mb-6" />

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg text-gray-600 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].project}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu <span className="text-yellow-300">Proyecto?</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Contáctanos hoy mismo y recibe una cotización personalizada sin compromiso
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/contacto">
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Contactar Ahora
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
