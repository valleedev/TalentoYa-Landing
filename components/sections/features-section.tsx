"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { features, type ColorKey } from "@/lib/data"

const colorMap: Record<ColorKey, { bg: string; iconColor: string; border: string; badge: string }> = {
  blue: {
    bg: "bg-[#E8F0F8]",
    iconColor: "#0758B8",
    border: "#0758B8",
    badge: "text-[#0758B8]",
  },
  green: {
    bg: "bg-[#E0F8F6]",
    iconColor: "#10A8B8",
    border: "#10A8B8",
    badge: "text-[#10A8B8]",
  },
  purple: {
    bg: "bg-[#EAF2FB]",
    iconColor: "#075ED0",
    border: "#075ED0",
    badge: "text-[#075ED0]",
  },
  orange: {
    bg: "bg-[#E4FBF8]",
    iconColor: "#20C8B8",
    border: "#20C8B8",
    badge: "text-[#10A8B8]",
  },
}

const talenByFeatureIndex: Record<number, { src: string; alt: string }> = {
  0: {
    src: "/assets/talen/talen-expediente.png",
    alt: "Talen con carpeta — expediente digital",
  },
  1: {
    src: "/assets/talen/talen-completado.png",
    alt: "Talen con carpeta — documentos digitales",
  },
  2: {
    src: "/assets/talen/talen-completado.png",
    alt: "Talen con checkmark — certificados listos",
  },
  3: {
    src: "/assets/talen/talen-expediente.png",
    alt: "Talen con checkmark — nómina lista",
  },
}

export function FeaturesSection() {
  return (
    <motion.section
      id="caracteristicas"
      className="py-20 px-4 bg-[#E8F0F8]/40"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-[#061C4A] text-balance">
            Todo lo que necesitas para gestionar tu equipo
          </h2>
          <p className="text-xl text-[#061C4A]/60 max-w-2xl mx-auto text-pretty">
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
            const talen = talenByFeatureIndex[index]
            return (
              <motion.div
                key={feature.title}
                className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E8F0F8]"
                style={{ borderLeft: `4px solid ${colors.border}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-4">
                  {!talen && (
                    <div
                      className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="h-6 w-6" style={{ color: colors.iconColor }} />
                    </div>
                  )}
                  {talen && (
                    <img
                      src={talen.src}
                      alt={talen.alt}
                      className="w-16 h-16 object-contain flex-shrink-0"
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#061C4A]">{feature.title}</h3>
                <p className="text-[#061C4A]/70 leading-relaxed flex-1">{feature.description}</p>
                <div className={`inline-flex items-center gap-2 text-sm font-medium ${colors.badge}`}>
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
