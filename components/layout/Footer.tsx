export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-3xl font-bold">CampFly</h2>

          <p className="text-neutral-400">
            Curated travel experiences for couples, families, and explorers.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Explore</h3>

          <ul className="space-y-3 text-neutral-400">
            <li>Domestic Tours</li>
            <li>International Tours</li>
            <li>Honeymoon Packages</li>
            <li>Group Experiences</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>

          <ul className="space-y-3 text-neutral-400">
            <li>About</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>

          <p className="mb-3 text-neutral-400">
            Campfly Private Limited
          </p>

          <p className="text-neutral-400">
            Kerala, India
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-500">
        © 2026 CampFly. All rights reserved.
      </div>
    </footer>
  )
}
