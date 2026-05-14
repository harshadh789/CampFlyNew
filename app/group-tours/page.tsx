import PackageCard from '@/components/home/PackageCard'

const groupTours = [
  {
    title: 'Weekend Wayanad Escape',
    location: 'Wayanad',
    duration: '2 Days / 1 Night',
    price: '₹9,999',
  },
  {
    title: 'Goa Group Experience',
    location: 'Goa',
    duration: '4 Days / 3 Nights',
    price: '₹24,999',
  },
  {
    title: 'Himachal Adventure',
    location: 'Himachal Pradesh',
    duration: '6 Days / 5 Nights',
    price: '₹38,999',
  },
]

export default function GroupToursPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Group Experiences
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Curated Group Adventures
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Meet new people, explore incredible destinations, and experience
            unforgettable journeys together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {groupTours.map((tour) => (
            <PackageCard
              key={tour.title}
              title={tour.title}
              location={tour.location}
              duration={tour.duration}
              price={tour.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
