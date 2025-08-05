import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { useTranslation } from '../context/TranslationContext'

const Contact = ({ cafeData, openingHours }) => {
  const { t } = useTranslation()
  
  // Default opening hours if none are provided
  const defaultHours = [
    { day: 'monday', openTime: '07:00', closeTime: '18:00', isClosed: false },
    { day: 'tuesday', openTime: '07:00', closeTime: '18:00', isClosed: false },
    { day: 'wednesday', openTime: '07:00', closeTime: '18:00', isClosed: false },
    { day: 'thursday', openTime: '07:00', closeTime: '18:00', isClosed: false },
    { day: 'friday', openTime: '07:00', closeTime: '18:00', isClosed: false },
    { day: 'saturday', openTime: '08:00', closeTime: '17:00', isClosed: false },
    { day: 'sunday', openTime: '09:00', closeTime: '16:00', isClosed: false }
  ]

  const displayHours = openingHours.length > 0 ? openingHours : defaultHours

  const formatDay = (day) => {
    const translationKey = `contact.days.${day.toLowerCase()}`
    return t(translationKey, day.charAt(0).toUpperCase() + day.slice(1))
  }

  const formatTime = (time) => {
    return time || '--:--'
  }

  return (
    <section id="contact" className="py-20 bg-eclipse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-on-dark mb-6">
              {t('contact.title', 'Visit Us')}
            </h2>
            <p className="text-lg lg:text-xl text-on-dark max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('contact.description', 'We\'re located in the heart of Groningen, ready to welcome you for an exceptional coffee experience.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-on-dark mb-8">{t('contact.getInTouch', 'Get in Touch')}</h3>

              <div className="flex items-start space-x-4">
                <div className="bg-almond p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-on-almond" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-on-dark mb-2">{t('contact.address', 'Address')}</h4>
                  <p className="text-on-dark opacity-90 leading-relaxed">
                    {cafeData?.address || t('contact.defaultAddress', 'Grote Markt 1\n9712 HN Groningen\nNetherlands')}
                  </p>
                </div>
              </div>

              {cafeData?.phone && (
                <div className="flex items-start space-x-4">
                  <div className="bg-almond p-3 rounded-full">
                    <Phone className="w-6 h-6 text-on-almond" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-on-dark mb-2">{t('contact.phone', 'Phone')}</h4>
                    <a 
                      href={`tel:${cafeData.phone}`}
                      className="text-on-dark opacity-90 hover:text-almond transition-colors duration-200"
                    >
                      {cafeData.phone}
                    </a>
                  </div>
                </div>
              )}

              {cafeData?.email && (
                <div className="flex items-start space-x-4">
                  <div className="bg-almond p-3 rounded-full">
                    <Mail className="w-6 h-6 text-on-almond" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-on-dark mb-2">{t('contact.email', 'Email')}</h4>
                    <a 
                      href={`mailto:${cafeData.email}`}
                      className="text-on-dark opacity-90 hover:text-almond transition-colors duration-200"
                    >
                      {cafeData.email}
                    </a>
                  </div>
                </div>
              )}

              {(cafeData?.instagramUrl || cafeData?.facebookUrl) && (
                <div className="flex items-start space-x-4">
                  <div className="bg-almond p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-on-almond" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-on-dark mb-2">{t('contact.followUs', 'Follow Us')}</h4>
                    <div className="flex space-x-4">
                      {cafeData?.instagramUrl && (
                        <a 
                          href={cafeData.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-dark opacity-90 hover:text-almond transition-colors duration-200 flex items-center space-x-2"
                        >
                          <Instagram size={20} />
                          <span>Instagram</span>
                        </a>
                      )}
                      {cafeData?.facebookUrl && (
                        <a 
                          href={cafeData.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-dark opacity-90 hover:text-almond transition-colors duration-200 flex items-center space-x-2"
                        >
                          <Facebook size={20} />
                          <span>Facebook</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Opening Hours */}
            <div>
              <div className="bg-forest rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-almond p-3 rounded-full">
                    <Clock className="w-6 h-6 text-on-almond" />
                  </div>
                  <h3 className="text-3xl font-bold text-on-dark">{t('contact.openingHours', 'Opening Hours')}</h3>
                </div>

                <div className="space-y-4">
                  {displayHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-almond border-opacity-20 last:border-b-0">
                      <span className="text-on-dark font-medium">
                        {formatDay(hour.day)}
                      </span>
                      <span className="text-on-dark opacity-90">
                        {hour.isClosed ? t('contact.closed', 'Closed') : `${formatTime(hour.openTime)} - ${formatTime(hour.closeTime)}`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-almond rounded-xl">
                  <p className="text-on-almond text-center font-medium">
                    {t('contact.invitation', 'Come join us for the perfect cup of coffee in a cozy atmosphere!')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-forest rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-on-dark mb-6 text-center">{t('contact.findUs', 'Find Us')}</h3>
              <div className="bg-matcha rounded-xl overflow-hidden">
                {cafeData?.mapEmbedUrl ? (
                  <>

                    <div className="w-full h-96 relative">
                      <iframe
                        src={cafeData.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-t-xl"
                      ></iframe>
                    </div>
                    
                    <div className="p-8 text-center">
                      <p className="text-on-dark text-lg mb-4">
                        {t('contact.location', 'Located in the historic center of Groningen')}
                      </p>
                      <p className="text-on-dark opacity-90">
                        {t('contact.accessibility', 'We\'re easily accessible by bike, public transport, or on foot. Street parking is available nearby.')}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-on-dark text-lg mb-4">
                      {t('contact.location', 'Located in the historic center of Groningen')}
                    </p>
                    <p className="text-on-dark opacity-90">
                      {t('contact.accessibility', 'We\'re easily accessible by bike, public transport, or on foot. Street parking is available nearby.')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
