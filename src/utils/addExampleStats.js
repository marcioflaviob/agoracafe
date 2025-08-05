import { createClient } from '@sanity/client'

// Create a client with write permissions
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk6bIoulPBgpsK96cTjEx6qjUH4hICTbd9L1zWKn3Cijt7ImQWdluRMqvhzmRzQYD05gKLWq45MhkiXfGh1g8w9A1Xm9IlXmke29oDPSzZXhfFxcYcY3Ik43xeeo7poPTU0SGNNEiIdJSj3OD3SSRF6zGK8IYpvrSXvdxN2gQV0TbVzVCrRd'
})

export async function addExampleStatsToFirstCafe() {
  console.log('🚀 Adding example stats to the first cafe document...')
  
  try {
    // Get the first cafe document
    const cafes = await client.fetch('*[_type == "cafe"][0]')
    
    if (!cafes) {
      console.log('❌ No cafe documents found. Please create a cafe document first in Sanity Studio.')
      return
    }
    
    console.log('✅ Found cafe document:', cafes._id)
    
    // Update the cafe with example stats
    const updatedCafe = await client
      .patch(cafes._id)
      .set({
        stat1Number: '2019',
        stat1LabelEn: 'Established',
        stat1LabelNl: 'Opgericht',
        
        stat2Number: '500+',
        stat2LabelEn: 'Happy Customers',
        stat2LabelNl: 'Tevreden Klanten',
        
        stat3Number: '15+',
        stat3LabelEn: 'Coffee Varieties',
        stat3LabelNl: 'Koffievariëteiten',
        
        stat4Number: '100%',
        stat4LabelEn: 'Fresh Daily',
        stat4LabelNl: 'Dagelijks Vers'
      })
      .commit()
    
    console.log('✅ Successfully added example stats to cafe!')
    console.log('📊 Stats added:')
    console.log('   Stat 1: 2019 - Established / Opgericht')
    console.log('   Stat 2: 500+ - Happy Customers / Tevreden Klanten')
    console.log('   Stat 3: 15+ - Coffee Varieties / Koffievariëteiten')
    console.log('   Stat 4: 100% - Fresh Daily / Dagelijks Vers')
    console.log('\n🎉 You can now visit your website to see the custom stats!')
    console.log('💡 You can edit these stats in Sanity Studio at http://localhost:3333')
    
    return updatedCafe
    
  } catch (error) {
    console.error('❌ Error adding stats:', error)
    throw error
  }
}

// Make it runnable when called directly
async function main() {
  try {
    await addExampleStatsToFirstCafe()
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
