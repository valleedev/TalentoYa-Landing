"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// Archived — pricing removed from landing. Data kept inline for reference.
const pricingPlans = [
  {
    name: "Básico",
    price: "$49.900",
    period: "COP/mes",
    description: "Perfecto para emprendedores",
    features: ["Hasta 3 empleados", "Nómina básica", "Contratos básicos", "Soporte por email"],
    highlighted: false,
    badge: undefined as string | undefined,
  },
  {
    name: "PyME",
    price: "$89.900",
    period: "COP/mes",
    description: "Ideal para pequeñas empresas",
    features: ["Hasta 15 empleados", "Nómina completa", "Todos los contratos", "Alertas automáticas", "Soporte prioritario"],
    highlighted: true,
    badge: "Más Popular" as string | undefined,
  },
  {
    name: "Pro",
    price: "$149.900",
    period: "COP/mes",
    description: "Para empresas en crecimiento",
    features: ["Empleados ilimitados", "Funciones avanzadas", "Reportes detallados", "API integración", "Soporte 24/7"],
    highlighted: false,
    badge: undefined as string | undefined,
  },
]

export function PricingSection() {
  return (
    <motion.section
      id="planes"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Planes diseñados para tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Precios justos y transparentes. Sin sorpresas, sin letra pequeña.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative p-6 h-full hover:shadow-xl transition-all duration-300 ${
                  plan.highlighted ? "border-2 border-blue-500" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                    <div className="text-gray-500">{plan.period}</div>
                  </div>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Empieza ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-medium">
              Garantía de 30 días - Si no estás satisfecho, te devolvemos el dinero
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
