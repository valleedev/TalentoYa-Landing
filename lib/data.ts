import type { LucideIcon } from "lucide-react"
import {
  Bell,
  Building2,
  Clock,
  Cloud,
  FileText,
  Receipt,
  Shield,
  TrendingUp,
} from "lucide-react"

export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#planes", label: "Planes" },
]

export type ColorKey = "blue" | "green" | "purple" | "orange"

export interface Benefit {
  icon: LucideIcon
  color: ColorKey
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: Clock,
    color: "blue",
    title: "Ahorra hasta 80% de tiempo",
    description:
      "Lo que antes te tomaba horas, ahora son minutos. Automatiza cálculos y genera documentos al instante.",
  },
  {
    icon: Shield,
    color: "green",
    title: "100% legal en Colombia",
    description:
      "Cumple automáticamente con todas las regulaciones laborales colombianas vigentes.",
  },
  {
    icon: TrendingUp,
    color: "purple",
    title: "Reduce errores a 0%",
    description:
      "Elimina errores costosos en nómina con cálculos automáticos precisos.",
  },
  {
    icon: Cloud,
    color: "orange",
    title: "Acceso desde cualquier lugar",
    description:
      "Tu información segura en la nube, disponible 24/7 desde cualquier dispositivo.",
  },
]

export interface Feature {
  icon: LucideIcon
  color: ColorKey
  title: string
  description: string
  badge: string
}

export const features: Feature[] = [
  {
    icon: FileText,
    color: "blue",
    title: "Contratos automáticos 100% legales",
    description:
      "Plantillas pre-configuradas que cumplen con el Código Sustantivo del Trabajo de Colombia.",
    badge: "Cumple con la ley laboral colombiana",
  },
  {
    icon: Receipt,
    color: "green",
    title: "Desprendibles de pago profesionales",
    description:
      "Genera desprendibles en PDF con todos los detalles requeridos por la ley colombiana en segundos.",
    badge: "Formato oficial colombiano",
  },
  {
    icon: Bell,
    color: "orange",
    title: "Alertas inteligentes de seguridad social",
    description:
      "Nunca olvides un pago de EPS, pensión y ARL con recordatorios automáticos y fechas de vencimiento.",
    badge: "Evita multas y sanciones",
  },
  {
    icon: Building2,
    color: "purple",
    title: "Pensado para microempresas y PYMEs",
    description:
      "Interfaz simple, precios accesibles y funciones específicas para pequeños negocios en crecimiento.",
    badge: "Diseñado para empresarios colombianos",
  },
]

export interface Stat {
  value: string
  label: string
  color: "blue" | "green" | "purple"
}

export const stats: Stat[] = [
  { value: "50+", label: "Empresas confían en nosotros", color: "blue" },
  { value: "200+", label: "Empleados gestionados", color: "green" },
  { value: "0", label: "Errores reportados", color: "purple" },
]

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  badge?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Básico",
    price: "$49.900",
    period: "COP/mes",
    description: "Perfecto para emprendedores",
    features: [
      "Hasta 3 empleados",
      "Nómina básica",
      "Contratos básicos",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "PyME",
    price: "$89.900",
    period: "COP/mes",
    description: "Ideal para pequeñas empresas",
    features: [
      "Hasta 15 empleados",
      "Nómina completa",
      "Todos los contratos",
      "Alertas automáticas",
      "Soporte prioritario",
    ],
    highlighted: true,
    badge: "Más Popular",
  },
  {
    name: "Pro",
    price: "$149.900",
    period: "COP/mes",
    description: "Para empresas en crecimiento",
    features: [
      "Empleados ilimitados",
      "Funciones avanzadas",
      "Reportes detallados",
      "API integración",
      "Soporte 24/7",
    ],
    highlighted: false,
  },
]

export const footerQuickLinks: NavLink[] = [
  { href: "#planes", label: "Planes y Precios" },
  { href: "#demo", label: "Demo Gratis" },
  { href: "#plantilla", label: "Plantilla Gratis" },
  { href: "#caracteristicas", label: "Características" },
]
