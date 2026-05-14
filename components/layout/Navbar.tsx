export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            CampFly
          </h1>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            'Domestic',
            'International',
            'Honeymoon',
            'Group Tours',
            'Blogs',
            'About',
            'Contact',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-neutral-200 transition hover:text-orange-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105">
          Plan My Trip
        </button>
      </div>
    </header>
  )
}
