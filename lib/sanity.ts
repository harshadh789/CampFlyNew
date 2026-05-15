// Sanity CMS client - placeholder until next-sanity is configured
// To activate: add 'next-sanity' to package.json dependencies

export const client = null

export async function sanityFetch<T = unknown>(_query: string): Promise<T[]> {
  return []
}
