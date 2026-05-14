'use client'

import { useState } from 'react'

const sortOptions = [
  'Recommended',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
]

export default function PackageSort() {
  const [selectedSort, setSelectedSort] = useState('Recommended')

  return (
    <div className="mb-10 flex justify-end">
      <select
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
        className="rounded-full border border-neutral-200 bg-white px-6 py-4 outline-none transition focus:border-orange-400"
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
