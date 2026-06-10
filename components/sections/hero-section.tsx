"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-gradient py-20 px-4 relative min-h-[80vh] flex items-center overflow-hidden"
    >
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
                className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Users className="h-4 w-4 text-violet-600" />
                <span className="text-sm text-violet-700 font-medium">
                  Plataforma de gestión de talento para empresas colombianas
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Gestiona tu equipo{" "}
                <span className="text-[#6600ff]">con orden y claridad</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Expediente digital, contratos, documentos y certificados laborales de cada empleado —{" "}
                <strong className="text-gray-900">todo en un solo lugar.</strong>
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
                className="bg-[#6600ff] hover:bg-[#5500d4] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                asChild
              >
                <a href="#demo">
                  <Zap className="h-5 w-5 mr-2" />
                  Agenda tu demo
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Soporte en español</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="/dashboard-preview.png"
              alt="Dashboard de TalentoYa — gestión de empleados"
              className="max-w-4xl w-full h-auto rounded-xl shadow-2xl border border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
