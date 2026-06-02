import type { LucideIcon } from "lucide-react"
import {
  Bell,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Cloud,
  FileText,
  Receipt,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#demo", label: "Demo" },
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

export interface DemoBullet {
  icon: LucideIcon
  text: string
}

export const demoSection = {
  heading: "Agenda tu demo en minutos",
  subheading:
    "Te mostramos cómo TalentoYa transforma tu nómina en una llamada de 15 minutos. Sin compromiso.",
  bulletsHeading: "¿Qué pasa en la demo?",
  bullets: [
    { icon: Calendar, text: "Elige el horario que más te convenga" },
    { icon: Users, text: "15 minutos, sin presión de ventas" },
    { icon: CheckCircle, text: "Configuramos TalentoYa con tu caso real" },
    { icon: Zap, text: "Si no es para ti, te ayudamos igual" },
  ] as DemoBullet[],
  socialProof: "Más de 50 empresas colombianas ya confían en TalentoYa",
  formHeading: "Solicita tu demo personalizada",
  formSubheading: "Te contactaremos en menos de 2 horas",
  successMessage:
    "¡Gracias! Te contactaremos en menos de 2 horas para agendar tu demo.",
}

export const footerQuickLinks: NavLink[] = [
  { href: "#demo", label: "Agenda una demo" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "/login", label: "Iniciar sesión" },
]
