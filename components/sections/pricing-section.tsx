"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlanInterestModal } from "@/components/plan-interest-modal"

const pricingPlans = [
  {
    name: "Starter",
    price: "$150.000",
    period: "COP/mes",
    description: "Para microempresas que empiezan",
    features: ["Hasta 10 empleados", "Contratos laborales", "Documentos y permisos", "Soporte en español"],
    highlighted: false,
    badge: undefined as string | undefined,
  },
  {
    name: "PyME",
    price: "$250.000",
    period: "COP/mes",
    description: "Ideal para empresas en crecimiento",
    features: ["De 11 a 25 empleados", "Contratos laborales", "Documentos y permisos", "Vacaciones e incapacidades", "Soporte prioritario"],
    highlighted: true,
    badge: "Más Popular" as string | undefined,
  },
  {
    name: "Empresarial",
    price: "$400.000",
    period: "COP/mes",
    description: "Para empresas consolidadas",
    features: ["De 26 a 50 empleados", "Contratos laborales", "Documentos y permisos", "Vacaciones e incapacidades", "Reportes avanzados", "Soporte prioritario"],
    highlighted: false,
    badge: undefined as string | undefined,
  },
]

const founderFeatures = [
  "Hasta 15 empleados",
  "Contratos laborales",
  "Documentos y permisos",
  "Vacaciones e incapacidades",
  "Soporte en español",
]

export function PricingSection() {
  const [modal, setModal] = useState<{ open: boolean; plan: string }>({ open: false, plan: "" })

  const openModal = (plan: string) => setModal({ open: true, plan })
  const closeModal = () => setModal({ open: false, plan: "" })

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
          className="text-center space-y-4 mb-12"
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

        {/* Plan Founder — precio de lanzamiento */}
        <motion.div
          className="mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute -top-4 left-6">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                <Star className="h-3.5 w-3.5 fill-amber-900" />
                Precio de lanzamiento
              </span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-amber-900">Plan Founder</h3>
              <p className="text-amber-700 mt-1">Exclusivo para los primeros clientes que apoyaron TalentoYa</p>
              <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                {founderFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-sm text-amber-800">
                    <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-4xl font-bold text-amber-600">$150.000</div>
              <div className="text-amber-700 text-sm">COP/mes</div>
              <Button
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white border-0"
                onClick={() => openModal("Founder")}
              >
                Empieza ahora
              </Button>
            </div>
          </div>
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
                  plan.highlighted ? "border-2 border-[#0758B8]" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#0758B8] text-white px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-[#0758B8]">{plan.price}</div>
                    <div className="text-gray-500">{plan.period}</div>
                  </div>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#10A8B8]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6"
                    variant={plan.highlighted ? "default" : "outline"}
                    onClick={() => openModal(plan.name)}
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
              Garantía de 30 días — Si no estás satisfecho, te devolvemos el dinero
            </span>
          </div>
        </motion.div>
      </div>

      <PlanInterestModal
        open={modal.open}
        planName={modal.plan}
        onClose={closeModal}
      />
    </motion.section>
  )
}
