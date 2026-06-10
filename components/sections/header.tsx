"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/data"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8F0F8] bg-white/98 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/95"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
        <a href="#inicio" aria-label="TalentoYa — Inicio">
          <img
            src="/assets/logos/logo-horizontal-descriptor.png"
            alt="TalentoYa — Gestión de Talento Humano"
            className="h-10 w-auto"
            width={200}
            height={40}
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center space-x-6"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#061C4A] hover:text-[#0758B8] transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-[#0758B8] rounded"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="ghost"
            className="text-[#061C4A] hover:text-[#0758B8] hover:bg-[#E8F0F8]"
            asChild
          >
            <a href="/login">Iniciar sesión</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#061C4A] hover:bg-[#E8F0F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#0758B8]"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white overflow-y-auto border-t border-[#E8F0F8] z-50"
          >
            <nav className="w-full px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="py-4 px-3 text-[#061C4A] hover:text-[#0758B8] hover:bg-[#E8F0F8] rounded-lg transition-colors text-lg font-medium focus-visible:outline-2 focus-visible:outline-[#0758B8]"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[#E8F0F8] my-3" />
              <a
                href="/login"
                onClick={closeMobile}
                className="py-4 px-3 text-[#061C4A] hover:text-[#0758B8] hover:bg-[#E8F0F8] rounded-lg transition-colors text-lg font-medium focus-visible:outline-2 focus-visible:outline-[#0758B8]"
              >
                Iniciar sesión
              </a>
              <div className="mt-auto pt-8 pb-4 flex justify-center">
                <img
                  src="/assets/logos/logo-horizontal-descriptor.png"
                  alt="TalentoYa"
                  className="h-8 w-auto opacity-40"
                  width={160}
                  height={32}
                  aria-hidden="true"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
