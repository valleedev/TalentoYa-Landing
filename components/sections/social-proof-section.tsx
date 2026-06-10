"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { stats } from "@/lib/data"

const statColorMap: Record<"blue" | "green" | "purple", string> = {
  blue: "text-[#0758B8]",
  green: "text-[#10A8B8]",
  purple: "text-[#075ED0]",
}

export function SocialProofSection() {
  return (
    <motion.section
      className="py-20 px-4 bg-white"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Ya confían en TalentoYa
          </h2>

          <motion.div
            className="bg-[#E8F0F8] rounded-2xl p-8 md:p-12 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 text-[#0758B8] mb-6 mx-auto" />
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
              &ldquo;Antes me tomaba todo un día hacer la nómina de mis 8 empleados. Ahora con TalentoYa
              lo hago en 30 minutos y sin errores. Mi contador está feliz porque todo llega perfecto.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                CM
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">Carlos Muñoz</div>
                <div className="text-gray-600">Dueño de Panadería San Carlos, Medellín</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-bold ${statColorMap[stat.color]} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
