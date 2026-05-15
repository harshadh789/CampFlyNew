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

function CampflyLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Campfly"
    >
      {/* Wing / feather icon */}
      <g transform="translate(4, 8)">
        {/* Teal wing feather strokes */}
        <path d="M22 36 C14 30, 8 20, 12 8 C16 18, 20 24, 28 28 Z" fill="#006060" opacity="0.7" />
        <path d="M22 36 C18 28, 16 18, 22 6 C24 16, 25 24, 30 30 Z" fill="#006060" opacity="0.85" />
        <path d="M22 36 C22 26, 24 16, 32 8 C31 18, 29 26, 32 32 Z" fill="#006060" />
        {/* Orange C arc on top of icon */}
        <path d="M28 14 C22 8, 12 10, 10 18 C9 24, 13 30, 20 32" fill="none" stroke="#faaa34" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* Campfly text */}
      <text
        x="52"
        y="42"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#006060"
      >
        Camp
      </text>
      <text
        x="126"
        y="42"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#faaa34"
      >
        fly
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/">
          <CampflyLogo className="h-10 w-auto" />
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
            className="rounded-full bg-campfly-orange px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-4 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-white/80 hover:text-campfly-orange"
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
