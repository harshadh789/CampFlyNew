const stats = [
  {
    label: 'Happy Travelers',
    value: '5,000+',
  },
  {
    label: 'Curated Experiences',
    value: '250+',
  },
  {
    label: 'Destinations Covered',
    value: '40+',
  },
  {
    label: 'Google Reviews',
    value: '4.9★',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
          >
            <h2 className="mb-4 text-5xl font-bold text-orange-300">
              {stat.value}
            </h2>

            <p className="text-lg text-neutral-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
