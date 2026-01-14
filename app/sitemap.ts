import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://takeontom.com'
  const slugs = ['dev', 'python', 'django', 'manager', 'tech-lead', 'senior-dev']

  const cvUrls = slugs.map((slug) => ({
    url: `${baseUrl}/cv/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...cvUrls,
  ]
}
