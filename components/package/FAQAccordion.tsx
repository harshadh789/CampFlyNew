const faqs = [
  {
    question: 'Are flights included in the package?',
    answer:
      'Flight inclusion depends on the selected package and customization preferences.',
  },
  {
    question: 'Can the itinerary be customized?',
    answer:
      'Yes. CampFly specializes in personalized travel experiences and flexible itineraries.',
  },
  {
    question: 'Do you provide visa assistance?',
    answer:
      'Yes. Visa support is available for selected international destinations.',
  },
]

export default function FAQAccordion() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            FAQs
          </p>

          <h2 className="text-5xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
                {faq.question}
              </h3>

              <p className="leading-relaxed text-neutral-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
