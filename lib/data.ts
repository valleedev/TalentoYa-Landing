import type { LucideIcon } from "lucide-react"
import {
  Archive,
  Award,
  Calculator,
  Calendar,
  CheckCircle,
  FileCheck,
  FileText,
  FolderOpen,
  Shield,
  User,
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
    icon: FolderOpen,
    color: "blue",
    title: "Expediente digital completo",
    description:
      "Toda la información de cada empleado centralizada: datos personales, documentos, historial y contratos en un perfil organizado.",
  },
  {
    icon: Shield,
    color: "green",
    title: "Contratos 100% legales",
    description:
      "Genera contratos que cumplen con el Código Sustantivo del Trabajo. Término fijo, indefinido, obra o labor — sin plantillas genéricas.",
  },
  {
    icon: Award,
    color: "purple",
    title: "Certificados en segundos",
    description:
      "Certificados laborales, de ingresos y retenciones con un clic. Formato correcto, datos precisos, sin demoras.",
  },
  {
    icon: Archive,
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
    title: "Perfil completo del empleado",
    description:
      "Centraliza datos personales, contacto de emergencia, información bancaria y documentos en un solo expediente digital accesible desde cualquier dispositivo.",
    badge: "Un solo lugar para todo el equipo",
  },
  {
    icon: FileText,
    color: "green",
    title: "Contratos y documentos digitales",
    description:
      "Plantillas pre-configuradas para término fijo, indefinido y obra o labor. Generación automática, descarga en PDF, sin errores de digitación.",
    badge: "Cumple con la ley laboral colombiana",
  },
  {
    icon: FileCheck,
    color: "purple",
    title: "Certificados y reportes laborales",
    description:
      "Genera certificados de trabajo e ingresos con los datos exactos del expediente. Profesionales, listos para entregar, en segundos.",
    badge: "Sin errores, sin demoras",
  },
  {
    icon: Calculator,
    color: "orange",
    title: "Nómina integrada al expediente",
    description:
      "El pago de nómina fluye desde el expediente de cada empleado. Sin doble digitación, sin inconsistencias, sin multas.",
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
  { href: "#planes", label: "Planes" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "/login", label: "Iniciar sesión" },
]
