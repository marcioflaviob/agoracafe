import { createClient } from '@sanity/client'

// Create a client with write permissions for this script
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false, // Disable CDN for mutations
  apiVersion: '2024-01-01',
  token: 'APIKEY'
})

// Sample stats data
const sampleStats = {
  stat1Number: '2019',
  stat1LabelEn: 'Established',
  stat1LabelNl: 'Opgericht',
  
  stat2Number: '500+',
  stat2LabelEn: 'Happy Customers',
  stat2LabelNl: 'Tevreden klanten',
  
  stat3Number: '15+',
  stat3LabelEn: 'Coffee Varieties',
  stat3LabelNl: 'Koffievariëteiten',
  
  stat4Number: '100%',
  stat4LabelEn: 'Fresh Daily',
  stat4LabelNl: 'Dagelijks vers'
}

export async function addSampleStatsToExistingCafe() {
  console.log('🚀 Adding sample statistics to existing café document...\n')
  
  try {
    // First, fetch the existing café document
    const existingCafe = await client.fetch('*[_type == "cafe"][0]')
    
    if (!existingCafe) {
      console.log('❌ No café document found. Please create one first in Sanity Studio.')
      return
    }
    
    console.log(`✅ Found existing café: ${existingCafe.name || 'Unnamed Café'}`)
    
    // Update the document with sample stats
    const result = await client
      .patch(existingCafe._id)
      .set(sampleStats)
      .commit()
    
    console.log('✅ Successfully added sample statistics!')
    console.log('\n📊 Added statistics:')
    console.log(`📍 ${sampleStats.stat1Number} - ${sampleStats.stat1LabelEn} (${sampleStats.stat1LabelNl})`)
    console.log(`👥 ${sampleStats.stat2Number} - ${sampleStats.stat2LabelEn} (${sampleStats.stat2LabelNl})`)
    console.log(`☕ ${sampleStats.stat3Number} - ${sampleStats.stat3LabelEn} (${sampleStats.stat3LabelNl})`)
    console.log(`🌟 ${sampleStats.stat4Number} - ${sampleStats.stat4LabelEn} (${sampleStats.stat4LabelNl})`)
    
    console.log('\n🎉 Now you can:')
    console.log('1. Visit your website to see the stats in action')
    console.log('2. Edit these values in Sanity Studio at http://localhost:3333')
    console.log('3. Add or remove stats by filling/clearing the fields')
    
    return result
  } catch (error) {
    console.error('❌ Error adding sample statistics:', error)
    throw error
  }
}

// Function to test Sanity connection
export async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...')
    const result = await client.fetch('*[_type == "cafe"][0]')
    console.log('✅ Sanity connection successful!')
    console.log('Current café data:', result)
    return result
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    throw error
  }
}

// Make it runnable when called directly
async function main() {
  try {
    console.log('🚀 Starting sample stats setup...\n')
    
    // Test connection first
    await testSanityConnection()
    console.log('\n')
    
    // Add sample stats
    await addSampleStatsToExistingCafe()
    
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
