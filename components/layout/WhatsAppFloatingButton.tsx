'use client'

import { trackWhatsAppClick } from '@/lib/analytics'

export default function WhatsAppFloatingButton() {
  function handleClick() {
    trackWhatsAppClick('floating-button')
  }

  return (
    <a
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-2xl">✆</span>
    </a>
  )
}
