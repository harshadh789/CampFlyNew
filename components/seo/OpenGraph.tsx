type OpenGraphProps = {
  title: string
  description: string
  image?: string
}

export default function OpenGraph({
  title,
  description,
  image,
}: OpenGraphProps) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image || 'https://campfly.in/og-image.jpg',
        },
      ],
    },
  }
}
