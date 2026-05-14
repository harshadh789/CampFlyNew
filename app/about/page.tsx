export default function AboutPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            About CampFly
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Experience-Led Travel For Modern Explorers
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600">
            CampFly was built to move beyond generic tourism. We curate
            unforgettable domestic and international travel experiences for
            couples, families, and adventure seekers.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl bg-neutral-100 p-10">
            <h2 className="mb-5 text-3xl font-bold">
              Our Vision
            </h2>

            <p className="leading-relaxed text-neutral-600">
              To become one of India’s leading experience-focused travel brands
              through storytelling, curated journeys, and premium customer
              experiences.
            </p>
          </div>

          <div className="rounded-3xl bg-black p-10 text-white">
            <h2 className="mb-5 text-3xl font-bold">
              Our Philosophy
            </h2>

            <p className="leading-relaxed text-neutral-300">
              We believe travel should feel immersive, emotional, and personal —
              not transactional. Every itinerary is designed around meaningful
              moments and unforgettable memories.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
