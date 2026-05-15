import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

function CampflyLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Campfly"
    >
      <g transform="translate(4, 8)">
        <path d="M22 36 C14 30, 8 20, 12 8 C16 18, 20 24, 28 28 Z" fill="#006060" opacity="0.7" />
        <path d="M22 36 C18 28, 16 18, 22 6 C24 16, 25 24, 30 30 Z" fill="#006060" opacity="0.85" />
        <path d="M22 36 C22 26, 24 16, 32 8 C31 18, 29 26, 32 32 Z" fill="#006060" />
        <path d="M28 14 C22 8, 12 10, 10 18 C9 24, 13 30, 20 32" fill="none" stroke="#faaa34" strokeWidth="4" strokeLinecap="round" />
      </g>
      <text x="52" y="42" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28" fill="#ffffff">
        Camp
      </text>
      <text x="126" y="42" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28" fill="#faaa34">
        fly
      </text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <CampflyLogo className="h-10 w-auto" />
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
            <a href="https://instagram.com/campfly.in" target="_blank">
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
