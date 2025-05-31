import type { Metadata } from "next"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { fontSans, fontSAP72, fontSAP72Mono } from "@/lib/fonts"

import "@/app/tokens.css";
import "@/app/tailwind.css";


export const metadata: Metadata = {
  title: "SAP Registry",
  description:
    "SAP Registry, a design system for SAP",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontSAP72.variable,
        fontSAP72Mono.variable,
        "bg-background text-foreground"
      )}
    >
      <body>{children}</body>
    </html>
  )
}