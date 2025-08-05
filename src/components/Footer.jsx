import { Heart, Instagram, Facebook } from 'lucide-react'
import { fileUrlFor } from '../sanity'
import { useTranslation } from '../context/TranslationContext'

const Footer = ({ cafeData }) => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  const menuPdfUrl = cafeData?.menuPdf ? fileUrlFor(cafeData.menuPdf) : null

  const quickLinks = [
    { label: t('navigation.about', 'About Us'), id: 'about' },
    { label: t('navigation.specialties', 'Specialties'), id: 'specialties' },
    { label: t('navigation.gallery', 'Gallery'), id: 'gallery' },
    { label: t('navigation.contact', 'Contact'), id: 'contact' }
  ]

  return (
    <footer className="bg-almond py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-on-almond mb-4">
                {cafeData?.name || 'Agora Café'}
              </h3>
              {cafeData?.tagline && (
                <p className="text-on-almond opacity-80 mb-4">
                  {cafeData.tagline}
                </p>
              )}
              <p className="text-on-almond opacity-80">
                {t('footer.description', 'Serving exceptional coffee in the heart of Groningen since 2019.')}
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-on-almond mb-4">{t('footer.quickLinks', 'Quick Links')}</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-on-almond opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-on-almond mb-4">{t('footer.connectWithUs', 'Connect With Us')}</h4>
              
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                {cafeData?.instagramUrl && (
                  <a
                    href={cafeData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-forest p-3 rounded-full text-on-dark hover:bg-eclipse transition-all duration-200 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {cafeData?.facebookUrl && (
                  <a
                    href={cafeData.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-forest p-3 rounded-full text-on-dark hover:bg-eclipse transition-all duration-200 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
              </div>

              {menuPdfUrl && (
                <a
                  href={menuPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-forest text-on-dark px-6 py-2 rounded-full font-medium hover:bg-eclipse transition-all duration-200 transform hover:scale-105"
                >
                  {t('navigation.viewMenu', 'View Menu')}
                </a>
              )}
            </div>
          </div>


          <div className="border-t border-eclipse border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

              <p className="text-on-almond opacity-80 text-sm">
                © {currentYear} {cafeData?.name || 'Agora Café'}. {t('footer.allRightsReserved', 'All rights reserved.')}</p>

              <div className="flex items-center space-x-2 text-on-almond opacity-80 text-sm">
                <span>{t('footer.madeWith', 'Made with')}</span>
                <Heart size={16} className="text-forest" />
                <span>{t('footer.inGroningen', 'in Groningen')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
