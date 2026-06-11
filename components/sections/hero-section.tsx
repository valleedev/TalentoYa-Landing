"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap } from "lucide-react"

const floatVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-gradient py-16 md:py-24 px-4 relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #20C8B8 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #0758B8 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-[#E8F0F8] border border-[#58B5E2]/40 rounded-full px-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Users className="h-4 w-4 text-[#0758B8]" />
                <span className="text-sm text-[#0758B8] font-medium">
                  Software de talento humano para empresas colombianas
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#061C4A] leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Gestiona tu equipo{" "}
                <span style={{ color: "var(--ty-azul-principal)" }}>
                  con orden y claridad
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-[#061C4A]/70 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Expediente digital, contratos, documentos y certificados laborales —{" "}
                <strong className="text-[#061C4A]">todo en un solo lugar.</strong>{" "}
                Sin Excel, sin WhatsApp, sin carpetas físicas.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-[#0758B8] hover:bg-[#082060] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0758B8]"
                asChild
              >
                <a href="#planes">
                  <Zap className="h-5 w-5 mr-2" />
                  Ver planes disponibles
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-[#061C4A]/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" style={{ color: "var(--ty-turquesa)" }} />
                <span>Soporte en español</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" style={{ color: "var(--ty-turquesa)" }} />
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" style={{ color: "var(--ty-turquesa)" }} />
                <span>Listo en 5 minutos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Talen hero */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src="/assets/talen/talen-hero.png"
              alt="Talen, la mascota de TalentoYa — colibrí corporativo"
              className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto drop-shadow-xl"
              width={384}
              height={384}
              loading="eager"
              variants={floatVariant}
              animate="animate"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
