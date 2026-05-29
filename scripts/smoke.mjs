const baseUrl = process.env.SMOKE_BASE_URL ?? "http://localhost:3000"
const appUrl =
  process.env.NEXT_PUBLIC_TALENTOYA_APP_URL ?? "http://localhost:3001"

const checks = [
  { path: "/", status: 200 },
  {
    path: "/login",
    status: [307, 308],
    location: new URL("/sign-in", appUrl).toString(),
  },
  { path: "/assets/logos/logo1-negativo-talentoya.png", status: 200 },
  { path: "/Plantilla_Nomina_TalentoYa_Bonita.xlsx", status: 200 },
  { path: "/__smoke_missing__", status: 404 },
]

for (const check of checks) {
  const response = await fetch(new URL(check.path, baseUrl), {
    redirect: "manual",
  })
  const expected = Array.isArray(check.status) ? check.status : [check.status]

  if (!expected.includes(response.status)) {
    throw new Error(
      `${check.path} returned ${response.status}; expected ${expected.join(
        " or "
      )}`
    )
  }

  if (check.location) {
    const location = response.headers.get("location")

    if (location !== check.location) {
      throw new Error(
        `${check.path} redirected to ${location}; expected ${check.location}`
      )
    }
  }
}

console.log(`Landing smoke checks passed for ${baseUrl}`)
