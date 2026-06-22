import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("dark", "antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body suppressHydrationWarning>

        <ThemeProvider>{children}</ThemeProvider>
         
      
      </body>
    </html>
  )
}
