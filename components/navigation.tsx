"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "INICIO" },
    { href: "/servicios", label: "SERVICIOS" },
    { href: "/portafolio", label: "PORTAFOLIO" },
    { href: "/quienes-somos", label: "QUIENES SOMOS" },
    { href: "/contacto", label: "CONTACTO" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-2.webp" // Updated to new logo-2.webp
              alt="El Maestro del Mueble Logo"
              width={307} // Set to specified width
              height={90} // Set to specified height
              className="h-auto max-h-[90px] w-auto" // Ensure it scales correctly
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  pathname === item.href ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 font-medium transition-colors hover:text-orange-500 ${
                  pathname === item.href ? "text-orange-500" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
