"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Shield, Zap } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-gradient py-20 px-4 relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <ParticlesBackground />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white/90 font-medium">
                  Hecho en Colombia para microempresas y PYMEs
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Ahorra hasta{" "}
                <span style={{ color: "rgb(62, 60, 255)" }}>80% de tiempo</span>{" "}
                en tu nómina
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                La plataforma de gestión de talento humano más simple para microempresas colombianas.{" "}
                <strong className="text-white">Cumple 100% con la ley laboral</strong> y elimina el papeleo.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                asChild
              >
                <a href="#demo">
                  <Zap className="h-5 w-5 mr-2" />
                  Solicita tu demo gratis
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                asChild
              >
                <a href="#plantilla">
                  <Download className="h-5 w-5 mr-2" />
                  Descarga plantilla gratis
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Sin permanencia • Cancela cuando quieras • Soporte en español</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="/empleados.jpg"
              alt="Dashboard de TalentoYa"
              className="max-w-md w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
