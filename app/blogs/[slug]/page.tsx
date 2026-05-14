type BlogPageProps = {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="bg-white pt-32 text-neutral-900">
      <article className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            CampFly Journal
          </p>

          <h1 className="mb-8 text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-600">
            Explore travel insights, curated experiences, and destination
            inspiration from CampFly.
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[2rem] bg-neutral-200">
          <div className="aspect-[16/9] bg-neutral-300" />
        </div>

        <div className="prose prose-lg max-w-none text-neutral-700">
          <p>
            Modern travelers are no longer looking for generic sightseeing.
            They want immersive, emotional, and memorable experiences.
          </p>

          <p>
            CampFly focuses on curated travel experiences that combine premium
            comfort with authentic local exploration.
          </p>

          <h2>Why Experience-Led Travel Matters</h2>

          <p>
            Experience-driven tourism creates stronger emotional connection,
            higher traveler satisfaction, and more meaningful memories.
          </p>
        </div>
      </article>
    </main>
  )
}
