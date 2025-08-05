import { createClient } from '@sanity/client'
import { initialTranslations } from './initialTranslations.js'

// Create a client with write permissions for this script
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false, // Disable CDN for mutations
  apiVersion: '2024-01-01',
  token: 'APIKEY'
})

// Convert initialTranslations to the format needed for Sanity
const allTranslations = initialTranslations.map(translation => ({
  _type: 'translations',
  ...translation
}))

export async function addAllTranslations() {
  console.log(`Starting to add ${allTranslations.length} translations...`)
  
  const results = []
  const skipped = []
  
  for (const translation of allTranslations) {
    try {
      // Check if translation already exists
      const existing = await client.fetch(
        '*[_type == "translations" && key == $key][0]',
        { key: translation.key }
      )
      
      if (existing) {
        console.log(`Translation ${translation.key} already exists, skipping...`)
        skipped.push(translation.key)
        continue
      }
      
      const doc = await client.create(translation)
      results.push(doc)
      console.log(`✅ Created translation: ${translation.key}`)
    } catch (error) {
      console.error(`❌ Error creating translation ${translation.key}:`, error)
    }
  }
  
  console.log(`\n📊 Summary:`)
  console.log(`✅ Successfully added: ${results.length} translations`)
  console.log(`⏭️  Skipped existing: ${skipped.length} translations`)
  console.log(`📝 Total processed: ${allTranslations.length} translations`)
  
  return results
}

// Function to test Sanity connection
export async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...')
    const result = await client.fetch('*[_type == "translations"] | order(_createdAt desc) [0...5]')
    console.log('✅ Sanity connection successful!')
    console.log('Current translations:', result)
    return result
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    throw error
  }
}

// Make it runnable when called directly
async function main() {
  try {
    console.log('🚀 Starting translation setup...\n')
    
    // Test connection first
    await testSanityConnection()
    console.log('\n')
    
    // Add translations
    await addAllTranslations()
    
    console.log('\n🎉 All done! Translations have been added to Sanity.')
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}