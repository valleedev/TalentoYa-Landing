"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Zap } from "lucide-react"
import { MailchimpHeroForm } from "@/components/mailchimp-hero-form"

const ctaBenefits = [
  "Configuración en 5 minutos",
  "Prueba gratis 14 días",
  "Soporte en español",
]

export function CtaSection() {
  return (
    <motion.section
      id="demo"
      className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
              ¿Listo para transformar tu gestión de nómina?
            </h2>
            <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto leading-relaxed">
              Únete a más de 50 empresarios colombianos que ya ahorran tiempo y dinero con TalentoYa.
              <br />
              <strong className="text-white">Sin permanencia, sin complicaciones.</strong>
            </p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {ctaBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <Zap className="h-12 w-12 text-yellow-300 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">
                    Solicita tu demo personalizada
                  </h3>
                  <p className="text-white/80 text-sm">
                    Te mostraremos cómo TalentoYa puede transformar tu negocio en una llamada de 15 minutos
                  </p>
                </div>

                <MailchimpHeroForm variant="cta" showTitle={false} />

                <div className="text-center text-white/70 text-xs">
                  Al solicitar tu demo aceptas que te contactemos para agendar una presentación personalizada
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-6 py-3">
              <Clock className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium text-sm">
                Oferta limitada: 20% de descuento en tu primer mes
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
