"use client"

import type React from "react"

import { useState, useEffect } from "react" // Import useEffect
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Heart, Star, Award, Shield, ChevronUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()
  const [showScrollButton, setShowScrollButton] = useState(false) // New state for scroll button visibility

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribed(true)
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te mantendremos informado sobre nuestros proyectos y ofertas especiales.",
    })
    setEmail("")

    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Effect to handle scroll visibility for the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button after scrolling down 200px
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const footerLinks = {
    servicios: [
      { name: "Cocinas Integrales", href: "/servicios#cocinas" },
      { name: "Closets y Vestidores", href: "/servicios#closets" },
      { name: "Muebles a Medida", href: "/servicios#muebles" },
      { name: "Reparación y Restauración", href: "/servicios#reparacion" },
      { name: "Instalación y Montaje", href: "/servicios#instalacion" },
    ],
    empresa: [
      { name: "Quiénes Somos", href: "/quienes-somos" },
      { name: "Portafolio", href: "/portafolio" },
      { name: "Preguntas Frecuentes", href: "/contacto#faq" },
      { name: "Servicios", href: "/servicios" },
      { name: "Contacto", href: "/contacto" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:text-pink-500" },
  ]

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "150+ Proyectos" },
    { icon: <Star className="w-6 h-6" />, text: "5 Estrellas" },
    { icon: <Shield className="w-6 h-6" />, text: "Garantía 2 Años" },
    { icon: <Heart className="w-6 h-6" />, text: "100% Satisfacción" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-300 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/images/logo-2.webp" // Updated to new logo-2.webp
                  alt="El Maestro del Mueble Logo"
                  width={307} // Adjusted width for footer, maintaining aspect ratio
                  height={90} // Adjusted height for footer, maintaining aspect ratio
                  className="h-auto max-h-[90px] w-auto" // Ensure it scales correctly and max height
                />
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Creamos muebles únicos y funcionales con más de 15 años de experiencia. Tu satisfacción es nuestra
                prioridad.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    <div className="text-orange-500">{achievement.icon}</div>
                    <span>{achievement.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color} hover:bg-gray-700`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-orange-400">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-orange-400">Empresa</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.empresa.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-orange-400">Contacto</h3>

              <div className="space-y-4 mb-8">
                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+56 9 7202 3868</span> {/* Updated phone number */}
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>victor@maestrodelmueble.cl</span>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Santiago, Región Metropolitana</span>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Lun - Sáb: 8:00 - 18:00</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p className="text-gray-400 text-sm text-center md:text-left">
                Developed by{" "}
                <Link
                  href="https://www.etagency.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  ET AGENCY
                </Link>{" "}
                |{" "}
                <Link
                  href="https://www.etagency.cl/servicios/diseno-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Página Web
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-16 left-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollButton ? 1 : 0, y: showScrollButton ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}
