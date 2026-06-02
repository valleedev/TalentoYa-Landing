"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/data"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logos/logo1-talentoya.png"
            alt="TalentoYa"
            className="w-50"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            asChild
          >
            <a href="/login">Iniciar sesión</a>
          </Button>
          <Button
            className="bg-[#6600ff] hover:bg-[#5500d4] text-white"
            asChild
          >
            <a href="#demo">Agenda tu demo</a>
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}
