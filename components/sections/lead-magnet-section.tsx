"use client"

import { motion } from "framer-motion"
import { CheckCircle, Download } from "lucide-react"
import { MailchimpHeroForm } from "@/components/mailchimp-hero-form"

const templateBenefits = [
  "Cálculo automático de prestaciones",
  "100% legal en Colombia",
  "Incluye manual de uso",
]

export function LeadMagnetSection() {
  return (
    <motion.section
      id="plantilla"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Descarga gratis nuestra plantilla de liquidación laboral
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plantilla en Excel que cumple 100% con la ley colombiana. Calcula automáticamente
              cesantías, intereses, prima de servicios y vacaciones.
            </p>
          </div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Download className="h-8 w-8 text-green-600" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Plantilla de Liquidación Laboral</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  {templateBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <MailchimpHeroForm variant="leadMagnet" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
