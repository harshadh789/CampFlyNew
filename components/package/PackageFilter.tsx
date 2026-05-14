'use client'

import { useState } from 'react'

const filters = ['All', 'Honeymoon', 'Adventure', 'Luxury', 'Family']

export default function PackageFilter() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full px-6 py-3 font-medium transition ${
            activeFilter === filter
              ? 'bg-black text-white'
              : 'bg-neutral-100 text-neutral-700 hover:bg-orange-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
