"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { features, type ColorKey } from "@/lib/data"

const colorMap: Record<ColorKey, { bg: string; icon: string; border: string }> = {
  blue: { bg: "bg-violet-100", icon: "text-violet-600", border: "#7c3aed" },
  green: { bg: "bg-green-100", icon: "text-green-600", border: "#16a34a" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600", border: "#9333ea" },
  orange: { bg: "bg-orange-100", icon: "text-orange-600", border: "#ea580c" },
}

export function FeaturesSection() {
  return (
    <motion.section
      id="caracteristicas"
      className="py-20 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Todo lo que necesitas para gestionar tu equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Desde el expediente del empleado hasta la nómina — en una sola plataforma para empresas colombianas.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const colors = colorMap[feature.color]
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                style={{ borderLeft: `4px solid ${colors.border}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                <div className="inline-flex items-center gap-2 text-sm text-[#6600ff] font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>{feature.badge}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
