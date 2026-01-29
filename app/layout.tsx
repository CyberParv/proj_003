import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bean and Brew',
  description: 'Welcome to Bean and Brew, your favorite coffee shop.',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
