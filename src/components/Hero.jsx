import { urlFor, fileUrlFor } from '../sanity'
import { ArrowDown, AlertCircle } from 'lucide-react'
import { useTranslation } from '../context/TranslationContext'

const Hero = ({ cafeData }) => {
  const { t, currentLanguage } = useTranslation()
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuPdfUrl = cafeData?.menuPdf ? fileUrlFor(cafeData.menuPdf) : null

  const hasAlert = cafeData?.alertTitleEn || cafeData?.alertTitleNl
  const alertTitle = currentLanguage === 'nl' ? cafeData?.alertTitleNl : cafeData?.alertTitleEn
  const alertMessage = currentLanguage === 'nl' ? cafeData?.alertMessageNl : cafeData?.alertMessageEn
  const shouldShowAlert = hasAlert && (alertTitle || alertMessage)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {shouldShowAlert && (
        <div className="absolute top-20 left-4 right-4 z-10 max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-95">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3 flex-1">
                {alertTitle && (
                  <h3 className="text-sm font-medium text-yellow-800 mb-1">
                    {alertTitle}
                  </h3>
                )}
                {alertMessage && (
                  <p className="text-sm text-yellow-700">
                    {alertMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {cafeData?.heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={urlFor(cafeData.heroImage).width(1920).height(1080).quality(90).url()}
            alt={cafeData.name || 'Agora Café'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(var(--eclipse-rgb, 0, 0, 0), 0.5)' }}></div>
        </div>
      )}

      {!cafeData?.heroImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-matcha via-forest to-eclipse"></div>
      )}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-on-dark mb-6 leading-tight">
          {cafeData?.name || 'Agora Café'}
        </h1>
        
        {cafeData?.tagline && (
          <p className="text-xl sm:text-2xl lg:text-3xl text-on-dark mb-8 font-light opacity-90">
            {cafeData.tagline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {menuPdfUrl && (
            <a
              href={menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-almond text-on-almond px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {t('hero.viewMenu', 'View Our Menu')}
            </a>
          )}
          
          <button
            onClick={scrollToAbout}
            className="border-2 border-almond text-on-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-almond hover:text-(--color-eclipse) transform hover:scale-105 transition-all duration-300"
          >
            {t('hero.learnMore', 'Learn More')}
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-on-dark hover:text-almond transition-colors duration-300 animate-bounce"
        aria-label={t('hero.scrollDown', 'Scroll down')}
      >
        <ArrowDown size={32} />
      </button>
    </section>
  )
}

export default Hero
