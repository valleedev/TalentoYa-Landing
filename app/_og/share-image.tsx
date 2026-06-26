import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function toDataUri(relPath: string) {
  const data = await readFile(join(process.cwd(), "public", relPath))
  return `data:image/png;base64,${data.toString("base64")}`
}

export async function renderShareImage() {
  const [logo, mockup] = await Promise.all([
    toDataUri("assets/logos/logo-negativo-azul-simple.png"),
    toDataUri("assets/app/dashboard-empleados.png"),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 64,
          background:
            "linear-gradient(135deg, #082060 0%, #0758B8 60%, #075ED0 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="TalentoYa" height={52} style={{ height: 52 }} />
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            marginTop: 36,
            maxWidth: 720,
            letterSpacing: -1,
          }}
        >
          Gestiona tu equipo con orden y claridad
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 27,
            opacity: 0.88,
            marginTop: 22,
            maxWidth: 640,
            lineHeight: 1.35,
          }}
        >
          Expediente digital, contratos y documentos — todo en un solo lugar. Sin
          Excel, sin carpetas físicas.
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mockup}
          alt="Panel de TalentoYa"
          width={620}
          style={{
            position: "absolute",
            right: -60,
            bottom: -70,
            width: 620,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            transform: "rotate(-7deg)",
          }}
        />
      </div>
    ),
    { ...size },
  )
}
