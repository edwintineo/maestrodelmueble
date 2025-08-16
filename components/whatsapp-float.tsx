"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56912345678" // Reemplazar con el número real
    const message = "Hola, me interesa conocer más sobre sus servicios de mueblería."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button onClick={handleWhatsAppClick} className="whatsapp-float" aria-label="Contactar por WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
