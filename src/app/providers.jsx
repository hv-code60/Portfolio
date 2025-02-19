'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children, ...props }) {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  )
}