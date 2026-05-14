const testimonials = [
  {
    name: 'Arjun & Sneha',
    review:
      'CampFly delivered one of the most memorable honeymoon experiences we have ever imagined.',
  },
  {
    name: 'Fathima Family',
    review:
      'Everything from stays to local experiences felt premium and stress-free.',
  },
  {
    name: 'Vishnu',
    review:
      'Not a generic package tour. The trip actually felt personal and immersive.',
  },
]

export default function TestimonialCarousel() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Traveler Reviews
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Real Experiences From Real Travelers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 shadow-sm"
            >
              <div className="mb-6 text-5xl text-orange-400">“</div>

              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                {testimonial.review}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900">
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
