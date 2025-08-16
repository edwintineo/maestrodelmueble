"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+56 9 7202 3868",
      description: "Disponible 24/7 para emergencias",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "victor@maestrodelmueble.cl",
      description: "Respuesta en menos de 24 horas",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Santiago, Región Metropolitana",
      description: "Servicio en toda la región",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: "Lun - Sáb: 8:00 - 18:00",
      description: "Domingos con cita previa",
    },
  ]

  const services = [
    "Cocinas Integrales",
    "Closets y Vestidores",
    "Muebles a Medida",
    "Reparación y Restauración",
    "Instalación y Montaje",
    "Asesoría y Diseño",
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte a hacer realidad tu proyecto. Contáctanos y recibe una cotización personalizada
            sin compromiso.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-orange-500 hover:border-orange-600">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-orange-500" />
                  Solicitar Cotización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servicio">Servicio de Interés</Label>
                    <Select value={formData.servicio} onValueChange={(value) => handleChange("servicio", value)}>
                      <SelectTrigger className="mt-1 bg-white">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="bg-white hover:bg-gray-100">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Cuéntanos sobre tu proyecto, medidas aproximadas, materiales preferidos, presupuesto estimado, etc."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-orange-500 hover:border-orange-600">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-800 font-medium">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200 border-2 border-orange-500 hover:border-orange-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">Chatea con nosotros directamente</p>
                      <Button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => window.open("https://wa.me/56972023868", "_blank")}
                      >
                        Abrir WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200 border-2 border-orange-500 hover:border-orange-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Emergencias 24/7</h3>
                      <p className="text-gray-600 mb-3">Para reparaciones urgentes</p>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                        onClick={() => window.open("tel:+56972023868", "_self")}
                      >
                        Llamar Ahora
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">¿Cuánto tiempo toma un proyecto?</h3>
                <p className="text-gray-600">
                  Los tiempos varían según la complejidad. Una cocina integral puede tomar 2-4 semanas, mientras que
                  muebles más simples 1-2 semanas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">¿Ofrecen garantía?</h3>
                <p className="text-gray-600">
                  Sí, todos nuestros trabajos incluyen 2 años de garantía en estructura y 1 año en herrajes y
                  accesorios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">¿Hacen visitas a domicilio?</h3>
                <p className="text-gray-600">
                  Por supuesto. Realizamos visitas técnicas gratuitas para tomar medidas y evaluar el proyecto en tu
                  hogar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">¿Qué formas de pago aceptan?</h3>
                <p className="text-gray-600">
                  Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y ofrecemos planes de
                  financiamiento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestra Cobertura</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Brindamos servicio en toda la Región Metropolitana de Santiago
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-orange-500 hover:border-orange-600">
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Servicio en Santiago</h3>
                  <p className="text-gray-600">Cobertura completa en la Región Metropolitana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Comenzar tu Proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No esperes más. Contáctanos hoy mismo y hagamos realidad el mueble de tus sueños.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.open("tel:+56972023868", "_self")}>
              <Phone className="w-4 h-4 mr-2" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
              onClick={() => window.open("https://wa.me/56972023868", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
