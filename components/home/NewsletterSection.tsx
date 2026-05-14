'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-black px-8 py-20 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
          CampFly Insider
        </p>

        <h2 className="mb-6 text-5xl font-bold leading-tight">
          Get Travel Inspiration,
          <br />
          Offers & Destination Guides
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Join the CampFly community and discover curated travel experiences,
          seasonal offers, and hidden gems.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full px-6 py-5 text-black outline-none"
          />

          <button className="rounded-full bg-orange-400 px-8 py-5 font-semibold text-black transition hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
