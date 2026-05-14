import PackageCard from '@/components/home/PackageCard'

const packages = [
  {
    title: 'Kerala Backwaters',
    location: 'Kerala',
    duration: '4 Days / 3 Nights',
    price: '₹28,999',
  },
  {
    title: 'Kashmir Escape',
    location: 'Kashmir',
    duration: '5 Days / 4 Nights',
    price: '₹36,999',
  },
  {
    title: 'Munnar Experience',
    location: 'Munnar',
    duration: '3 Days / 2 Nights',
    price: '₹18,999',
  },
]

export default function DomesticPackagesPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Domestic Experiences
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Discover India Beyond Tourism
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Curated journeys crafted for couples, families, and explorers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              location={pkg.location}
              duration={pkg.duration}
              price={pkg.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
