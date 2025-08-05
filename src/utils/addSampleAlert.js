import { createClient } from '@sanity/client'

// Create a client with write permissions for this script
const client = createClient({
  projectId: '3g9ih1u5',
  dataset: 'production',
  useCdn: false, // Disable CDN for mutations
  apiVersion: '2024-01-01',
  token: 'APIKEY'
})

// Sample alert data (can be commented out to test empty state)
const sampleAlert = {
  alertTitleEn: 'Holiday Closure',
  alertTitleNl: 'Vakantiesluiting',
  alertMessageEn: 'We will be closed from December 24th to January 2nd for the holidays. Happy holidays from all of us at Agora Café!',
  alertMessageNl: 'We zijn gesloten van 24 december tot 2 januari voor de feestdagen. Fijne feestdagen van ons allemaal bij Agora Café!'
}

// Alternative alert examples (comment out sampleAlert above and uncomment one of these to test)
/*
const sampleAlert = {
  alertTitleEn: 'Special Event',
  alertTitleNl: 'Speciaal Evenement',
  alertMessageEn: 'Join us this Saturday for live jazz music from 7-10 PM!',
  alertMessageNl: 'Kom zaterdag naar ons toe voor live jazzmuziek van 19-22 uur!'
}
*/

/*
const sampleAlert = {
  alertTitleEn: 'Temporary Hours',
  alertTitleNl: 'Tijdelijke Openingstijden',
  alertMessageEn: 'Due to renovations, we\'ll be open from 9 AM to 3 PM this week.',
  alertMessageNl: 'Vanwege renovaties zijn we deze week open van 9:00 tot 15:00.'
}
*/

export async function addSampleAlertToExistingCafe() {
  console.log('🚨 Adding sample alert to existing café document...\n')
  
  try {
    // First, fetch the existing café document
    const existingCafe = await client.fetch('*[_type == "cafe"][0]')
    
    if (!existingCafe) {
      console.log('❌ No café document found. Please create one first in Sanity Studio.')
      return
    }
    
    console.log(`✅ Found existing café: ${existingCafe.name || 'Unnamed Café'}`)
    
    // Update the document with sample alert
    const result = await client
      .patch(existingCafe._id)
      .set(sampleAlert)
      .commit()
    
    console.log('✅ Successfully added sample alert!')
    console.log('\n🚨 Added alert:')
    console.log(`📍 English: ${sampleAlert.alertTitleEn}`)
    console.log(`   ${sampleAlert.alertMessageEn}`)
    console.log(`📍 Dutch: ${sampleAlert.alertTitleNl}`)
    console.log(`   ${sampleAlert.alertMessageNl}`)
    
    console.log('\n🎉 Now you can:')
    console.log('1. Visit your website to see the alert in the hero section')
    console.log('2. Edit or remove the alert in Sanity Studio at http://localhost:3333')
    console.log('3. Leave alert fields empty to hide the alert')
    console.log('4. Test different languages to see both versions')
    
    return result
  } catch (error) {
    console.error('❌ Error adding sample alert:', error)
    throw error
  }
}

export async function clearAlertFromExistingCafe() {
  console.log('🧹 Clearing alert from existing café document...\n')
  
  try {
    // First, fetch the existing café document
    const existingCafe = await client.fetch('*[_type == "cafe"][0]')
    
    if (!existingCafe) {
      console.log('❌ No café document found. Please create one first in Sanity Studio.')
      return
    }
    
    console.log(`✅ Found existing café: ${existingCafe.name || 'Unnamed Café'}`)
    
    // Clear the alert fields
    const result = await client
      .patch(existingCafe._id)
      .unset(['alertTitleEn', 'alertTitleNl', 'alertMessageEn', 'alertMessageNl'])
      .commit()
    
    console.log('✅ Successfully cleared alert!')
    console.log('\n🚨 Alert has been removed from the website.')
    
    return result
  } catch (error) {
    console.error('❌ Error clearing alert:', error)
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
    console.log('🚀 Starting sample alert setup...\n')
    
    // Test connection first
    await testSanityConnection()
    console.log('\n')
    
    // Add sample alert (comment this out and uncomment clearAlertFromExistingCafe to test clearing)
    await addSampleAlertToExistingCafe()
    
    // Uncomment this line to clear the alert instead
    // await clearAlertFromExistingCafe()
    
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
