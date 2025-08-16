"use client" // This component needs to be a Client Component to use framer-motion and useInView

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Shield, Users } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion" // Import motion
import { useInView } from "react-intersection-observer" // Import useInView

export default function ServiciosPage() {
  const services = [
    {
      title: "Cocinas Integrales",
      description: "Diseño y fabricación de cocinas modernas, funcionales y adaptadas a tu espacio y necesidades.",
      features: [
        "Diseño 3D personalizado",
        "Materiales de primera calidad",
        "Instalación profesional",
        "Garantía de 2 años",
        "Asesoría en distribución de espacios",
      ],
      image: "/images/MUEBLE-COCINA-5.jpeg", // Updated image
    },
    {
      title: "Closets y Vestidores",
      description:
        "Soluciones de almacenamiento inteligentes que maximizan el espacio y organizan tu ropa de manera eficiente.",
      features: [
        "Sistemas modulares flexibles",
        "Accesorios especializados",
        "Aprovechamiento máximo del espacio",
        "Diferentes acabados disponibles",
        "Iluminación LED integrada",
      ],
      image: "/images/CLOSET-OSCURO.jpeg",
    },
    {
      title: "Muebles a Medida",
      description: "Creación de muebles únicos diseñados específicamente para tu hogar y estilo de vida.",
      features: [
        "Diseño completamente personalizado",
        "Variedad de materiales y acabados",
        "Funcionalidad optimizada",
        "Integración perfecta con tu decoración",
        "Muebles para cualquier ambiente",
      ],
      image: "/images/MUEBLE-TV-PARED.jpeg", // Updated image
    },
    {
      title: "Reparación y Restauración",
      description: "Damos nueva vida a tus muebles favoritos con servicios de reparación y restauración profesional.",
      features: [
        "Evaluación gratuita del mueble",
        "Restauración de acabados",
        "Reparación de estructuras",
        "Cambio de herrajes",
        "Modernización de diseños antiguos",
      ],
      image: "/images/MESA-REDONDA-MADERA.jpeg", // Example for restoration
    },
    {
      title: "Instalación y Montaje",
      description: "Servicio profesional de instalación y montaje de muebles con garantía de calidad.",
      features: [
        "Equipo técnico especializado",
        "Herramientas profesionales",
        "Instalación en tiempo récord",
        "Limpieza post-instalación",
        "Garantía en la instalación",
      ],
      image: "/images/ARTESANO-TRABAJANDO-1.jpeg", // Updated image to show process
    },
    {
      title: "Asesoría y Diseño",
      description: "Consultoría especializada en diseño de interiores y optimización de espacios.",
      features: [
        "Visita técnica gratuita",
        "Planos y renders 3D",
        "Asesoría en materiales",
        "Optimización de presupuesto",
        "Seguimiento del proyecto",
      ],
      image: "/images/MUEBLE-CAJA-RECEPCION.jpeg", // Updated image for design/commercial
    },
  ]

  const process = [
    {
      step: "1",
      title: "Consulta Inicial",
      description: "Conversamos sobre tus necesidades, gustos y presupuesto disponible.",
    },
    {
      step: "2",
      title: "Visita Técnica",
      description: "Visitamos tu hogar para tomar medidas exactas y evaluar el espacio.",
    },
    {
      step: "3",
      title: "Diseño y Cotización",
      description: "Creamos el diseño 3D y te entregamos una cotización detallada.",
    },
    {
      step: "4",
      title: "Fabricación",
      description: "Una vez aprobado, iniciamos la fabricación con materiales de calidad.",
    },
    {
      step: "5",
      title: "Instalación",
      description: "Nuestro equipo realiza la instalación profesional en tu hogar.",
    },
    {
      step: "6",
      title: "Entrega Final",
      description: "Revisamos juntos el trabajo terminado y te entregamos las garantías.",
    },
  ]

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.3 });


  return (
    <main>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ofrecemos soluciones completas en mueblería con la más alta calidad, diseños personalizados y servicio
            profesional garantizado.
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-orange-500 group-hover:border-orange-600 transition-colors duration-300">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className={`p-6 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
                      </CardHeader>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="border-2 border-orange-500 hover:border-orange-600">
                        <Link href="/contacto">Solicitar Cotización</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 50 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seguimos un proceso estructurado para garantizar los mejores resultados en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 border-2 border-orange-500 hover:border-orange-600">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Por Qué Elegir Nuestros Servicios?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Shield className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Todos nuestros trabajos incluyen garantía de calidad y materiales</p>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Clock className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Entrega Puntual</h3>
              <p className="text-gray-600">Cumplimos con los plazos acordados sin comprometer la calidad</p>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Users className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Equipo Profesional</h3>
              <p className="text-gray-600">Contamos con artesanos experimentados y certificados</p>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Check className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Satisfacción Total</h3>
              <p className="text-gray-600">No terminamos hasta que estés 100% satisfecho con el resultado</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-orange-500 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas Alguno de Nuestros Servicios?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para recibir una cotización personalizada y sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="border-2 border-orange-500 hover:border-orange-600">
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
              asChild
            >
              <Link href="/portafolio">Ver Nuestros Trabajos</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
