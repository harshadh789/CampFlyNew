import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://campfly.in',
      lastModified: new Date(),
    },
    {
      url: 'https://campfly.in/domestic',
      lastModified: new Date(),
    },
    {
      url: 'https://campfly.in/international',
      lastModified: new Date(),
    },
    {
      url: 'https://campfly.in/honeymoon',
      lastModified: new Date(),
    },
    {
      url: 'https://campfly.in/blogs',
      lastModified: new Date(),
    },
  ]
}
