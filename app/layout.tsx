import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
        className={`${poppins.variable} bg-white text-black antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
