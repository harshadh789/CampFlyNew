import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

function CampflyLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 85 C35 75, 15 58, 18 32 C25 48, 33 58, 45 65 Z" fill="#006060" opacity="0.6" />
        <path d="M50 85 C40 72, 28 55, 34 28 C38 45, 42 58, 52 68 Z" fill="#006060" opacity="0.8" />
        <path d="M50 85 C46 70, 42 53, 52 25 C53 42, 52 58, 60 70 Z" fill="#006060" />
        <path d="M50 85 C54 70, 60 54, 72 30 C68 46, 62 60, 68 72 Z" fill="#006060" opacity="0.75" />
        <path d="M72 28 C65 12, 42 10, 30 22 C22 30, 22 42, 30 50" stroke="#faaa34" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontWeight: 800,
          fontSize: '1.4rem',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        <span style={{ color: '#ffffff' }}>Camp</span>
        <span style={{ color: '#faaa34' }}>fly</span>
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <CampflyLogo />
          <p className="mt-6 leading-relaxed text-neutral-400">
            Premium curated travel experiences for couples, families, and
            explorers across domestic and international destinations.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-4 text-neutral-400">
            <Link href="/">Home</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/honeymoon-packages">Honeymoon</Link>
            <Link href="/group-tours">Group Tours</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-semibold">Contact</h3>
          <div className="space-y-5 text-neutral-400">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 90000 00000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>hello@campfly.in</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-5 text-neutral-300">
            <a href="https://instagram.com/campfly.in" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Campfly Private Limited. All rights reserved.
      </div>
    </footer>
  )
}
