import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Telecom Normas – Treinamento em Fibra Óptica",
  description:
    "Cursos práticos e certificados em fibra óptica, FTTH, redes ópticas e telecomunicações. Aprenda com especialistas do setor.",
  icons: {
    icon: [
      { url: "/icon.ico" }, // favicon padrão
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-icon.png", // recomendado 180x180 para iOS
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* favicon principal */}
        <link rel="icon" href="/icon.ico" />
        {/* ícones adicionais para melhor visibilidade */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon-64x64.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}