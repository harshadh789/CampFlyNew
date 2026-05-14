export default function CareersPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
          Careers At CampFly
        </p>

        <h1 className="mb-8 text-6xl font-bold leading-tight">
          Build The Future Of Travel With Us
        </h1>

        <p className="mb-10 text-xl leading-relaxed text-neutral-300">
          Explore opportunities to grow with CampFly and help create immersive
          travel experiences for modern explorers.
        </p>

        <a
          href="https://careers.yourdomain.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-orange-400 px-8 py-5 font-semibold text-black transition hover:scale-105"
        >
          View Open Positions
        </a>
      </div>
    </main>
  )
}
