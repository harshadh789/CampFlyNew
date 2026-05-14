'use client'

import { motion } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] backdrop-blur-md"
        >
          Premium Curated Travel Experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl font-display text-6xl font-bold leading-tight md:text-7xl xl:text-8xl"
        >
          Travel Beyond
          <span className="block text-campfly-orange">
            Tourist Spots
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-200 md:text-xl"
        >
          Discover handcrafted domestic and international journeys designed
          for couples, families, and explorers seeking unforgettable
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 w-full max-w-3xl rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-4 rounded-full bg-white px-6 py-5 text-black">
              <MapPin className="h-5 w-5 text-campfly-teal" />

              <input
                type="text"
                placeholder="Search destinations, countries, or experiences"
                className="w-full bg-transparent outline-none"
              />
            </div>

            <button className="flex items-center justify-center gap-3 rounded-full bg-campfly-orange px-8 py-5 font-semibold text-black transition hover:scale-105">
              <Search className="h-5 w-5" />
              Explore
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-col gap-5 sm:flex-row"
        >
          <button className="rounded-full bg-campfly-orange px-10 py-5 font-semibold text-black shadow-premium transition hover:scale-105">
            Explore Packages
          </button>

          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-10 py-5 font-semibold backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
