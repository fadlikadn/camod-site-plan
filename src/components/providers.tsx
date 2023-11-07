"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

interface ProviderProps {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  )
}
