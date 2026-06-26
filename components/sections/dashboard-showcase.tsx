"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { dashboardShowcase } from "@/lib/data"

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  return (
    <div className="relative z-20 flex justify-center px-4 pb-12 -mt-[90px] sm:-mt-[155px] md:-mt-[190px]">
      <div ref={ref} style={{ perspective: 1200 }} className="w-full max-w-3xl">
        <motion.img
          src={dashboardShowcase.src}
          alt={dashboardShowcase.alt}
          style={{
            rotateX,
            scale,
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-auto rounded-xl border border-slate-200 shadow-2xl"
          loading="lazy"
        />
      </div>
    </div>
  )
}
