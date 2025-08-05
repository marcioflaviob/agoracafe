import { useState } from 'react'
import { urlFor } from '../sanity'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from '../context/TranslationContext'

const Gallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { t } = useTranslation()

  // Default gallery images if none are provided from Sanity
  const defaultGallery = [
    { title: t('gallery.coffeeArt', 'Coffee Art'), alt: t('gallery.coffeeArt.alt', 'Beautiful latte art') },
    { title: t('gallery.interior', 'Cozy Interior'), alt: t('gallery.interior.alt', 'Warm and inviting café interior') },
    { title: t('gallery.pastries', 'Fresh Pastries'), alt: t('gallery.pastries.alt', 'Delicious homemade pastries') },
    { title: t('gallery.beans', 'Coffee Beans'), alt: t('gallery.beans.alt', 'Premium coffee beans') },
    { title: t('gallery.barista', 'Barista at Work'), alt: t('gallery.barista.alt', 'Skilled barista preparing coffee') },
    { title: t('gallery.atmosphere', 'Café Atmosphere'), alt: t('gallery.atmosphere.alt', 'Relaxing café atmosphere') }
  ]

  const displayGallery = gallery.length > 0 ? gallery : defaultGallery

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = selectedImage.index
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : displayGallery.length - 1
    } else {
      newIndex = currentIndex < displayGallery.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage({ ...displayGallery[newIndex], index: newIndex })
  }

  return (
    <section id="gallery" className="py-20 bg-forest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-on-dark mb-6">
              {t('gallery.title', 'Gallery')}
            </h2>
            <p className="text-lg lg:text-xl text-on-dark max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('gallery.description', 'Take a visual journey through our café and discover the atmosphere, craftsmanship, and moments that make our space special.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayGallery.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openLightbox(image, index)}
              >
                {image.image ? (
                  <img
                    src={urlFor(image.image).width(400).height(300).quality(90).url()}
                    alt={image.alt || image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-64 bg-eclipse flex items-center justify-center">
                    <span className="text-on-dark opacity-60">{image.title}</span>
                  </div>
                )}
                
                <div 
                  className="absolute inset-0 transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(var(--eclipse-rgb), 0)', 
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.4)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0)'}
                >
                  <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {t('gallery.viewImage', 'View Image')}
                  </div>
                </div>
                
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eclipse to-transparent p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(var(--eclipse-rgb), 0.9)' }}
        >
          <div className="relative max-w-4xl max-h-full">

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              style={{ backgroundColor: 'rgba(var(--eclipse-rgb), 0.5)' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.75)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.5)'}
              aria-label={t('gallery.close', 'Close')}
            >
              <X size={24} />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white p-2 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'rgba(var(--eclipse-rgb), 0.5)' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.75)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.5)'}
              aria-label={t('gallery.previous', 'Previous image')}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white p-2 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'rgba(var(--eclipse-rgb), 0.5)' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.75)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(var(--eclipse-rgb), 0.5)'}
              aria-label={t('gallery.next', 'Next image')}
            >
              <ChevronRight size={24} />
            </button>

            {selectedImage.image ? (
              <img
                src={urlFor(selectedImage.image).width(1200).height(900).quality(95).url()}
                alt={selectedImage.alt || selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <div className="w-96 h-72 bg-matcha flex items-center justify-center rounded-lg">
                <span className="text-on-dark text-xl">{selectedImage.title}</span>
              </div>
            )}

            {selectedImage.title && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 
                  className="text-white text-xl font-semibold px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'rgba(var(--eclipse-rgb), 0.5)' }}
                >
                  {selectedImage.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
