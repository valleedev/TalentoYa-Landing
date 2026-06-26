"use client"

import { motion } from "framer-motion"
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
    alt: "Talen con carpeta — gestión de talento humano",
  },
  1: {
    src: "/assets/talen/talen-completado.png",
    alt: "Talen con checkmark — control laboral",
  },
  2: {
    src: "/assets/talen/talen-completado.png",
    alt: "Talen con checkmark — manejo de administración",
  },
  3: {
    src: "/assets/talen/talen-expediente.png",
    alt: "Talen con carpeta — gestión de pagos",
  },
}

export function FeaturesSection() {
  return (
    <motion.section
      id="caracteristicas"
      className="py-20 px-4 bg-white"
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
            const talen = talenByFeatureIndex[index]
            return (
              <motion.div
                key={feature.title}
                className="group relative flex flex-col gap-5 p-6 sm:p-7 bg-white rounded-2xl border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-12px_rgba(6,28,74,0.18)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={talen.src}
                    alt={talen.alt}
                    className="flex-shrink-0 w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-[#061C4A] leading-snug pt-1">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-[#061C4A]/70 leading-relaxed flex-1">{feature.description}</p>

                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold ${colors.bg} ${colors.badge}`}
                >
                  {feature.badge}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
