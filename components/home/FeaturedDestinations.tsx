const destinations = [
  {
    name: 'Bali',
    subtitle: 'Romantic Escapes & Luxury Villas',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
  },
  {
    name: 'Thailand',
    subtitle: 'Island Adventures & Nightlife',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop',
  },
  {
    name: 'Kashmir',
    subtitle: 'Scenic Mountains & Houseboats',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop',
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-campfly-orange">
            Featured Destinations
          </p>
          <h2 className="text-5xl font-bold">Curated Experiences Across The World</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-[2rem]"
            >
              <div
                className="aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${destination.image}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="mb-3 text-4xl font-bold">{destination.name}</h3>
                <p className="text-neutral-300">{destination.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
