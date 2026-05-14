const blogs = [
  {
    title: 'Best Honeymoon Destinations In India',
    category: 'Honeymoon',
  },
  {
    title: 'Top Cultural Experiences In Kerala',
    category: 'Experiences',
  },
  {
    title: 'Thailand Travel Guide For Couples',
    category: 'International',
  },
]

export default function BlogsPage() {
  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            CampFly Journal
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Stories, Guides & Experiences
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            Explore destination guides, cultural experiences, honeymoon ideas,
            and curated travel inspiration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 bg-neutral-100" />

              <div className="p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-orange-400">
                  {blog.category}
                </p>

                <h2 className="mb-4 text-2xl font-bold leading-snug">
                  {blog.title}
                </h2>

                <button className="font-semibold text-black transition hover:text-orange-400">
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
