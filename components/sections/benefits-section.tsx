"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { benefits, type ColorKey } from "@/lib/data"

const colorMap: Record<ColorKey, { title: string; borderHover: string }> = {
  blue: {
    title: "text-[#082060]",
    borderHover: "group-hover:border-[#58B5E2]",
  },
  green: {
    title: "text-[#082060]",
    borderHover: "group-hover:border-[#20C8B8]",
  },
  purple: {
    title: "text-[#082060]",
    borderHover: "group-hover:border-[#58B5E2]",
  },
  orange: {
    title: "text-[#082060]",
    borderHover: "group-hover:border-[#32D0B8]",
  },
}

export function BenefitsSection() {
  return (
    <motion.section
      id="beneficios"
      className="py-20 px-4 bg-background"
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
            Beneficios que transformarán tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Resultados concretos desde el primer día de uso
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color]
            return (
              <div
                key={benefit.title}
                className="group relative pt-[72px] transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-36 h-36 drop-shadow-xl"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`text-center group-hover:shadow-xl transition-all duration-300 border-2 border-transparent ${colors.borderHover}`}
                  >
                    <div className="pt-20 px-6 pb-6 space-y-2">
                      <CardTitle className={`text-xl font-bold ${colors.title}`}>
                        {benefit.title}
                      </CardTitle>
                      <CardDescription className="text-[#061C4A]/70 font-medium">
                        {benefit.description}
                      </CardDescription>
                    </div>
                  </Card>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
