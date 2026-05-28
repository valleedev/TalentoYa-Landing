"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MAILCHIMP_URL, TEMPLATE_FILE, TEMPLATE_FILENAME } from "@/lib/constants"

interface MailchimpHeroFormProps {
  variant?: "hero" | "leadMagnet" | "cta"
  showTitle?: boolean
}

type FormStatus = "idle" | "loading" | "success" | "error"

const formConfig = {
  hero: {
    title: "Sé de los primeros en acceder a TalentoYa",
    subtitle: "20% de descuento en el primer mes",
    buttonText: "Reservar mi acceso",
    placeholder: "Tu correo electrónico",
    successMessage: "🎉 ¡Te has unido a la lista!",
    footerText: "Únete a más de 50 emprendedores que ya están en lista de espera",
    icon: <Gift className="h-5 w-5" />,
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  leadMagnet: {
    title: "Descarga tu plantilla gratis",
    subtitle: "Recibe la plantilla de liquidación laboral en tu email",
    buttonText: "Descargar gratis",
    placeholder: "Tu correo empresarial",
    successMessage: "✅ ¡Descarga iniciada! También te hemos enviado la plantilla por email",
    footerText: "100% gratis • No spam • Cancela cuando quieras",
    icon: <Download className="h-5 w-5" />,
    buttonClass: "bg-green-600 hover:bg-green-700 text-white",
  },
  cta: {
    title: "Agenda tu demo personalizada",
    subtitle: "Te contactaremos en menos de 2 horas",
    buttonText: "Solicitar demo gratis",
    placeholder: "Tu correo empresarial",
    successMessage: "✅ ¡Perfecto! Te contactaremos pronto para agendar tu demo",
    footerText: "Demo personalizada de 15 minutos • Sin compromiso",
    icon: <Zap className="h-5 w-5" />,
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
} as const

export function MailchimpHeroForm({ variant = "hero", showTitle = true }: MailchimpHeroFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const config = formConfig[variant]

  const downloadTemplate = () => {
    const link = document.createElement("a")
    link.href = TEMPLATE_FILE
    link.download = TEMPLATE_FILENAME
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    const formData = new FormData(e.currentTarget)
    const form = e.currentTarget
    const params = new URLSearchParams(formData as any).toString()

    fetch(`${MAILCHIMP_URL}&${params}`, { method: "GET", mode: "no-cors" })

    setTimeout(() => {
      setStatus("success")
      form.reset()
      if (variant === "leadMagnet") downloadTemplate()
    }, 1000)
  }

  return (
    <motion.div
      className="space-y-4 w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: variant === "hero" ? 1.0 : 0.2 }}
    >
      {showTitle && (
        <div className="text-center space-y-2">
          <h3
            className={`font-medium ${
              variant === "hero" ? "text-xl text-white/80" : "text-lg text-gray-700"
            }`}
          >
            {config.title}
          </h3>
          {config.subtitle && (
            <p
              className={`text-sm ${variant === "hero" ? "text-white/60" : "text-gray-500"}`}
            >
              {config.subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="EMAIL"
          required
          placeholder={config.placeholder}
          className={`flex-1 ${
            variant === "hero"
              ? "bg-white/90 text-gray-900 placeholder:text-gray-500 border-white/20"
              : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-200"
          }`}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={`font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${config.buttonClass}`}
        >
          <span className="mr-2">{config.icon}</span>
          {status === "loading" ? "Enviando..." : config.buttonText}
        </Button>
      </form>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm text-center p-3 rounded-lg ${
            variant === "hero"
              ? "text-green-400 bg-green-400/10"
              : "text-green-600 bg-green-50"
          }`}
        >
          {config.successMessage}
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm text-center p-3 rounded-lg ${
            variant === "hero" ? "text-red-400 bg-red-400/10" : "text-red-600 bg-red-50"
          }`}
        >
          ⚠️ Hubo un error, intenta de nuevo.
        </motion.div>
      )}

      <p
        className={`text-xs text-center ${
          variant === "hero" ? "text-white/60" : "text-gray-500"
        }`}
      >
        {config.footerText}
      </p>
    </motion.div>
  )
}
