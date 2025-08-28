"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MailchimpHeroForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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
    }, 1000) // Pequeña demora para mostrar el loading
  }

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <h3 className="text-sm font-medium text-white/80">
        Únete gratis hoy y recibe acceso anticipado + un beneficio exclusivo por ser de los primeros 10 registrados.
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="EMAIL"
          required
          placeholder="Tu correo electrónico"
          className="flex-1 bg-white/90 text-gray-900 placeholder:text-gray-500"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition"
        >
          {status === "loading" ? "Enviando..." : "Unirme"}
        </Button>
      </form>

      {status === "success" && (
        <p className="text-sm text-green-400 text-center">
          🎉 ¡Te has unido a la lista!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          ⚠️ Hubo un error, intenta de nuevo.
        </p>
      )}

      <p className="text-xs text-white/60 text-center">
        Sin spam, solo información relevante ✨
      </p>
    </motion.div>
  )
}
