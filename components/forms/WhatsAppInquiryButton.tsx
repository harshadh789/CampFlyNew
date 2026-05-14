'use client'

import { trackWhatsAppClick } from '@/lib/analytics'

type WhatsAppInquiryButtonProps = {
  packageName?: string
}

export default function WhatsAppInquiryButton({
  packageName,
}: WhatsAppInquiryButtonProps) {
  const message = encodeURIComponent(
    `Hello CampFly, I would like to know more about ${packageName || 'your travel packages'}.`
  )

  const whatsappUrl = `https://wa.me/919000000000?text=${message}`

  function handleClick() {
    trackWhatsAppClick(packageName || 'general-inquiry')
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex rounded-full bg-green-500 px-8 py-5 font-semibold text-white transition hover:scale-105"
    >
      Chat on WhatsApp
    </a>
  )
}
