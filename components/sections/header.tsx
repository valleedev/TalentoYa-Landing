"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      initial={false}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 relative transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8F0F8] bg-white/98 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/95"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
        <Link href="/" aria-label="TalentoYa — Inicio">
          <img
            src="/assets/logos/logo-horizontal-descriptor.png"
            alt="TalentoYa — Gestión de Talento Humano"
            className="h-10 w-auto"
            width={200}
            height={40}
          />
        </Link>

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
            className="border border-[#0758B8] text-[#0758B8] bg-white hover:bg-[#0758B8] hover:text-white transition-colors"
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

      {/* Mobile menu — absolute below header to avoid backdrop-filter containing block */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menú de navegación"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-[#E8F0F8] overflow-y-auto z-50"
            style={{ height: "calc(100vh - 64px)" }}
          >
            <nav className="w-full h-full px-6 py-6 flex flex-col gap-1">
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
              <div className="flex-1" />
              <div className="border-t border-[#E8F0F8] mb-3" />
              <a
                href="/login"
                onClick={closeMobile}
                className="py-4 px-4 bg-[#0758B8] hover:bg-[#082060] text-white rounded-lg transition-colors text-lg font-semibold text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0758B8]"
              >
                Iniciar sesión
              </a>
              <div className="pt-8 pb-4 flex justify-center">
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
