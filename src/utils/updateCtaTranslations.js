import { createClient } from '@sanity/client'

// Create a client with write permissions for this script
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false, // Disable CDN for mutations
  apiVersion: '2024-01-01',
  token: 'APIKEY'
})

// Updated CTA translations for Order Online
const updatedCtaTranslations = [
  {
    key: 'specialties.cta.title',
    english: 'Order Online',
    dutch: 'Online bestellen',
    description: 'Call to action title in specialties'
  },
  {
    key: 'specialties.cta.description',
    english: 'Skip the wait and order your favorite coffee and treats online for pickup or delivery.',
    dutch: 'Sla de wachttijd over en bestel je favoriete koffie en lekkernijen online voor afhaal of bezorging.',
    description: 'Call to action description in specialties'
  },
  {
    key: 'specialties.cta.button',
    english: 'Order Now',
    dutch: 'Bestel nu',
    description: 'Call to action button in specialties'
  }
]

export async function updateCtaTranslations() {
  console.log(`Starting to update ${updatedCtaTranslations.length} CTA translations...`)
  
  const results = []
  
  for (const translation of updatedCtaTranslations) {
    try {
      // Find the existing translation document
      const existing = await client.fetch(
        '*[_type == "translations" && key == $key][0]',
        { key: translation.key }
      )
      
      if (!existing) {
        console.log(`Translation ${translation.key} not found, skipping...`)
        continue
      }
      
      // Update the translation
      const updated = await client
        .patch(existing._id)
        .set({
          english: translation.english,
          dutch: translation.dutch,
          description: translation.description
        })
        .commit()
      
      results.push(updated)
      console.log(`✅ Updated translation: ${translation.key}`)
    } catch (error) {
      console.error(`❌ Error updating translation ${translation.key}:`, error)
    }
  }
  
  console.log(`\n📊 Summary:`)
  console.log(`✅ Successfully updated: ${results.length} translations`)
  
  return results
}

// Make it runnable when called directly
async function main() {
  try {
    console.log('🚀 Starting CTA translation update...\n')
    
    await updateCtaTranslations()
    
    console.log('\n🎉 All done! CTA translations have been updated in Sanity.')
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
