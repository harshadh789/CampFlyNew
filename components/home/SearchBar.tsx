'use client'

import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="mx-auto mb-12 max-w-3xl">
      <div className="flex items-center overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations, experiences, or packages"
          className="w-full px-8 py-5 outline-none"
        />

        <button className="bg-black px-8 py-5 font-semibold text-white transition hover:bg-orange-400 hover:text-black">
          Search
        </button>
      </div>
    </div>
  )
}
