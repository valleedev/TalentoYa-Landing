import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
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
      <header className="border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">TalentoYa</span>
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
            <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="hero-gradient py-20 px-4 relative min-h-[80vh] flex items-center"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-white/80 text-lg font-medium">Gestión de talento humano</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  El Software de gestión de talento humano{" "}
                  <span style={{ color: "rgb(62, 60, 255)" }}>más fácil y rápido.</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                  Centraliza contratos, nómina, vacaciones y seguridad social en un solo lugar
                  fácil de usar. Diseñado especialmente para independientes y microempresas en Colombia.
                </p>
              </div>

              {/* Mailchimp Form */}
              <div className="space-y-4 ">
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">Unirse a la lista de espera</p>
                <form
                  action="http://eepurl.com/jl3yJ6"
                  method="post"
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 w-full"
                  >
                    Únete
                  </Button>
                </form>
              </div>
            </div>

            {/* Imagen más pequeña */}
            <div className="relative flex justify-center">
              <img
                src="/modern-hr-dashboard-mockup-with-colombian-business.png"
                alt="Dashboard de TalentoYa"
                className="max-w-md w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Todo lo que necesitas para gestionar tu talento humano
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Simplifica la gestión de tu equipo con herramientas diseñadas para el mercado colombiano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-lg">Gestión de contratos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Crea y gestiona contratos de empleados en segundos con plantillas legales colombianas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-lg">Cálculo automático</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Nómina y seguridad social calculadas automáticamente según la legislación colombiana
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-lg">Control de vacaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Gestiona vacaciones, permisos y turnos de trabajo de forma intuitiva
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-lg">Todo en la nube</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Accede desde cualquier lugar, en cualquier momento, con total seguridad
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Características diseñadas para ti</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Herramientas específicas para independientes y microempresas colombianas
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Plantillas de contratos listos para usar</h3>
                <p className="text-muted-foreground text-pretty">
                  Contratos de trabajo, prestación de servicios y más, todos adaptados a la legislación colombiana
                  actual.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Receipt className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Generación de desprendibles de pago en PDF</h3>
                <p className="text-muted-foreground text-pretty">
                  Crea desprendibles de pago profesionales con todos los detalles requeridos por la ley colombiana.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Bell className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Alertas de pago de seguridad social</h3>
                <p className="text-muted-foreground text-pretty">
                  Nunca olvides un pago importante con recordatorios automáticos de EPS, pensión y ARL.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-900/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="h-4 w-4 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Diseñado para independientes y microempresas</h3>
                <p className="text-muted-foreground text-pretty">
                  Interfaz simple y precios accesibles, perfectos para pequeños negocios que están creciendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              ¿Listo para simplificar tu gestión de talento humano?
            </h2>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Únete a cientos de empresarios colombianos que ya confían en TalentoYa para gestionar su equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="tu@email.com" className="flex-1 bg-primary-foreground text-foreground" />
              <Button size="lg" variant="secondary" className="sm:w-auto">
                Comenzar gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">TalentoYa</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                La plataforma de gestión de talento humano más simple y económica para empresarios colombianos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contacto@talentoya.co" className="hover:text-primary transition-colors">
                    contacto@talentoya.co
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-muted-foreground">
            <p>© 2025 TalentoYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
