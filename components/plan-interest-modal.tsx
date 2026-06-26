"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { saveLead } from "@/lib/actions/saveLead"
import { privacyPath } from "@/lib/legal"

interface PlanInterestModalProps {
  open: boolean
  planName: string
  onClose: () => void
}

type Status = "idle" | "loading" | "success" | "error"

export function PlanInterestModal({ open, planName, onClose }: PlanInterestModalProps) {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    const formData = new FormData(e.currentTarget)
    try {
      await saveLead({
        nombre: formData.get("nombre") as string,
        empresa: formData.get("empresa") as string,
        telefono: formData.get("telefono") as string,
        email: formData.get("email") as string,
        plan: planName,
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const handleClose = () => {
    setStatus("idle")
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#061C4A]/40 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative w-full max-w-md">
            {/* Badge fuera del overflow-hidden para que cubra el borde superior */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
              <span className="inline-block bg-[#0758B8] text-white text-xs font-semibold px-4 py-1 rounded-b-full whitespace-nowrap">
                Plan {planName}
              </span>
            </div>
            <motion.div
              className="bg-white border border-[#e2e8f0] rounded-2xl w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >

            {/* Header */}
            <div className="bg-[#f8f9fc] border-b border-[#e2e8f0] px-8 pt-8 pb-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#061C4A]">Solicitar acceso</h3>
                <p className="text-sm text-[#061C4A]/60 mt-0.5">
                  Te contactamos para activar tu plan sin complicaciones.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-[#061C4A]/40 hover:text-[#061C4A] transition-colors mt-0.5 cursor-pointer"
                aria-label="Cerrar formulario"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-6">
              {status === "success" ? (
                <div className="text-center space-y-4 py-6">
                  <div className="w-14 h-14 bg-[#E8F0F8] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-7 w-7 text-[#0758B8]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#061C4A]">¡Solicitud recibida!</h4>
                    <p className="text-[#061C4A]/60 text-sm mt-1">
                      Te contactaremos pronto para activar tu{" "}
                      <span className="font-semibold text-[#0758B8]">Plan {planName}</span>.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-full bg-[#0758B8] hover:bg-[#054da8] text-white font-medium py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#061C4A] mb-1.5">
                      Nombre
                    </label>
                    <Input name="nombre" required placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#061C4A] mb-1.5">
                      Empresa
                    </label>
                    <Input name="empresa" required placeholder="Nombre de tu empresa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#061C4A] mb-1.5">
                      Teléfono
                    </label>
                    <Input name="telefono" type="tel" required placeholder="300 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#061C4A] mb-1.5">
                      Correo electrónico
                    </label>
                    <Input name="email" type="email" required placeholder="tu@empresa.com" />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">
                      ⚠️ Hubo un error, intenta de nuevo.
                    </p>
                  )}

                  <div className="pt-1 space-y-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#0758B8] hover:bg-[#054da8] disabled:opacity-60 text-white font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === "loading" ? "Enviando..." : <>Enviar solicitud <span aria-hidden>→</span></>}
                    </button>
                    <p className="text-center text-xs text-[#061C4A]/40 leading-5">
                      Al enviar trataremos tus datos para responder la solicitud.{" "}
                      <a
                        href={privacyPath}
                        className="text-[#0758B8] hover:underline underline-offset-4"
                      >
                        Política de privacidad
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
