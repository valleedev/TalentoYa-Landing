"use client";

import MailchimpHeroForm from "@/components/MailchimpHeroForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import ParticlesBackground from "@/components/particles-background"
import { motion } from "framer-motion"
import {
  Users,
  Calculator,
  Calendar,
  Cloud,
  FileText,
  Receipt,
  Bell,
  Building2,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle,
  Star,
  Download,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Quote,
  ArrowRight,
} from "lucide-react"

export default function TalentoYaLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/95 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
              <img
                src="/logo1-negativo-talentoya.png"
                alt="Dashboard de TalentoYa"
                className="w-50"
              />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#beneficios" className="text-white/90 hover:text-white transition-colors">
              Beneficios
            </a>
            <a href="#caracteristicas" className="text-white/90 hover:text-white transition-colors">
              Características
            </a>
            <a href="#planes" className="text-white/90 hover:text-white transition-colors">
              Planes
            </a>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <a href="#demo">Demo Gratis</a>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="hero-gradient py-20 px-4 relative min-h-[80vh] flex items-center overflow-hidden"
      >
        {/* Partículas de fondo */}
        <ParticlesBackground />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                {/* Sello de confianza */}
                <motion.div 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-white/90 font-medium">Hecho en Colombia para microempresas y PYMEs</span>
                </motion.div>

                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Ahorra hasta{" "}
                  <span style={{ color: "rgb(62, 60, 255)" }}>80% de tiempo</span>{" "}
                  en tu nómina
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/80 leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  La plataforma de gestión de talento humano más simple para microempresas colombianas. 
                  <strong className="text-white"> Cumple 100% con la ley laboral</strong> y elimina el papeleo.
                </motion.p>
              </div>

              {/* CTAs dobles */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg" asChild>
                  <a href="#demo">
                    <Zap className="h-5 w-5 mr-2" />
                    Solicita tu demo gratis
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg" asChild>
                  <a href="#plantilla">
                    <Download className="h-5 w-5 mr-2" />
                    Descarga plantilla gratis
                  </a>
                </Button>
              </motion.div>

              {/* Microcopy de confianza */}
              <motion.div 
                className="flex items-center gap-2 text-white/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Sin permanencia • Cancela cuando quieras • Soporte en español</span>
              </motion.div>
            </motion.div>

            {/* Imagen más pequeña */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/empleados.jpg"
                alt="Dashboard de TalentoYa"
                className="max-w-md w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section 
        id="beneficios" 
        className="py-20 px-4 bg-background"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Beneficios que transformarán tu negocio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Resultados concretos desde el primer día de uso
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">Ahorra hasta 80% de tiempo</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Lo que antes te tomaba horas, ahora son minutos. Automatiza cálculos y genera documentos al instante.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-green-900">100% legal en Colombia</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Cumple automáticamente con todas las regulaciones laborales colombianas vigentes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-purple-900">Reduce errores a 0%</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Elimina errores costosos en nómina con cálculos automáticos precisos.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Cloud className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-900">Acceso desde cualquier lugar</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Tu información segura en la nube, disponible 24/7 desde cualquier dispositivo.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="caracteristicas" 
        className="py-20 px-4 bg-gray-50"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Características diseñadas para el mercado colombiano
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cada funcionalidad está pensada para cumplir 100% con la ley laboral de Colombia
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Contratos automáticos 100% legales</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Plantillas pre-configuradas que cumplen con el Código Sustantivo del Trabajo de Colombia.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Cumple con la ley laboral colombiana</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Receipt className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Desprendibles de pago profesionales</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Genera desprendibles en PDF con todos los detalles requeridos por la ley colombiana en segundos.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Formato oficial colombiano</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Alertas inteligentes de seguridad social</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nunca olvides un pago de EPS, pensión y ARL con recordatorios automáticos y fechas de vencimiento.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Evita multas y sanciones</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pensado para microempresas y PYMEs</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Interfaz simple, precios accesibles y funciones específicas para pequeños negocios en crecimiento.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Diseñado para empresarios colombianos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Prueba Social / Testimonio */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ya confían en TalentoYa
            </h2>
            
            {/* Testimonio destacado */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="h-12 w-12 text-blue-400 mb-6 mx-auto" />
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "Antes me tomaba todo un día hacer la nómina de mis 8 empleados. Ahora con TalentoYa lo hago en 30 minutos y sin errores. Mi contador está feliz porque todo llega perfecto."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                  CM
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">Carlos Muñoz</div>
                  <div className="text-gray-600">Dueño de Panadería San Carlos, Medellín</div>
                </div>
              </div>
            </motion.div>

            {/* Indicadores de confianza */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Empresas confían en nosotros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Empleados gestionados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-gray-600">Errores reportados</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Lead Magnet Section */}
      <motion.section 
        id="plantilla"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Descarga gratis nuestra plantilla de liquidación laboral
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Plantilla en Excel que cumple 100% con la ley colombiana. Calcula automáticamente 
                cesantías, intereses, prima de servicios y vacaciones.
              </p>
            </div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Download className="h-8 w-8 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Plantilla de Liquidación Laboral</h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Cálculo automático de prestaciones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% legal en Colombia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Incluye manual de uso</span>
                    </li>
                  </ul>
                </div>

                {/* Formulario Lead Magnet */}
                <MailchimpHeroForm variant="leadMagnet" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Planes y Precios */}
      <motion.section 
        id="planes"
        className="py-20 px-4 bg-white"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Planes diseñados para tu negocio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Precios justos y transparentes. Sin sorpresas, sin letra pequeña.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Plan Básico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-6 h-full hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">Básico</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">$49.900</div>
                    <div className="text-gray-500">COP/mes</div>
                  </div>
                  <CardDescription className="text-lg">
                    Perfecto para emprendedores
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hasta 3 empleados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Nómina básica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Contratos básicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Soporte por email</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Empieza ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan PyME */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-blue-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">PyME</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">$89.900</div>
                    <div className="text-gray-500">COP/mes</div>
                  </div>
                  <CardDescription className="text-lg">
                    Ideal para pequeñas empresas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hasta 15 empleados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Nómina completa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Todos los contratos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Alertas automáticas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Soporte prioritario</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    Empieza ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan Pro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-6 h-full hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">$149.900</div>
                    <div className="text-gray-500">COP/mes</div>
                  </div>
                  <CardDescription className="text-lg">
                    Para empresas en crecimiento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Empleados ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Funciones avanzadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Reportes detallados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>API integración</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Soporte 24/7</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Empieza ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Garantía */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Garantía de 30 días - Si no estás satisfecho, te devolvemos el dinero</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="demo"
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Título y descripción principal */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
                ¿Listo para transformar tu gestión de nómina?
              </h2>
              <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto leading-relaxed">
                Únete a más de 50 empresarios colombianos que ya ahorran tiempo y dinero con TalentoYa.
                <br />
                <strong className="text-white">Sin permanencia, sin complicaciones.</strong>
              </p>
            </div>

            {/* Beneficios destacados */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm md:text-base">Configuración en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm md:text-base">Prueba gratis 14 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm md:text-base">Soporte en español</span>
              </div>
            </motion.div>

            {/* Formulario principal CTA */}
            <motion.div 
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <Zap className="h-12 w-12 text-yellow-300 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">
                      Solicita tu demo personalizada
                    </h3>
                    <p className="text-white/80 text-sm">
                      Te mostraremos cómo TalentoYa puede transformar tu negocio en una llamada de 15 minutos
                    </p>
                  </div>
                  
                  <MailchimpHeroForm variant="cta" showTitle={false} />
                  
                  <div className="text-center text-white/70 text-xs">
                    Al solicitar tu demo aceptas que te contactemos para agendar una presentación personalizada
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Llamada de urgencia */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-6 py-3">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span className="text-white font-medium text-sm">
                  Oferta limitada: 20% de descuento en tu primer mes
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
{/* Footer */}
      <motion.footer 
        className="py-16 px-4 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Logo y descripción */}
            <motion.div 
              className="space-y-4 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo1-negativo-talentoya.png" 
                  alt="Logo TalentoYa" 
                  className="w-50 h-auto" 
                />
              </div>
              <p className="text-gray-300 text-pretty leading-relaxed max-w-md">
                La plataforma de gestión de talento humano más simple y económica para empresarios colombianos. 
                Simplifica tu nómina, cumple la ley y enfócate en hacer crecer tu negocio.
              </p>
              
              {/* Redes sociales */}
              <div className="flex gap-4 pt-4">
                {/* <a 
                  href="https://linkedin.com/company/talentoya" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a> */}
                {/* <a 
                  href="https://facebook.com/talentoya" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a> */}
                <a 
                  href="https://www.instagram.com/talento.ya/" 
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg text-white">Enlaces rápidos</h3>
              <div className="space-y-3">
                <a href="#planes" className="block text-gray-300 hover:text-white transition-colors">
                  Planes y Precios
                </a>
                <a href="#demo" className="block text-gray-300 hover:text-white transition-colors">
                  Demo Gratis
                </a>
                <a href="#plantilla" className="block text-gray-300 hover:text-white transition-colors">
                  Plantilla Gratis
                </a>
                <a href="#caracteristicas" className="block text-gray-300 hover:text-white transition-colors">
                  Características
                </a>
              </div>
            </motion.div>

            {/* Contacto */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg text-white">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:info.talentoya@gmail.com" className="hover:text-white transition-colors">
                    info.talentoya@gmail.com
                  </a>
                </div>
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">Horarios de atención:</div>
                  <div className="text-sm">Lunes a Viernes</div>
                  <div className="text-sm">8:00 AM - 6:00 PM COT</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <Separator className="my-8 bg-gray-700" />

          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm">
              © 2025 TalentoYa. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="https://sebasvalle.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Conoce al desarrollador
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
      
    </div>
  )
}
