const destinations = [
  'Bali',
  'Thailand',
  'Kashmir',
  'Kerala',
  'Dubai',
  'Maldives',
]

export default function DestinationGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Top Destinations
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Explore Popular Journeys
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination}
              className="group relative overflow-hidden rounded-[2rem] bg-neutral-200"
            >
              <div className="aspect-[4/5] bg-neutral-300 transition duration-500 group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-4xl font-bold">
                  {destination}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
