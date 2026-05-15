type DestinationPageProps = {
  params: Promise<{ slug: string }>
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params
  const destinationName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="bg-white pt-32 text-neutral-900">
      <section className="relative overflow-hidden bg-black py-36 text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
            Explore Destination
          </p>
          <h1 className="mb-8 text-7xl font-bold leading-tight">
            {destinationName}
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-200">
            Discover immersive experiences, curated stays, local culture, and
            unforgettable travel moments with CampFly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-bold">
              About {destinationName}
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              Experience handpicked adventures, premium stays, local culture,
              scenic beauty, and unforgettable moments curated by CampFly.
            </p>
          </div>
          <div className="rounded-[2rem] bg-neutral-200">
            <div className="aspect-[4/3] bg-neutral-300" />
          </div>
        </div>
      </section>
    </main>
  )
}
