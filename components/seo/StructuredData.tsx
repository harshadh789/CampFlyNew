export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'CampFly',
    url: 'https://campfly.in',
    logo: 'https://campfly.in/logo.png',
    description:
      'Curated domestic and international travel experiences for couples, families, and explorers.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    sameAs: [
      'https://instagram.com/campfly.in',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
