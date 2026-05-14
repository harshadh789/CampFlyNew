export default function MobileMenu() {
  return (
    <div className="fixed inset-0 z-50 bg-black text-white md:hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <h2 className="text-2xl font-bold">CampFly</h2>

        <button className="text-sm uppercase tracking-[0.2em] text-orange-300">
          Close
        </button>
      </div>

      <nav className="flex flex-col gap-8 px-6 py-10 text-3xl font-semibold">
        <a href="/domestic">Domestic Tours</a>
        <a href="/international">International Tours</a>
        <a href="/honeymoon">Honeymoon</a>
        <a href="/group-tours">Group Tours</a>
        <a href="/blogs">Blogs</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="absolute bottom-10 left-6 right-6">
        <button className="w-full rounded-full bg-orange-400 px-6 py-5 font-semibold text-black">
          Plan My Trip
        </button>
      </div>
    </div>
  )
}
