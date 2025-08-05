import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { fileUrlFor, urlFor } from '../sanity'
import { useTranslation } from '../context/TranslationContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({ cafeData }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  // Get the menu PDF URL
  const menuPdfUrl = cafeData?.menuPdf ? fileUrlFor(cafeData.menuPdf) : null

  // Get the logo URL
  const logoUrl = cafeData?.logo ? urlFor(cafeData.logo).url() : null

  const navigationItems = [
    { label: t('navigation.home', 'Home'), id: 'hero' },
    { label: t('navigation.about', 'About'), id: 'about' },
    { label: t('navigation.specialties', 'Specialties'), id: 'specialties' },
    { label: t('navigation.gallery', 'Gallery'), id: 'gallery' },
    { label: t('navigation.contact', 'Contact'), id: 'contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-eclipse shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <div className="flex-shrink-0">
            {logoUrl ? (
              <button
                onClick={() => scrollToSection('hero')}
                className="cursor-pointer"
              >
                <img 
                  src={logoUrl} 
                  alt={cafeData?.name || 'Agora Café'} 
                  className="h-8 lg:h-12 w-auto max-w-[120px] lg:max-w-[180px] object-contain"
                  style={{ 
                    maxHeight: '3rem', // Matches h-12 for lg screens
                    maxWidth: '180px'  // Ensures logo doesn't get too wide
                  }}
                />
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('hero')}
                className="cursor-pointer"
              >
                <h1 className="text-xl lg:text-2xl font-bold text-on-dark">
                  {cafeData?.name || 'Agora Café'}
                </h1>
              </button>
            )}
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-on-dark hover:text-almond transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {menuPdfUrl && (
              <a
                href={menuPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-almond text-on-almond px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
              >
                {t('navigation.viewMenu', 'View Menu')}
              </a>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-dark hover:text-almond transition-colors duration-200 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-eclipse border-t border-forest">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-on-dark hover:text-almond hover:bg-forest transition-all duration-200 rounded-md cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-forest mt-4">
                <div className="px-3 pb-2">
                  <LanguageSwitcher />
                </div>
                {menuPdfUrl && (
                  <a
                    href={menuPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-almond text-on-almond px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200"
                  >
                    {t('navigation.viewMenu', 'View Menu')}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
