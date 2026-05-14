const features = [
  {
    title: 'Curated Experiences',
    description:
      'Every journey is thoughtfully designed for memorable and immersive travel experiences.',
  },
  {
    title: 'WhatsApp Assistance',
    description:
      'Fast and personalized travel consultation directly through WhatsApp.',
  },
  {
    title: 'Premium Stays',
    description:
      'Carefully selected accommodations focused on comfort and experience.',
  },
  {
    title: 'Flexible Customization',
    description:
      'Trips designed around your travel style, preferences, and budget.',
  },
]

export default function WhyChooseCampFly() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Why CampFly
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Travel Designed Around Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 shadow-sm"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-orange-100" />

              <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
