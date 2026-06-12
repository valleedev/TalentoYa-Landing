"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0758B8] transition-colors"
              aria-label="Cerrar formulario"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="text-center space-y-4 py-4">
                <CheckCircle className="h-14 w-14 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">¡Solicitud recibida!</h3>
                <p className="text-gray-600">
                  Te contactaremos pronto para activar tu{" "}
                  <span className="font-semibold text-blue-600">Plan {planName}</span>.
                </p>
                <Button onClick={handleClose} className="w-full mt-2">
                  Cerrar
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    Plan {planName}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Solicitar acceso</h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    Te contactamos para activar tu plan sin complicaciones.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <Input name="nombre" required placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <Input name="empresa" required placeholder="Nombre de tu empresa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input name="telefono" type="tel" required placeholder="300 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <Input name="email" type="email" required placeholder="tu@empresa.com" />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">
                      ⚠️ Hubo un error, intenta de nuevo.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-2"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                  <p className="text-center text-xs leading-5 text-gray-500">
                    Al enviar este formulario, trataremos tus datos para responder la solicitud.
                    Consulta la{" "}
                    <a
                      href={privacyPath}
                      className="font-medium text-[#0758B8] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0758B8]"
                    >
                      Política de privacidad
                    </a>
                    .
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
