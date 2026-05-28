"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { features, type ColorKey } from "@/lib/data"

const colorMap: Record<ColorKey, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-100", icon: "text-blue-600" },
  green: { bg: "bg-green-100", icon: "text-green-600" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600" },
  orange: { bg: "bg-orange-100", icon: "text-orange-600" },
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
            Características diseñadas para el mercado colombiano
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada funcionalidad está pensada para cumplir 100% con la ley laboral de Colombia
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const colors = colorMap[feature.color]
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                    <CheckCircle className="h-4 w-4" />
                    <span>{feature.badge}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
