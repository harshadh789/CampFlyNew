const categories = [
  {
    title: 'Honeymoon Escapes',
    description: 'Romantic journeys designed for unforgettable memories.',
  },
  {
    title: 'Cultural Experiences',
    description: 'Immerse yourself in authentic local traditions and stories.',
  },
  {
    title: 'Adventure Journeys',
    description: 'Explore thrilling landscapes and unforgettable adventures.',
  },
  {
    title: 'Luxury Retreats',
    description: 'Premium stays and curated comfort experiences worldwide.',
  },
]

export default function ExperienceCategories() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Experiences
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Curated Travel Styles
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 h-16 w-16 rounded-2xl bg-orange-100" />

              <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                {category.title}
              </h3>

              <p className="leading-relaxed text-neutral-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
