"use client";

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
                <motion.p 
                  className="text-white/80 text-lg font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Gestión de talento humano
                </motion.p>
                <motion.h1 
                  className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  El Software de gestión de talento humano{" "}
                  <span style={{ color: "rgb(62, 60, 255)" }}>más fácil y rápido.</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/80 leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Centraliza contratos, nómina, vacaciones y seguridad social en un solo lugar
                  fácil de usar. Diseñado especialmente para independientes y microempresas en Colombia.
                </motion.p>
              </div>

              {/* Mailchimp Form */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                
                <form
                  action="http://eepurl.com/jl3yJ6"
                  method="post"
                  target="_blank"
                  className="max-w-lg"
                >
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full min-h-[60px] border-2 border-blue-500/20 hover:border-blue-400/40 cursor-pointer"
                  >
                    🚀 Únete a la lista de espera
                  </Button>
                </form>
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
                src="/modern-hr-dashboard-mockup-with-colombian-business.png"
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
              Todo lo que necesitas para gestionar tu talento humano
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Simplifica la gestión de tu equipo con herramientas diseñadas para el mercado colombiano
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
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">Gestión de contratos</CardTitle>
                  <CardDescription className="text-pretty">
                    Crea y gestiona contratos laborales conforme a la legislación colombiana.
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
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">Cálculos de nómina</CardTitle>
                  <CardDescription className="text-pretty">
                    Automatiza los cálculos de salarios, deducciones y prestaciones sociales.
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
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">Control de vacaciones</CardTitle>
                  <CardDescription className="text-pretty">
                    Lleva el control de las vacaciones y permisos de tus empleados fácilmente.
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
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">100% en la nube</CardTitle>
                  <CardDescription className="text-pretty">
                    Accede desde cualquier lugar y mantén tus datos seguros en la nube.
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
        className="py-20 px-4"
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
              Cumple con todas las regulaciones laborales vigentes en Colombia
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
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contratos conforme a la legislación colombiana</h3>
                <p className="text-muted-foreground text-pretty">
                  Plantillas pre-configuradas que cumplen con el Código Sustantivo del Trabajo de Colombia.
                </p>
              </div>
            </motion.div>

            <Separator />

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Receipt className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Generación de desprendibles de pago en PDF</h3>
                <p className="text-muted-foreground text-pretty">
                  Crea desprendibles de pago profesionales con todos los detalles requeridos por la ley colombiana.
                </p>
              </div>
            </motion.div>

            <Separator />

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Bell className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Alertas de pago de seguridad social</h3>
                <p className="text-muted-foreground text-pretty">
                  Nunca olvides un pago importante con recordatorios automáticos de EPS, pensión y ARL.
                </p>
              </div>
            </motion.div>

            <Separator />

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Diseñado para independientes y microempresas</h3>
                <p className="text-muted-foreground text-pretty">
                  Interfaz simple y precios accesibles, perfectos para pequeños negocios que están creciendo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              ¿Listo para simplificar tu gestión de talento humano?
            </h2>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Únete a cientos de empresarios colombianos que ya confían en TalentoYa para gestionar su equipo.
            </p>
              {/* Mailchimp Form */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <form
                  action="http://eepurl.com/jl3yJ6"
                  method="post"
                  target="_blank"
                  className="max-w-2xl mx-auto"
                >
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full min-h-[60px] border-2 border-white/20 hover:border-white/40 cursor-pointer"
                  >
                    🎯 ¡Comenzar ahora!
                  </Button>
                </form>
              </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-4 bg-muted/30 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo1-talentoya.png" 
                  alt="Logo TalentoYa" 
                  className="w-50 h-auto" 
                />
              </div>

              <p className="text-muted-foreground text-pretty">
                La plataforma de gestión de talento humano más simple y económica para empresarios colombianos.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:vallebarbaranj@gmail.com" className="hover:text-primary transition-colors">
                    vallebarbaranj@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Síguenos</h3>
              {/* <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div> */}
            </motion.div>
          </motion.div>

          <Separator className="my-8" />

          <motion.div 
            className="text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>© 2025 TalentoYa. Todos los derechos reservados. </p>
            <a href="https://sebasvalle.vercel.app" target="blank" className="text-primary">Conoce al desarrollador</a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
