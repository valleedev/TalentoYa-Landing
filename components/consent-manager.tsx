"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Analytics } from "@vercel/analytics/next"
import { ShieldCheck } from "lucide-react"

const CONSENT_KEY = "talentoya_cookie_consent"

type Consent = "accepted" | "rejected"

export function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setConsent("accepted")
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setConsent("rejected")
  }

  return (
    <>
      {consent === "accepted" && <Analytics />}
      <AnimatePresence>
        {consent === null && pathname === "/" && (
          <CookieBanner onAccept={accept} onReject={reject} />
        )}
      </AnimatePresence>
    </>
  )
}

function CookieBanner({
  onAccept,
  onReject,
}: {
  onAccept: () => void
  onReject: () => void
}) {
  return (
    <motion.div
      role="region"
      aria-label="Preferencias de cookies"
      className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      {/* Talen peeking from top-left corner */}
      <div className="absolute -top-10 -left-2 pointer-events-none select-none z-10">
        <img
          src="/assets/talen/talen-gestion.png"
          alt=""
          aria-hidden="true"
          className="w-16 h-16 object-contain drop-shadow-lg"
          width={64}
          height={64}
        />
      </div>

      {/* Card with 3D layered shadow */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white"
        style={{
          boxShadow:
            "0 0 0 1px rgba(7,88,184,0.12), 0 4px 6px -1px rgba(6,28,74,0.08), 0 20px 50px -10px rgba(7,88,184,0.22), 0 8px 24px -4px rgba(6,28,74,0.14)",
        }}
      >
        {/* Header band */}
        <div className="bg-[#061C4A] px-5 pt-5 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-4 w-4 text-[#20C8B8] shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#20C8B8]">
              Privacidad
            </span>
          </div>
          <p className="text-white font-semibold text-sm leading-5">
            Usamos cookies para mejorar tu experiencia
          </p>
        </div>

        {/* Decorative teal stripe */}
        <div className="h-[3px] bg-gradient-to-r from-[#20C8B8] via-[#58B5E2] to-[#0758B8]" />

        {/* Body */}
        <div className="px-5 pt-4 pb-5 space-y-4">
          <p className="text-sm leading-6 text-slate-600">
            Este sitio usa cookies esenciales para operar y analíticas anónimas para entender
            cómo mejorar la experiencia. Puedes aceptar todo o quedarte solo con lo
            indispensable. Tu elección se guarda en tu navegador.{" "}
            <a
              href="/politica-de-privacidad#cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0758B8] font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0758B8]/50"
            >
              Saber más
            </a>
            .
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={onAccept}
              className="w-full rounded-xl bg-[#0758B8] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#082060] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0758B8]/50"
            >
              Aceptar todo
            </button>
            <button
              onClick={onReject}
              className="w-full rounded-xl border border-[#E8F0F8] bg-[#F7FBFF] py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-[#E8F0F8] hover:text-[#061C4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0758B8]/50"
            >
              Solo esenciales
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  )
}
