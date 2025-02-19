import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers.jsx"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Himanshu Vashist",
  description: "Professional portfolio showcasing my work and experience",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}

