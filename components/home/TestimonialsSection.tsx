const testimonials = [
  {
    name: 'Akhil & Meera',
    text: 'CampFly completely changed how we experience travel. Everything felt personal and premium.',
  },
  {
    name: 'Rahul Family',
    text: 'The itinerary was perfectly planned for our kids and family comfort. Stress-free experience.',
  },
  {
    name: 'Nithin',
    text: 'One of the best curated trips we have taken. Not touristy at all.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Trusted By Modern Travelers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                “{testimonial.text}”
              </p>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
