type PackagePageProps = {
  params: {
    slug: string
  }
}

export default function PackageDetailPage({ params }: PackagePageProps) {
  const packageName = params.slug
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
            Curated premium travel experiences designed for unforgettable
            journeys.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[2fr,1fr]">
          <div>
            <div className="mb-16">
              <h2 className="mb-6 text-4xl font-bold">
                Experience Overview
              </h2>

              <p className="text-lg leading-relaxed text-neutral-600">
                Every CampFly journey is crafted around immersive experiences,
                curated stays, and unforgettable moments.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-4xl font-bold">
                Itinerary Highlights
              </h2>

              <div className="space-y-8">
                {[1, 2, 3].map((day) => (
                  <div
                    key={day}
                    className="rounded-3xl border border-neutral-200 p-8"
                  >
                    <h3 className="mb-4 text-2xl font-semibold">
                      Day {day}
                    </h3>

                    <p className="text-neutral-600">
                      Explore curated experiences, premium stays, and immersive
                      local activities.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-32 rounded-3xl border border-neutral-200 p-8 shadow-sm">
              <div className="mb-8">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-400">
                  Starting From
                </p>

                <h3 className="text-5xl font-bold">
                  ₹49,999
                </h3>
              </div>

              <div className="mb-8 space-y-4 text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span>5 Days</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Category</span>
                  <span>Premium</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Ideal For</span>
                  <span>Couples</span>
                </div>
              </div>

              <button className="w-full rounded-full bg-black px-6 py-5 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
                Get Itinerary on WhatsApp
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
