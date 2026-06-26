import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TalentoYa | Gestión de talento humano",
    short_name: "TalentoYa",
    description:
      "Gestión de talento humano para independientes y microempresas en Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#082060",
    lang: "es-CO",
    icons: [
      {
        src: "/assets/logos/isotipo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/logos/isotipo-redondeado.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
