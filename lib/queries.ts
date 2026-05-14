export const packageQuery = `
  *[_type == "package"] {
    title,
    slug,
    location,
    duration,
    price,
    overview
  }
`

export const blogQuery = `
  *[_type == "blog"] {
    title,
    slug,
    excerpt,
    category
  }
`

export const testimonialQuery = `
  *[_type == "testimonial"] {
    name,
    review,
    rating,
    location
  }
`
