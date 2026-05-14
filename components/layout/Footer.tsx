import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h2 className="font-display text-4xl font-bold">
            Camp<span className="text-campfly-orange">Fly</span>
          </h2>

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

      <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-500">
        © 2026 CampFly. Travel Beyond Tourist Spots.
      </div>
    </footer>
  )
}
