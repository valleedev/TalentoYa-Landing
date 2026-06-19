import type { Metadata } from "next"
import { SiteFooter } from "@/components/sections/site-footer"
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content"
import { legalConfig, privacyPath } from "@/lib/legal"

const title = "Política de Privacidad y Tratamiento de Datos Personales | TalentoYa"
const description =
  "Conoce como TalentoYa trata datos personales en Colombia, sus roles como responsable o encargado, proveedores, derechos de titulares y canales de contacto."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: privacyPath,
  },
  openGraph: {
    title,
    description,
    url: privacyPath,
    siteName: legalConfig.tradeName,
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrivacyPolicyContent />
      <SiteFooter />
    </div>
  )
}
