const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival & Local Exploration',
    description:
      'Arrival, premium stay check-in, and immersive local exploration experiences.',
  },
  {
    day: 'Day 2',
    title: 'Curated Adventure Experiences',
    description:
      'Experience handpicked adventures, sightseeing, and cultural activities.',
  },
  {
    day: 'Day 3',
    title: 'Relaxation & Departure',
    description:
      'Leisure moments, curated dining experiences, and comfortable departure.',
  },
]

export default function ItineraryTimeline() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Journey Timeline
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Your Travel Experience
          </h2>
        </div>

        <div className="space-y-8">
          {itinerary.map((item) => (
            <div
              key={item.day}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-orange-400">
                {item.day}
              </p>

              <h3 className="mb-4 text-3xl font-bold text-neutral-900">
                {item.title}
              </h3>

              <p className="leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
