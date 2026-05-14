export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
          Start Your Journey
        </p>

        <h2 className="mb-8 text-6xl font-bold leading-tight">
          Tell Us Your Dream Trip.
          <br />
          We’ll Curate The Experience.
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-neutral-300">
          Personalized domestic and international journeys crafted for couples,
          families, and explorers.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button className="rounded-full bg-orange-400 px-8 py-5 font-semibold text-black transition hover:scale-105">
            Plan My Trip
          </button>

          <button className="rounded-full border border-white/20 px-8 py-5 font-semibold text-white transition hover:bg-white hover:text-black">
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  )
}
