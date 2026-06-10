"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { footerQuickLinks } from "@/lib/data"

export function SiteFooter() {
  return (
    <motion.footer
      className="py-16 px-4 text-white"
      style={{ backgroundColor: "#061C4A" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-4 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/logos/logo-negativo-azul.png"
              alt="TalentoYa — Gestión de Talento Humano"
              className="h-12 w-auto"
              width={240}
              height={48}
            />
            <p className="text-gray-300 text-pretty leading-relaxed max-w-md">
              La plataforma de gestión de talento humano más simple y económica para empresarios
              colombianos. Simplifica tu nómina, cumple la ley y enfócate en hacer crecer tu negocio.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/talento.ya/"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#082060" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e1306c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#082060")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TalentoYa en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg text-white">Enlaces rápidos</h3>
            <div className="space-y-3">
              {footerQuickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <a
                  href="mailto:info.talentoya@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  info.talentoya@gmail.com
                </a>
              </div>
              <div className="text-gray-300">
                <div className="font-medium text-white mb-1">Horarios de atención:</div>
                <div className="text-sm">Lunes a Viernes</div>
                <div className="text-sm">8:00 AM - 6:00 PM COT</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="my-8 bg-[#082060]" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm">
            © 2025 TalentoYa. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-gray-400 hover:text-white transition-colors">
              Términos de Uso
            </a>
            <a
              href="https://jsvb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20C8B8] hover:text-[#32D0B8] transition-colors"
            >
              Conoce al desarrollador
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
