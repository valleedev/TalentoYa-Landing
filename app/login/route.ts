import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export function GET() {
  const appUrl =
    process.env.TALENTOYA_APP_URL ??
    process.env.NEXT_PUBLIC_TALENTOYA_APP_URL ??
    "http://localhost:3001"

  return NextResponse.redirect(new URL("/sign-in", appUrl), 307)
}
