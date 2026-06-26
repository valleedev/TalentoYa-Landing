import type { LucideIcon } from "lucide-react"
import {
  Calculator,
  Calendar,
  CheckCircle,
  FileCheck,
  FileText,
  User,
  Users,
  Zap,
} from "lucide-react"

export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#caracteristicas", label: "Características" },
  { href: "/#planes", label: "Planes" },
]

export const dashboardShowcase = {
  src: "/assets/app/dashboard-empleados.png",
  alt: "Panel de TalentoYa — listado de empleados",
}

export type ColorKey = "blue" | "green" | "purple" | "orange"

export interface Benefit {
  icon: string
  color: ColorKey
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: "/assets/icons/benefits/expediente-digital.png",
    color: "blue",
    title: "Expediente digital completo",
    description:
      "Toda la información de cada empleado centralizada: datos personales, documentos, historial y contratos en un perfil organizado.",
  },
  {
    icon: "/assets/icons/benefits/contratos-legales.png",
    color: "green",
    title: "Gestión de contratos",
    description:
      "Almacena contratos digitales, recibe alertas de vencimiento y lleva el historial completo por empleado — sin papeles ni carpetas físicas.",
  },
  {
    icon: "/assets/icons/benefits/certificados.png",
    color: "purple",
    title: "Documentos digitales",
    description:
      "Almacena, organiza y accede a certificados laborales, contratos y soportes de nómina desde un solo lugar — sin carpetas físicas ni extravíos.",
  },
  {
    icon: "/assets/icons/benefits/historial-laboral.png",
    color: "orange",
    title: "Historial laboral completo",
    description:
      "Registro permanente de salarios, cargos, cambios de contrato y documentos adjuntos. Sin papeles, sin extravíos.",
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
    icon: User,
    color: "blue",
    title: "Gestión de talento humano",
    description:
      "Centraliza el expediente digital de cada empleado: datos personales, contacto, información bancaria y documentos. Todo el equipo en un solo lugar, accesible desde cualquier dispositivo.",
    badge: "Un solo lugar para todo el equipo",
  },
  {
    icon: FileText,
    color: "green",
    title: "Control laboral",
    description:
      "Gestiona asistencias, permisos y vacaciones de todo el equipo desde un solo lugar. Reportes claros y al día para tomar mejores decisiones.",
    badge: "Cumple con la ley laboral colombiana",
  },
  {
    icon: FileCheck,
    color: "purple",
    title: "Manejo de administración",
    description:
      "Organiza la información de tu empresa sin Excel ni carpetas físicas. Historial de cargos, salarios y cambios de contrato siempre actualizado y a la mano.",
    badge: "Sin errores, sin demoras",
  },
  {
    icon: Calculator,
    color: "orange",
    title: "Gestión de pagos",
    description:
      "El pago de nómina fluye desde el expediente de cada empleado. Sin doble digitación, sin inconsistencias.",
    badge: "Pensado para microempresas colombianas",
  },
]

export interface Stat {
  value: string
  label: string
  color: "blue" | "green" | "purple"
}

export const stats: Stat[] = [
  { value: "50+", label: "Empresas confían en TalentoYa", color: "blue" },
  { value: "500+", label: "Empleados con expediente digital", color: "green" },
  { value: "0", label: "Documentos extraviados", color: "purple" },
]

export interface DemoBullet {
  icon: LucideIcon
  text: string
}

export const demoSection = {
  heading: "Agenda una demostración",
  subheading:
    "Te mostramos cómo centralizar el expediente de cada empleado en minutos. Sin compromiso.",
  bulletsHeading: "¿Qué pasa en la demo?",
  bullets: [
    { icon: Calendar, text: "Elige el horario que más te convenga" },
    { icon: Users, text: "15 minutos, sin presión de ventas" },
    { icon: CheckCircle, text: "Configuramos TalentoYa con tu equipo real" },
    { icon: Zap, text: "Si no es para ti, te ayudamos igual" },
  ] as DemoBullet[],
  socialProof: "Más de 50 empresas colombianas ya confían en TalentoYa",
  formHeading: "Solicita tu demo personalizada",
  formSubheading: "Te contactaremos en menos de 2 horas",
  successMessage:
    "¡Gracias! Te contactaremos en menos de 2 horas para agendar tu demo.",
}

export const footerQuickLinks: NavLink[] = [
  { href: "/#planes", label: "Planes" },
  { href: "/#caracteristicas", label: "Características" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/login", label: "Iniciar sesión" },
]
