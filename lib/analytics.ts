export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number>
) => {
  if (typeof window === 'undefined') return

  console.log('CampFly Analytics Event:', {
    eventName,
    properties,
    timestamp: new Date().toISOString(),
  })

  if ((window as any).fbq) {
    ;(window as any).fbq('trackCustom', eventName, properties)
  }
}

export const trackPackageInquiry = (packageName: string) => {
  trackEvent('PackageInquiry', {
    packageName,
  })
}

export const trackWhatsAppClick = (source: string) => {
  trackEvent('WhatsAppClick', {
    source,
  })
}
