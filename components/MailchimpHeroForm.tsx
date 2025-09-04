"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, Gift, Zap } from "lucide-react"

interface MailchimpHeroFormProps {
  variant?: "hero" | "leadMagnet" | "cta"
  showTitle?: boolean
}

export default function MailchimpHeroForm({ variant = "hero", showTitle = true }: MailchimpHeroFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Función para descargar la plantilla
  const downloadTemplate = () => {
    const link = document.createElement('a')
    link.href = '/Plantilla_Nomina_TalentoYa_Bonita.xlsx'
    link.download = 'Plantilla_Nomina_TalentoYa_Bonita.xlsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const form = e.currentTarget // Guardamos la referencia al formulario

    // URL de la lista
    const url =
      "https://gmail.us1.list-manage.com/subscribe/post-json?u=e1b6a1652a46e8bdbb9526208&id=974291b7f1&c=?"

    // Convertimos formData a querystring
    const params = new URLSearchParams(formData as any).toString()

    // Enviar la petición - con no-cors siempre funciona si llega al servidor
    fetch(`${url}&${params}`, {
      method: "GET",
      mode: "no-cors", 
    })

    // Como usamos no-cors, asumimos que siempre es exitoso
    setTimeout(() => {
      setStatus("success")
      form.reset()
      
      // Si es el variant leadMagnet, iniciar la descarga automáticamente
      if (variant === "leadMagnet") {
        downloadTemplate()
      }
    }, 1000) // Pequeña demora para mostrar el loading
  }

  // Configuración según variante
  const config = {
    hero: {
      title: "Sé de los primeros en acceder a TalentoYa",
      subtitle: "20% de descuento en el primer mes",
      buttonText: "Reservar mi acceso",
      placeholder: "Tu correo electrónico",
      successMessage: "🎉 ¡Te has unido a la lista!",
      footerText: "Únete a más de 50 emprendedores que ya están en lista de espera",
      icon: <Gift className="h-5 w-5" />
    },
    leadMagnet: {
      title: "Descarga tu plantilla gratis",
      subtitle: "Recibe la plantilla de liquidación laboral en tu email",
      buttonText: "Descargar gratis",
      placeholder: "Tu correo empresarial",
      successMessage: "✅ ¡Descarga iniciada! También te hemos enviado la plantilla por email",
      footerText: "100% gratis • No spam • Cancela cuando quieras",
      icon: <Download className="h-5 w-5" />
    },
    cta: {
      title: "Agenda tu demo personalizada",
      subtitle: "Te contactaremos en menos de 2 horas",
      buttonText: "Solicitar demo gratis",
      placeholder: "Tu correo empresarial",
      successMessage: "✅ ¡Perfecto! Te contactaremos pronto para agendar tu demo",
      footerText: "Demo personalizada de 15 minutos • Sin compromiso",
      icon: <Zap className="h-5 w-5" />
    }
  }

  const currentConfig = config[variant]

  return (
    <motion.div
      className="space-y-4 w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: variant === "hero" ? 1.0 : 0.2 }}
    >
      {showTitle && (
        <div className="text-center space-y-2">
          <h3 className={`font-medium ${variant === "hero" ? "text-xl text-white/80" : "text-lg text-gray-700"}`}>
            {currentConfig.title}
          </h3>
          {currentConfig.subtitle && (
            <p className={`text-sm ${variant === "hero" ? "text-white/60" : "text-gray-500"}`}>
              {currentConfig.subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="EMAIL"
          required
          placeholder={currentConfig.placeholder}
          className={`flex-1 ${
            variant === "hero" 
              ? "bg-white/90 text-gray-900 placeholder:text-gray-500 border-white/20" 
              : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-200"
          }`}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={`font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
            variant === "hero"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : variant === "leadMagnet"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {currentConfig.icon && (
            <span className="mr-2">{currentConfig.icon}</span>
          )}
          {status === "loading" ? "Enviando..." : currentConfig.buttonText}
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
          {currentConfig.successMessage}
        </motion.div>
      )}
      
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm text-center p-3 rounded-lg ${
            variant === "hero" 
              ? "text-red-400 bg-red-400/10" 
              : "text-red-600 bg-red-50"
          }`}
        >
          ⚠️ Hubo un error, intenta de nuevo.
        </motion.div>
      )}

      <p className={`text-xs text-center ${
        variant === "hero" ? "text-white/60" : "text-gray-500"
      }`}>
        {currentConfig.footerText}
      </p>
    </motion.div>
  )
}
