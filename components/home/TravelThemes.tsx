const themes = [
  {
    title: 'Luxury Escapes',
    description: 'Premium stays and curated luxury experiences worldwide.',
  },
  {
    title: 'Adventure Trips',
    description: 'Thrilling experiences for explorers and adventure seekers.',
  },
  {
    title: 'Romantic Getaways',
    description: 'Unforgettable honeymoon and couples experiences.',
  },
  {
    title: 'Family Holidays',
    description: 'Comfortable and memorable trips designed for families.',
  },
]

export default function TravelThemes() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Explore By Theme
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Journeys Designed Around Your Travel Style
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 h-16 w-16 rounded-2xl bg-orange-100" />

              <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                {theme.title}
              </h3>

              <p className="leading-relaxed text-neutral-600">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
