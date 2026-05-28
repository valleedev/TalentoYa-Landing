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
      className="border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/95 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logos/logo1-negativo-talentoya.png"
            alt="TalentoYa"
            className="w-50"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            asChild
          >
            <a href="#demo">Demo Gratis</a>
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}
