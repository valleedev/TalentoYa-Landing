import { redirect } from "next/navigation"

export default function LoginPage() {
  const appUrl =
    process.env.NEXT_PUBLIC_TALENTOYA_APP_URL ?? "http://localhost:3001"

  redirect(new URL("/sign-in", appUrl).toString())
}
