// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ConsentManager } from "@/components/consent-manager"
import { JsonLd } from "@/components/seo/json-ld"

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
  metadataBase: new URL('https://talentoya.com.co'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'TalentoYa | Gestión de talento humano y nómina para microempresas',
    description:
      'Simplifica la administración de tu equipo: contratos, nómina, seguridad social, turnos y vacaciones. Diseñado para independientes y microempresas en Colombia.',
    url: 'https://talentoya.com.co',
    siteName: 'TalentoYa | J. Sebastian Valle Barbarán',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentoYa | Gestión de talento humano y nómina para microempresas e independientes.',
    description:
      'Un SaaS hecho para independientes y microempresas en Colombia. Administra contratos, nómina y seguridad social fácilmente.',
    creator: '@ValleeDev',
  },
  icons: {
    icon: '/assets/logos/isotipo.png',
    apple: '/assets/logos/isotipo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#082060',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <JsonLd />
        {children}
        <ConsentManager />
      </body>
    </html>
  )
}
