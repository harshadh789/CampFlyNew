const filters = [
  'All',
  'Domestic',
  'International',
  'Honeymoon',
  'Adventure',
  'Family',
]

export default function FilterBar() {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-orange-400 hover:bg-orange-400 hover:text-black"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
