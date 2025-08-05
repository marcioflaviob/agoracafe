import { createClient } from '@sanity/client'

// Create a client with write permissions for this script
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false, // Disable CDN for mutations
  apiVersion: '2024-01-01',
  token: 'APIKEY'
})

export async function addOnlineOrderingUrl() {
  console.log('Adding online ordering URL to cafe data...')
  
  try {
    // Find the existing cafe document
    const cafeDoc = await client.fetch('*[_type == "cafe"][0]')
    
    if (!cafeDoc) {
      console.log('❌ No cafe document found')
      return
    }
    
    if (cafeDoc.onlineOrderingUrl) {
      console.log('✅ Online ordering URL already exists:', cafeDoc.onlineOrderingUrl)
      return cafeDoc
    }
    
    // Update the cafe document with the default Thuisbezorgd URL
    const updated = await client
      .patch(cafeDoc._id)
      .set({
        onlineOrderingUrl: 'https://www.thuisbezorgd.nl/'
      })
      .commit()
    
    console.log('✅ Successfully added online ordering URL to cafe document')
    console.log('URL:', updated.onlineOrderingUrl)
    
    return updated
  } catch (error) {
    console.error('❌ Error updating cafe document:', error)
    throw error
  }
}

// Make it runnable when called directly
async function main() {
  try {
    console.log('🚀 Starting cafe document update...\n')
    
    await addOnlineOrderingUrl()
    
    console.log('\n🎉 All done! Online ordering URL has been added to the cafe document.')
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
