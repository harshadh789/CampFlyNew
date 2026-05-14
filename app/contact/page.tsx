export default function ContactPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Contact CampFly
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Let’s Plan Your Next Journey
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Tell us your dream destination, travel style, and preferences.
            Our team will curate the perfect experience.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-orange-400"
            />

            <input
              type="text"
              placeholder="Destination"
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-orange-400"
            />

            <input
              type="text"
              placeholder="Travel Dates"
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-orange-400"
            />

            <textarea
              placeholder="Tell us about your ideal trip"
              rows={6}
              className="md:col-span-2 rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-orange-400"
            />

            <button className="md:col-span-2 rounded-full bg-black px-8 py-5 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
              Start Planning
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
