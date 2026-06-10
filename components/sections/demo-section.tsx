"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { demoSection } from "@/lib/data"
import { CALENDLY_URL, DEMO_EMAIL } from "@/lib/constants"

const SHOW_CALENDLY = Boolean(CALENDLY_URL)

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  empresa: z.string().min(1, "Ingresa el nombre de tu empresa"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  mensaje: z.string().optional(),
})

type FormData = z.infer<typeof schema>

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Demo TalentoYa — " + data.empresa)
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nEmail: ${data.email}\nTeléfono: ${data.telefono || "—"}\n\n${data.mensaje || ""}`
    )
    window.open(`mailto:${DEMO_EMAIL}?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 bg-[#E8F0F8] rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-[#0758B8]" />
        </div>
        <p className="text-gray-700 font-medium max-w-xs">{demoSection.successMessage}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input id="nombre" placeholder="Tu nombre" {...register("nombre")} />
          {errors.nombre && (
            <p className="text-xs text-red-500">{errors.nombre.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="empresa">Empresa *</Label>
          <Input id="empresa" placeholder="Nombre de tu empresa" {...register("empresa")} />
          {errors.empresa && (
            <p className="text-xs text-red-500">{errors.empresa.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" placeholder="tu@empresa.com" {...register("email")} />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="telefono">Teléfono (opcional)</Label>
        <Input id="telefono" type="tel" placeholder="+57 300 000 0000" {...register("telefono")} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mensaje">Cuéntanos sobre tu empresa (opcional)</Label>
        <Textarea
          id="mensaje"
          placeholder="¿Cuántos empleados tienes? ¿Qué desafíos enfrenta tu nómina?"
          rows={3}
          {...register("mensaje")}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0758B8] hover:bg-[#082060] text-white font-semibold py-3 text-base"
      >
        Agendar mi demo
      </Button>

      <p className="text-xs text-gray-400 text-center">
        Sin compromiso • Te respondemos en menos de 2 horas
      </p>
    </form>
  )
}

function CalendlyWidget() {
  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
    />
  )
}

export function DemoSection() {
  return (
    <motion.section
      id="demo"
      className="py-24 px-4 bg-gray-50"
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
          <div className="flex justify-center mb-4">
            <img
              src="/assets/talen/talen-calendario.png"
              alt="Talen con calendario"
              className="w-20 h-20 object-contain"
              width={80}
              height={80}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#061C4A] text-balance">
            {demoSection.heading}
          </h2>
          <p className="text-xl text-[#061C4A]/60 max-w-2xl mx-auto text-pretty">
            {demoSection.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {demoSection.bulletsHeading}
              </h3>
              <ul className="space-y-4">
                {demoSection.bullets.map((bullet, i) => {
                  const Icon = bullet.icon
                  return (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-[#E8F0F8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-[#0758B8]" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed pt-2">
                        {bullet.text}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>
            </div>

            <div className="bg-[#E8F0F8] border border-[#58B5E2]/30 rounded-xl p-6">
              <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                &ldquo;Antes me tomaba todo un día hacer la nómina de mis 8 empleados. Ahora con
                TalentoYa lo hago en 30 minutos y sin errores.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                  CM
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Carlos Muñoz</div>
                  <div className="text-gray-500 text-xs">Panadería San Carlos, Medellín</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">{demoSection.socialProof}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">{demoSection.formHeading}</h3>
                <p className="text-sm text-gray-500 mt-1">{demoSection.formSubheading}</p>
              </div>
              {SHOW_CALENDLY ? <CalendlyWidget /> : <ContactForm />}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
