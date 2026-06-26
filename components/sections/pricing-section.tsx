"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      className="py-20 px-4 bg-[#f5f7fb]"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-[#061C4A] text-balance">
            Planes diseñados para tu negocio
          </h2>
        </motion.div>

        {/* Plan Founder */}
        <motion.div
          className="mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute -top-4 left-6">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                <Star className="h-3.5 w-3.5 fill-amber-900" />
                Precio de lanzamiento
              </span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#061C4A]">Plan Founder</h3>
              <p className="text-[#061C4A]/60 mt-1">Exclusivo para los primeros clientes que apoyaron TalentoYa</p>
              <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                {founderFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-sm text-[#061C4A]/80">
                    <CheckCircle className="h-4 w-4 text-[#10A8B8] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-4xl font-bold text-[#061C4A]">$150.000</div>
              <div className="text-[#061C4A]/50 text-sm">COP/mes</div>
              <Button
                className="mt-4 bg-[#0758B8] hover:bg-[#054da8] text-white border-0 cursor-pointer"
                onClick={() => openModal("Founder")}
              >
                Empieza ahora
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Grid de planes */}
        <motion.div
          className="max-w-5xl mx-auto border border-[#e2e8f0] rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col p-8 min-h-[520px] transition-colors duration-200 ${
                  plan.highlighted ? "bg-white shadow-lg z-10 hover:bg-[#fafbff]" : "bg-[#f8f9fc] hover:bg-white"
                } ${
                  index < pricingPlans.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#e2e8f0]"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {plan.badge && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-[#0758B8] text-white text-xs font-semibold px-4 py-1 rounded-b-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-[#061C4A]">{plan.name}</h3>
                  <p className="text-sm text-[#061C4A]/60 mt-1">{plan.description}</p>

                  <div className="mt-6">
                    <span className="text-5xl font-black text-[#061C4A]">{plan.price}</span>
                    <span className="text-base font-normal text-[#061C4A]/50 ml-1">{plan.period}</span>
                  </div>

                  <hr className="border-t border-[#e2e8f0] my-6" />

                  <div className="flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-[#061C4A]/80">
                        <CheckCircle
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.highlighted ? "text-[#0758B8]" : "text-[#10A8B8]"
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  {plan.highlighted ? (
                    <button
                      onClick={() => openModal(plan.name)}
                      className="w-full bg-[#0758B8] hover:bg-[#054da8] text-white font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Empieza ahora <span aria-hidden>→</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => openModal(plan.name)}
                      className="w-full border border-[#061C4A]/30 hover:border-[#061C4A] text-[#061C4A] font-medium py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                    >
                      Empieza ahora
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
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
