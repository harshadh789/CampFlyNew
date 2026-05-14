import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'CampFly | Travel Beyond Tourist Spots',
  description:
    'Premium curated domestic and international travel experiences for couples, families, and explorers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-white text-black antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
