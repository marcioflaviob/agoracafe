import { urlFor } from '../sanity'
import { useTranslation } from '../context/TranslationContext'

const Specialties = ({ specialties, cafeData }) => {
  const { t } = useTranslation()
  
  // Get the online ordering URL from Sanity, fallback to Thuisbezorgd
  const onlineOrderingUrl = cafeData?.onlineOrderingUrl || 'https://www.thuisbezorgd.nl/'
  
  // Default specialties if none are provided from Sanity
  const defaultSpecialties = [
    {
      title: t('specialties.espresso.title', 'Espresso'),
      description: t('specialties.espresso.description', 'Rich, bold, and perfectly extracted shot of premium coffee'),
      price: "€2.50"
    },
    {
      title: t('specialties.cappuccino.title', 'Cappuccino'),
      description: t('specialties.cappuccino.description', 'Smooth espresso topped with velvety steamed milk foam'),
      price: "€3.50"
    },
    {
      title: t('specialties.flatWhite.title', 'Flat White'),
      description: t('specialties.flatWhite.description', 'Double shot espresso with perfectly textured microfoam'),
      price: "€3.80"
    },
    {
      title: t('specialties.pastries.title', 'Homemade Pastries'),
      description: t('specialties.pastries.description', 'Fresh baked croissants, muffins, and seasonal treats'),
      price: t('specialties.pastries.price', 'From €2.80')
    }
  ]

  const displaySpecialties = specialties.length > 0 ? specialties : defaultSpecialties

  return (
    <section id="specialties" className="py-20 bg-matcha">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-on-dark mb-6">
              {t('specialties.title', 'Our Specialties')}
            </h2>
            <p className="text-lg lg:text-xl text-on-dark max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('specialties.description', 'Discover our carefully curated selection of premium coffee and delicious treats, each crafted with the finest ingredients and attention to detail.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {displaySpecialties.map((specialty, index) => (
              <div 
                key={index}
                className="bg-forest rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {specialty.image && (
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={urlFor(specialty.image).width(600).height(400).quality(90).url()}
                      alt={specialty.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-on-dark">
                      {specialty.title}
                    </h3>
                    {specialty.price && (
                      <span className="text-xl font-semibold text-almond">
                        {specialty.price}
                      </span>
                    )}
                  </div>
                  
                  {specialty.description && (
                    <p className="text-on-dark opacity-90 leading-relaxed">
                      {specialty.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-forest rounded-2xl p-8 lg:p-12 inline-block shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-almond rounded-full p-4 mr-4">
                  <svg 
                    className="w-8 h-8 text-on-almond" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-on-dark">
                  {t('specialties.cta.title', 'Order Online')}
                </h3>
              </div>
              <p className="text-on-dark opacity-90 mb-6 max-w-2xl">
                {t('specialties.cta.description', 'Skip the wait and order your favorite coffee and treats online for pickup or delivery.')}
              </p>
              <a 
                href={onlineOrderingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-almond text-on-almond px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  />
                </svg>
                {t('specialties.cta.button', 'Order Now')}
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialties
