'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Domestic', href: '/domestic-packages' },
  { name: 'International', href: '/international-packages' },
  { name: 'Honeymoon', href: '/honeymoon-packages' },
  { name: 'Group Tours', href: '/group-tours' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

function CampflyLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Wing Icon SVG */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Teal feather / wing shape - layered curved strokes */}
        <path
          d="M50 85 C35 75, 15 58, 18 32 C25 48, 33 58, 45 65 Z"
          fill="#006060"
          opacity="0.6"
        />
        <path
          d="M50 85 C40 72, 28 55, 34 28 C38 45, 42 58, 52 68 Z"
          fill="#006060"
          opacity="0.8"
        />
        <path
          d="M50 85 C46 70, 42 53, 52 25 C53 42, 52 58, 60 70 Z"
          fill="#006060"
        />
        <path
          d="M50 85 C54 70, 60 54, 72 30 C68 46, 62 60, 68 72 Z"
          fill="#006060"
          opacity="0.75"
        />
        {/* Orange C arc on top */}
        <path
          d="M72 28 C65 12, 42 10, 30 22 C22 30, 22 42, 30 50"
          stroke="#faaa34"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontWeight: 800,
          fontSize: '1.4rem',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        <span style={{ color: '#006060' }}>Camp</span>
        <span style={{ color: '#faaa34' }}>fly</span>
      </span>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/">
          <CampflyLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-campfly-orange"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-campfly-orange px-6 py-2.5 font-semibold text-black transition hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-sm text-white/80 hover:text-campfly-orange"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-campfly-orange px-6 py-3 text-center font-semibold text-black"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  )
}
