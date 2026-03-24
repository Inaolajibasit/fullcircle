import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navigation/Navbar'

export const metadata: Metadata = {
  title: 'FullCircle Global | Production Company 2025',
  description: 'FOMO-driven content for brands, music artists, and festivals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
