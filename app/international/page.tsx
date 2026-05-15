type PackageCardProps = {
  title: string
  location: string
  duration: string
  price: string
}

function PackageCard({ title, location, duration, price }: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-300">{location}</p>
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <span>{duration}</span>
          <span>Starting from {price}</span>
        </div>
        <button className="w-full rounded-full bg-black px-5 py-4 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
          Get Itinerary on WhatsApp
        </button>
      </div>
    </div>
  )
}

const packages = [
  {
    title: 'Bali Escape',
    location: 'Indonesia',
    duration: '6 Days / 5 Nights',
    price: '\u20b958,999',
  },
  {
    title: 'Thailand Experience',
    location: 'Thailand',
    duration: '5 Days / 4 Nights',
    price: '\u20b949,999',
  },
  {
    title: 'Dubai Luxury',
    location: 'Dubai',
    duration: '4 Days / 3 Nights',
    price: '\u20b962,999',
  },
]

export default function InternationalPackagesPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            International Experiences
          </p>
          <h1 className="mb-6 text-5xl font-bold">Explore The World With CampFly</h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Premium international travel experiences curated for unforgettable memories.
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
