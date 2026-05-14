export function generateWhatsAppLink(packageName: string) {
  const phone = '919000000000'

  const message = encodeURIComponent(
    `Hi CampFly, I am interested in the ${packageName} package.`
  )

  return `https://wa.me/${phone}?text=${message}`
}
