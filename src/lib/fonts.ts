import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// SAP 72 font family
export const fontSAP72 = localFont({
  src: [
    {
      path: "../../public/fonts/72-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/72-SemiboldDuplex.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/72-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sap-72",
})

// SAP 72 Mono font family
export const fontSAP72Mono = localFont({
  src: [
    {
      path: "../../public/fonts/72Mono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sap-72-mono",
}) 