"use server"

import { supabase } from "@/lib/supabase"

export interface LeadData {
  nombre: string
  empresa: string
  telefono: string
  email: string
  plan: string
}

export async function saveLead(data: LeadData) {
  const { error } = await supabase.from("leads").insert({
    nombre: data.nombre,
    empresa: data.empresa,
    telefono: data.telefono,
    email: data.email,
    plan: data.plan,
    fuente: "landing",
  })

  if (error) throw new Error(error.message)
}
