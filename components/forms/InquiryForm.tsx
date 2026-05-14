'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      destination: formData.get('destination'),
      travelDates: formData.get('travelDates'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSuccess(true)
        event.currentTarget.reset()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Plan Your Journey
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Tell Us About Your Dream Trip
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-white p-10 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none transition focus:border-orange-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none transition focus:border-orange-400"
            />

            <input
              name="destination"
              placeholder="Preferred Destination"
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none transition focus:border-orange-400"
            />

            <input
              name="travelDates"
              placeholder="Travel Dates"
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none transition focus:border-orange-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your travel preferences"
            rows={6}
            className="mt-6 w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none transition focus:border-orange-400"
          />

          <div className="mt-8 flex items-center justify-between gap-6">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-black px-8 py-5 font-semibold text-white transition hover:bg-orange-400 hover:text-black"
            >
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            {success && (
              <p className="text-sm font-medium text-green-600">
                Inquiry submitted successfully.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
