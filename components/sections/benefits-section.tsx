"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { benefits, type ColorKey } from "@/lib/data"

const colorMap: Record<ColorKey, { bg: string; iconColor: string; title: string; borderHover: string }> = {
  blue: {
    bg: "bg-[#E8F0F8]",
    iconColor: "#0758B8",
    title: "text-[#082060]",
    borderHover: "hover:border-[#58B5E2]",
  },
  green: {
    bg: "bg-[#E0F8F6]",
    iconColor: "#10A8B8",
    title: "text-[#082060]",
    borderHover: "hover:border-[#20C8B8]",
  },
  purple: {
    bg: "bg-[#EAF2FB]",
    iconColor: "#075ED0",
    title: "text-[#082060]",
    borderHover: "hover:border-[#58B5E2]",
  },
  orange: {
    bg: "bg-[#E4FBF8]",
    iconColor: "#20C8B8",
    title: "text-[#082060]",
    borderHover: "hover:border-[#32D0B8]",
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color]
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent ${colors.borderHover}`}
                >
                  <CardHeader>
                    <div
                      className={`mx-auto w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-8 w-8" style={{ color: colors.iconColor }} />
                    </div>
                    <CardTitle className={`text-xl font-bold ${colors.title}`}>
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-[#061C4A]/70 font-medium">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
