import PackageCard from '@/components/home/PackageCard'

const recommendedPackages = [
  {
    title: 'Bali Luxury Escape',
    location: 'Bali',
    duration: '6 Days / 5 Nights',
    price: '₹74,999',
  },
  {
    title: 'Thailand Adventure',
    location: 'Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹58,999',
  },
  {
    title: 'Maldives Retreat',
    location: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: '₹92,999',
  },
]

export default function RecommendedPackages() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Recommended Experiences
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Explore Similar Journeys
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {recommendedPackages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              location={pkg.location}
              duration={pkg.duration}
              price={pkg.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
