import PackageCard from '@/components/home/PackageCard'

const packages = [
  {
    title: 'Bali Escape',
    location: 'Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹58,999',
  },
  {
    title: 'Thailand Experience',
    location: 'Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹49,999',
  },
  {
    title: 'Dubai Luxury',
    location: 'Dubai',
    duration: '4 Days / 3 Nights',
    price: '₹62,999',
  },
]

export default function InternationalPackagesPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            International Experiences
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Explore The World With CampFly
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Premium international travel experiences curated for unforgettable
            memories.
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
