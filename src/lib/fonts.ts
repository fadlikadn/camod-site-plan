// import { Alexandria as FontSans } from "next/font/google"
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  // fallback: ["sans-serif"],
})

export const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
