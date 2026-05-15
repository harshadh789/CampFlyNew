type PackagePageProps = {
  params: Promise<{ slug: string }>
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params
  const packageName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="relative overflow-hidden bg-black py-32 text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
            CampFly Experience
          </p>
          <h1 className="mb-6 text-6xl font-bold leading-tight">
            {packageName}
          </h1>
          <p className="max-w-3xl text-xl text-neutral-200">
            Curated premium travel experiences designed for unforgettable journeys.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[2fr,1fr]">
          <div>
            <div className="mb-16">
              <h2 className="mb-6 text-4xl font-bold">Experience Overview</h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Every CampFly journey is crafted around immersive experiences,
                curated stays, and unforgettable moments.
              </p>
            </div>
            <div className="mb-16">
              <h2 className="mb-8 text-4xl font-bold">Itinerary Highlights</h2>
              <div className="space-y-8">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      {day}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">Day {day}</h3>
                      <p className="text-neutral-600">
                        Immersive experiences, local cuisine, and curated stays.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-8">
            <div className="mb-6 text-4xl font-bold">Book This Experience</div>
            <p className="mb-6 text-neutral-600">Starting from \u20b949,999 per person</p>
            <button className="w-full rounded-full bg-black py-4 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
              Get Itinerary on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
