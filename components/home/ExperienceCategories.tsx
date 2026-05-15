import { Heart, Globe, Mountain, Star } from 'lucide-react'

const categories = [
  {
    title: 'Honeymoon Escapes',
    description: 'Romantic journeys designed for unforgettable memories.',
    icon: Heart,
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    title: 'Cultural Experiences',
    description: 'Immerse yourself in authentic local traditions and stories.',
    icon: Globe,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Adventure Journeys',
    description: 'Explore thrilling landscapes and unforgettable adventures.',
    icon: Mountain,
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Luxury Retreats',
    description: 'Premium stays and curated comfort experiences worldwide.',
    icon: Star,
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
]

export default function ExperienceCategories() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-campfly-orange">
            Experiences
          </p>
          <h2 className="text-5xl font-bold text-neutral-900">Curated Travel Styles</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}>
                  <Icon size={28} className={category.iconColor} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                  {category.title}
                </h3>

                <p className="leading-relaxed text-neutral-600">
                  {category.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
