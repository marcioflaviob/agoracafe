/**
 * Script to populate initial translations in Sanity
 * Run this in Sanity Studio or use the Sanity CLI
 */

export const initialTranslations = [
  // General
  {
    key: 'general.loading',
    category: 'general',
    english: 'Loading...',
    dutch: 'Laden...',
    description: 'Loading message displayed while content is being fetched'
  },

  // Navigation
  {
    key: 'navigation.home',
    category: 'navigation',
    english: 'Home',
    dutch: 'Home',
    description: 'Navigation link to home/hero section'
  },
  {
    key: 'navigation.about',
    category: 'navigation',
    english: 'About',
    dutch: 'Over ons',
    description: 'Navigation link to about section'
  },
  {
    key: 'navigation.specialties',
    category: 'navigation',
    english: 'Specialties',
    dutch: 'Specialiteiten',
    description: 'Navigation link to specialties section'
  },
  {
    key: 'navigation.gallery',
    category: 'navigation',
    english: 'Gallery',
    dutch: 'Galerij',
    description: 'Navigation link to gallery section'
  },
  {
    key: 'navigation.contact',
    category: 'navigation',
    english: 'Contact',
    dutch: 'Contact',
    description: 'Navigation link to contact section'
  },
  {
    key: 'navigation.viewMenu',
    category: 'navigation',
    english: 'View Menu',
    dutch: 'Menu bekijken',
    description: 'Button text for viewing the menu PDF'
  },

  // Hero Section
  {
    key: 'hero.viewMenu',
    category: 'hero',
    english: 'View Our Menu',
    dutch: 'Bekijk ons menu',
    description: 'Main menu button in hero section'
  },
  {
    key: 'hero.learnMore',
    category: 'hero',
    english: 'Learn More',
    dutch: 'Meer weten',
    description: 'Learn more button in hero section'
  },
  {
    key: 'hero.scrollDown',
    category: 'hero',
    english: 'Scroll down',
    dutch: 'Scroll naar beneden',
    description: 'Screen reader text for scroll down arrow'
  },

  // About Section
  {
    key: 'about.title',
    category: 'about',
    english: 'About Our Café',
    dutch: 'Over ons café',
    description: 'About section main title'
  },
  {
    key: 'about.description',
    category: 'about',
    english: 'Located in the heart of Groningen, our café is more than just a place to grab coffee. We\'re a community gathering space where quality meets comfort, and every visit feels like coming home.',
    dutch: 'Gelegen in het hart van Groningen is ons café meer dan alleen een plek om koffie te halen. We zijn een gemeenschappelijke ontmoetingsplaats waar kwaliteit en comfort samenkomen, en waar elk bezoek voelt als thuiskomen.',
    description: 'Default about description if none provided from Sanity'
  },
  {
    key: 'about.feature1.title',
    category: 'about',
    english: 'Premium Coffee',
    dutch: 'Premium koffie',
    description: 'First feature title'
  },
  {
    key: 'about.feature1.description',
    category: 'about',
    english: 'Freshly roasted beans from sustainable farms around the world',
    dutch: 'Vers gebrande bonen van duurzame boerderijen wereldwijd',
    description: 'First feature description'
  },
  {
    key: 'about.feature2.title',
    category: 'about',
    english: 'Made with Love',
    dutch: 'Gemaakt met liefde',
    description: 'Second feature title'
  },
  {
    key: 'about.feature2.description',
    category: 'about',
    english: 'Every cup is crafted with passion and attention to detail',
    dutch: 'Elke kop wordt gemaakt met passie en oog voor detail',
    description: 'Second feature description'
  },
  {
    key: 'about.feature3.title',
    category: 'about',
    english: 'Community Hub',
    dutch: 'Gemeenschapshub',
    description: 'Third feature title'
  },
  {
    key: 'about.feature3.description',
    category: 'about',
    english: 'A welcoming space for locals and visitors to connect and relax',
    dutch: 'Een gastvrije ruimte waar locals en bezoekers kunnen ontspannen en connecten',
    description: 'Third feature description'
  },
  {
    key: 'about.stats.established',
    category: 'about',
    english: 'Established',
    dutch: 'Opgericht',
    description: 'Statistics label for establishment year'
  },
  {
    key: 'about.stats.customers',
    category: 'about',
    english: 'Happy Customers',
    dutch: 'Tevreden klanten',
    description: 'Statistics label for customer count'
  },
  {
    key: 'about.stats.varieties',
    category: 'about',
    english: 'Coffee Varieties',
    dutch: 'Koffievariëteiten',
    description: 'Statistics label for coffee varieties'
  },
  {
    key: 'about.stats.fresh',
    category: 'about',
    english: 'Fresh Daily',
    dutch: 'Dagelijks vers',
    description: 'Statistics label for freshness'
  },

  // Specialties Section
  {
    key: 'specialties.title',
    category: 'specialties',
    english: 'Our Specialties',
    dutch: 'Onze specialiteiten',
    description: 'Specialties section main title'
  },
  {
    key: 'specialties.description',
    category: 'specialties',
    english: 'Discover our carefully curated selection of premium coffee and delicious treats, each crafted with the finest ingredients and attention to detail.',
    dutch: 'Ontdek ons zorgvuldig samengestelde aanbod van premium koffie en heerlijke lekkernijen, elk gemaakt met de beste ingrediënten en oog voor detail.',
    description: 'Specialties section description'
  },
  {
    key: 'specialties.espresso.title',
    category: 'specialties',
    english: 'Espresso',
    dutch: 'Espresso',
    description: 'Default espresso title'
  },
  {
    key: 'specialties.espresso.description',
    category: 'specialties',
    english: 'Rich, bold, and perfectly extracted shot of premium coffee',
    dutch: 'Rijke, krachtige en perfect geëxtraheerde shot premium koffie',
    description: 'Default espresso description'
  },
  {
    key: 'specialties.cappuccino.title',
    category: 'specialties',
    english: 'Cappuccino',
    dutch: 'Cappuccino',
    description: 'Default cappuccino title'
  },
  {
    key: 'specialties.cappuccino.description',
    category: 'specialties',
    english: 'Smooth espresso topped with velvety steamed milk foam',
    dutch: 'Zachte espresso met fluwelen gestoomde melkschuim',
    description: 'Default cappuccino description'
  },
  {
    key: 'specialties.flatWhite.title',
    category: 'specialties',
    english: 'Flat White',
    dutch: 'Flat White',
    description: 'Default flat white title'
  },
  {
    key: 'specialties.flatWhite.description',
    category: 'specialties',
    english: 'Double shot espresso with perfectly textured microfoam',
    dutch: 'Dubbele shot espresso met perfect getextureerd melkschuim',
    description: 'Default flat white description'
  },
  {
    key: 'specialties.pastries.title',
    category: 'specialties',
    english: 'Homemade Pastries',
    dutch: 'Huisgemaakte gebakjes',
    description: 'Default pastries title'
  },
  {
    key: 'specialties.pastries.description',
    category: 'specialties',
    english: 'Fresh baked croissants, muffins, and seasonal treats',
    dutch: 'Vers gebakken croissants, muffins en seizoensgebak',
    description: 'Default pastries description'
  },
  {
    key: 'specialties.pastries.price',
    category: 'specialties',
    english: 'From €2.80',
    dutch: 'Vanaf €2,80',
    description: 'Default pastries price'
  },
  {
    key: 'specialties.cta.title',
    category: 'specialties',
    english: 'Order Online',
    dutch: 'Online bestellen',
    description: 'Call to action title in specialties'
  },
  {
    key: 'specialties.cta.description',
    category: 'specialties',
    english: 'Skip the wait and order your favorite coffee and treats online for pickup or delivery.',
    dutch: 'Sla de wachttijd over en bestel je favoriete koffie en lekkernijen online voor afhaal of bezorging.',
    description: 'Call to action description in specialties'
  },
  {
    key: 'specialties.cta.button',
    category: 'specialties',
    english: 'Order Now',
    dutch: 'Bestel nu',
    description: 'Call to action button in specialties'
  },

  // Gallery Section
  {
    key: 'gallery.title',
    category: 'gallery',
    english: 'Gallery',
    dutch: 'Galerij',
    description: 'Gallery section main title'
  },
  {
    key: 'gallery.description',
    category: 'gallery',
    english: 'Take a visual journey through our café and discover the atmosphere, craftsmanship, and moments that make our space special.',
    dutch: 'Maak een visuele reis door ons café en ontdek de sfeer, vakmanschap en momenten die onze ruimte bijzonder maken.',
    description: 'Gallery section description'
  },
  {
    key: 'gallery.viewImage',
    category: 'gallery',
    english: 'View Image',
    dutch: 'Bekijk afbeelding',
    description: 'Hover text on gallery images'
  },
  {
    key: 'gallery.close',
    category: 'gallery',
    english: 'Close',
    dutch: 'Sluiten',
    description: 'Close button in image lightbox'
  },
  {
    key: 'gallery.previous',
    category: 'gallery',
    english: 'Previous image',
    dutch: 'Vorige afbeelding',
    description: 'Previous button in image lightbox'
  },
  {
    key: 'gallery.next',
    category: 'gallery',
    english: 'Next image',
    dutch: 'Volgende afbeelding',
    description: 'Next button in image lightbox'
  },
  {
    key: 'gallery.coffeeArt',
    category: 'gallery',
    english: 'Coffee Art',
    dutch: 'Koffie kunst',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.coffeeArt.alt',
    category: 'gallery',
    english: 'Beautiful latte art',
    dutch: 'Mooie latte art',
    description: 'Default gallery image alt text'
  },
  {
    key: 'gallery.interior',
    category: 'gallery',
    english: 'Cozy Interior',
    dutch: 'Gezellig interieur',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.interior.alt',
    category: 'gallery',
    english: 'Warm and inviting café interior',
    dutch: 'Warm en uitnodigend café interieur',
    description: 'Default gallery image alt text'
  },
  {
    key: 'gallery.pastries',
    category: 'gallery',
    english: 'Fresh Pastries',
    dutch: 'Verse gebakjes',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.pastries.alt',
    category: 'gallery',
    english: 'Delicious homemade pastries',
    dutch: 'Heerlijke huisgemaakte gebakjes',
    description: 'Default gallery image alt text'
  },
  {
    key: 'gallery.beans',
    category: 'gallery',
    english: 'Coffee Beans',
    dutch: 'Koffiebonen',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.beans.alt',
    category: 'gallery',
    english: 'Premium coffee beans',
    dutch: 'Premium koffiebonen',
    description: 'Default gallery image alt text'
  },
  {
    key: 'gallery.barista',
    category: 'gallery',
    english: 'Barista at Work',
    dutch: 'Barista aan het werk',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.barista.alt',
    category: 'gallery',
    english: 'Skilled barista preparing coffee',
    dutch: 'Bekwame barista die koffie zet',
    description: 'Default gallery image alt text'
  },
  {
    key: 'gallery.atmosphere',
    category: 'gallery',
    english: 'Café Atmosphere',
    dutch: 'Café sfeer',
    description: 'Default gallery image title'
  },
  {
    key: 'gallery.atmosphere.alt',
    category: 'gallery',
    english: 'Relaxing café atmosphere',
    dutch: 'Ontspannen café sfeer',
    description: 'Default gallery image alt text'
  },

  // Contact Section
  {
    key: 'contact.title',
    category: 'contact',
    english: 'Visit Us',
    dutch: 'Bezoek ons',
    description: 'Contact section main title'
  },
  {
    key: 'contact.description',
    category: 'contact',
    english: 'We\'re located in the heart of Groningen, ready to welcome you for an exceptional coffee experience.',
    dutch: 'We bevinden ons in het hart van Groningen, klaar om je te verwelkomen voor een uitzonderlijke koffie ervaring.',
    description: 'Contact section description'
  },
  {
    key: 'contact.getInTouch',
    category: 'contact',
    english: 'Get in Touch',
    dutch: 'Neem contact op',
    description: 'Contact information section title'
  },
  {
    key: 'contact.address',
    category: 'contact',
    english: 'Address',
    dutch: 'Adres',
    description: 'Address label'
  },
  {
    key: 'contact.defaultAddress',
    category: 'contact',
    english: 'Grote Markt 1\n9712 HN Groningen\nNetherlands',
    dutch: 'Grote Markt 1\n9712 HN Groningen\nNederland',
    description: 'Default address if none provided'
  },
  {
    key: 'contact.phone',
    category: 'contact',
    english: 'Phone',
    dutch: 'Telefoon',
    description: 'Phone label'
  },
  {
    key: 'contact.email',
    category: 'contact',
    english: 'Email',
    dutch: 'E-mail',
    description: 'Email label'
  },
  {
    key: 'contact.followUs',
    category: 'contact',
    english: 'Follow Us',
    dutch: 'Volg ons',
    description: 'Social media label'
  },
  {
    key: 'contact.openingHours',
    category: 'contact',
    english: 'Opening Hours',
    dutch: 'Openingstijden',
    description: 'Opening hours section title'
  },
  {
    key: 'contact.closed',
    category: 'contact',
    english: 'Closed',
    dutch: 'Gesloten',
    description: 'Closed status for opening hours'
  },
  {
    key: 'contact.days.monday',
    category: 'contact',
    english: 'Monday',
    dutch: 'Maandag',
    description: 'Monday day name'
  },
  {
    key: 'contact.days.tuesday',
    category: 'contact',
    english: 'Tuesday',
    dutch: 'Dinsdag',
    description: 'Tuesday day name'
  },
  {
    key: 'contact.days.wednesday',
    category: 'contact',
    english: 'Wednesday',
    dutch: 'Woensdag',
    description: 'Wednesday day name'
  },
  {
    key: 'contact.days.thursday',
    category: 'contact',
    english: 'Thursday',
    dutch: 'Donderdag',
    description: 'Thursday day name'
  },
  {
    key: 'contact.days.friday',
    category: 'contact',
    english: 'Friday',
    dutch: 'Vrijdag',
    description: 'Friday day name'
  },
  {
    key: 'contact.days.saturday',
    category: 'contact',
    english: 'Saturday',
    dutch: 'Zaterdag',
    description: 'Saturday day name'
  },
  {
    key: 'contact.days.sunday',
    category: 'contact',
    english: 'Sunday',
    dutch: 'Zondag',
    description: 'Sunday day name'
  },
  {
    key: 'contact.invitation',
    category: 'contact',
    english: 'Come join us for the perfect cup of coffee in a cozy atmosphere!',
    dutch: 'Kom bij ons voor de perfecte kop koffie in een gezellige sfeer!',
    description: 'Invitation message in opening hours'
  },
  {
    key: 'contact.findUs',
    category: 'contact',
    english: 'Find Us',
    dutch: 'Vind ons',
    description: 'Map section title'
  },
  {
    key: 'contact.location',
    category: 'contact',
    english: 'Located in the historic center of Groningen',
    dutch: 'Gelegen in het historische centrum van Groningen',
    description: 'Location description'
  },
  {
    key: 'contact.accessibility',
    category: 'contact',
    english: 'We\'re easily accessible by bike, public transport, or on foot. Street parking is available nearby.',
    dutch: 'We zijn gemakkelijk bereikbaar per fiets, openbaar vervoer of te voet. Straatparkeren is beschikbaar in de buurt.',
    description: 'Accessibility information'
  },

  // Footer
  {
    key: 'footer.description',
    category: 'footer',
    english: 'Serving exceptional coffee in the heart of Groningen since 2019.',
    dutch: 'Al sinds 2019 serveren we uitzonderlijke koffie in het hart van Groningen.',
    description: 'Footer description'
  },
  {
    key: 'footer.quickLinks',
    category: 'footer',
    english: 'Quick Links',
    dutch: 'Snelle links',
    description: 'Quick links section title'
  },
  {
    key: 'footer.connectWithUs',
    category: 'footer',
    english: 'Connect With Us',
    dutch: 'Verbind met ons',
    description: 'Social media section title'
  },
  {
    key: 'footer.allRightsReserved',
    category: 'footer',
    english: 'All rights reserved.',
    dutch: 'Alle rechten voorbehouden.',
    description: 'Copyright notice'
  },
  {
    key: 'footer.madeWith',
    category: 'footer',
    english: 'Made with',
    dutch: 'Gemaakt met',
    description: 'Made with love prefix'
  },
  {
    key: 'footer.inGroningen',
    category: 'footer',
    english: 'in Groningen',
    dutch: 'in Groningen',
    description: 'Made with love suffix'
  }
]

// Function to create documents in Sanity
export const createTranslations = async (client) => {
  const results = []
  
  for (const translation of initialTranslations) {
    try {
      const doc = await client.create({
        _type: 'translations',
        ...translation
      })
      results.push(doc)
    } catch (error) {
      console.error(`Error creating translation ${translation.key}:`, error)
    }
  }
  
  return results
}
