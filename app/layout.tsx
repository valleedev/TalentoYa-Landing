import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'TalentoYa | Gestión de talento humano y nómina para microempresas',
  description:
    'TalentoYa es un SaaS diseñado para independientes y microempresas en Colombia. Administra contratos, pagos de seguridad social, turnos y vacaciones de manera simple y confiable.',
  generator: 'Next.js + v0.app',
  keywords: [
    'gestión de talento humano',
    'nómina Colombia',
    'seguridad social',
    'RRHH SaaS',
    'control de turnos',
    'vacaciones empleados',
    'software recursos humanos',
    'microempresas Colombia',
    'independientes',
  ],
  authors: [{ name: 'TalentoYa | J. Sebastian Valle Barbaran' }],
  creator: 'TalentoYa | J. Sebastian Valle Barbaran',
  publisher: 'TalentoYa | J. Sebastian Valle Barbaran',
  metadataBase: new URL('https://tusitio.com'), // cámbialo por tu dominio real
  openGraph: {
    title: 'TalentoYa | Gestión de talento humano y nómina para microempresas',
    description:
      'Simplifica la administración de tu equipo: contratos, nómina, seguridad social, turnos y vacaciones. Diseñado para independientes y microempresas en Colombia.',
    url: 'https://tusitio.com',
    siteName: 'TalentoYa | J. Sebastian Valle Barbarán',
    images: [
      {
        url: 'https://tusitio.com/og-image.jpg', // cambia por la ruta real
        width: 1200,
        height: 630,
        alt: 'TalentoYa gestión de talento humano',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentoYa | Gestión de talento humano y nómina para microempresas e independientes.',
    description:
      'Un SaaS hecho para independientes y microempresas en Colombia. Administra contratos, nómina y seguridad social fácilmente.',
    images: ['https://tusitio.com/og-image.jpg'],
    creator: '@ValleeDev', 
  },
  icons: {
    icon: '/logo2-negativo-talentoya.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A2342', // azul corporativo
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
