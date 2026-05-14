const reels = [1, 2, 3]

export default function ReelsSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Travel Stories
          </p>

          <h2 className="text-5xl font-bold">
            Explore CampFly Reels
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reels.map((reel) => (
            <div
              key={reel}
              className="overflow-hidden rounded-[2rem] bg-neutral-900"
            >
              <div className="aspect-[9/16] bg-neutral-800" />

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  Experience Highlights
                </h3>

                <p className="text-neutral-400">
                  Immersive travel moments captured through CampFly journeys.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
