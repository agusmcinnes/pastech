import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pastech | Tecnología para gestionar el pasto con precisión",
  description:
    "Medimos, analizamos y gestionamos el pasto con herramientas conectadas que transforman datos en decisiones productivas y sustentables.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  )
}
