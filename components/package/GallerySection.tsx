const galleryItems = [1, 2, 3, 4]

export default function GallerySection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Explore The Experience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl bg-neutral-200"
            >
              <div className="aspect-[4/5] bg-neutral-300 transition hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
