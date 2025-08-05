import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: true, // Enable CDN for better performance
  apiVersion: '2024-01-01', // Updated API version
  perspective: 'published', // Only fetch published documents
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper function to generate file URLs (for PDFs, etc.)
export function fileUrlFor(fileAsset) {
  if (!fileAsset || !fileAsset.asset || !fileAsset.asset._ref) {
    return null
  }
  
  const ref = fileAsset.asset._ref
  const projectId = client.config().projectId
  const dataset = client.config().dataset
  
  // Extract file ID and extension from the reference
  const [, id, extension] = ref.match(/^file-([a-f0-9]+)-([a-z0-9]+)$/) || []
  
  if (!id || !extension) {
    return null
  }
  
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}
