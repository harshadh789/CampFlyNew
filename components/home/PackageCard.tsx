type PackageCardProps = {
  title: string
  location: string
  duration: string
  price: string
}

export default function PackageCard({
  title,
  location,
  duration,
  price,
}: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-300">
            {location}
          </p>

          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <span>{duration}</span>
          <span>Starting from {price}</span>
        </div>

        <p className="text-neutral-600">
          Carefully crafted premium travel experiences built for unforgettable
          journeys.
        </p>

        <button className="w-full rounded-full bg-black px-5 py-4 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
          Get Itinerary on WhatsApp
        </button>
      </div>
    </div>
  )
}
