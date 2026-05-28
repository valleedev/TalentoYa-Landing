"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: connect auth
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#120826]">
      <div className="mb-8">
        <Image
          src="/assets/logos/logo3-negativo-talentoya.png"
          alt="TalentoYa"
          width={260}
          height={260}
          className="-mb-4"
          priority
        />
      </div>

      <div className="bg-white rounded-2xl px-10 py-9 w-full max-w-[500px] shadow-2xl">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#555] text-sm">
              Correo
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 text-gray-800 focus-visible:ring-violet-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#555] text-sm">
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 text-gray-800 pr-24 focus-visible:ring-violet-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium hover:text-gray-700"
                tabIndex={-1}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-2 border-gray-300 rounded-sm accent-violet-600 cursor-pointer"
              />
              <span className="text-[#555] text-sm">Recordarme</span>
            </label>

            <Button
              type="submit"
              className="bg-[#6600ff] hover:bg-[#5500dd] active:bg-[#4400cc] text-white font-bold tracking-widest uppercase text-sm"
            >
              Inicia Sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
