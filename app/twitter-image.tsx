import { renderShareImage, size, contentType } from "./_og/share-image"

export const runtime = "nodejs"
export const alt = "TalentoYa — gestión de talento humano para microempresas"
export { size, contentType }

export default function Image() {
  return renderShareImage()
}
