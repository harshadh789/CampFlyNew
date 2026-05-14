import PackageCard from '@/components/home/PackageCard'

const honeymoonPackages = [
  {
    title: 'Bali Honeymoon',
    location: 'Bali',
    duration: '6 Days / 5 Nights',
    price: '₹74,999',
  },
  {
    title: 'Kashmir Romance',
    location: 'Kashmir',
    duration: '5 Days / 4 Nights',
    price: '₹52,999',
  },
  {
    title: 'Maldives Escape',
    location: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: '₹98,999',
  },
]

export default function HoneymoonPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Honeymoon Experiences
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Romantic Journeys Designed For Couples
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Luxury experiences, unforgettable moments, and handcrafted romantic
            escapes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {honeymoonPackages.map((pkg) => (
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
