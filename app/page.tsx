export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
            CampFly Experiences
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Travel Beyond Tourist Spots
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-200 md:text-xl">
            Curated domestic and international experiences for couples,
            families, and explorers.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Plan My Trip
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Curated Travel Experiences
          </h2>

          <p className="mx-auto max-w-2xl text-neutral-600">
            Not generic packages. Carefully designed journeys built around
            experiences, emotions, and unforgettable moments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            'Honeymoon Escapes',
            'International Adventures',
            'Cultural Experiences',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-neutral-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 h-56 rounded-2xl bg-neutral-100" />

              <h3 className="mb-3 text-2xl font-semibold">{item}</h3>

              <p className="text-neutral-600">
                Premium experience-driven itineraries crafted for modern
                travelers.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
