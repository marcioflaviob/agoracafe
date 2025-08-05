import { useEffect } from 'react'
import { urlFor } from '../sanity'

export const useDocumentHead = (cafeData) => {
  useEffect(() => {
    if (!cafeData) return

    // Set document title
    const title = cafeData.pageTitle || cafeData.name || 'Agora Café'
    document.title = title

    // Set favicon
    if (cafeData.favicon) {
      const faviconUrl = urlFor(cafeData.favicon).width(32).height(32).url()
      
      // Remove existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
      existingFavicons.forEach(link => link.remove())

      // Add new favicon
      const faviconLink = document.createElement('link')
      faviconLink.rel = 'icon'
      faviconLink.type = 'image/png'
      faviconLink.href = faviconUrl
      document.head.appendChild(faviconLink)

      // Add apple-touch-icon for better mobile support
      const appleTouchIcon = document.createElement('link')
      appleTouchIcon.rel = 'apple-touch-icon'
      appleTouchIcon.href = urlFor(cafeData.favicon).width(180).height(180).url()
      document.head.appendChild(appleTouchIcon)
    }

    // Set meta description if available
    if (cafeData.description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = cafeData.description
    }

    // Set Open Graph title
    if (cafeData.pageTitle || cafeData.name) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (!ogTitle) {
        ogTitle = document.createElement('meta')
        ogTitle.setAttribute('property', 'og:title')
        document.head.appendChild(ogTitle)
      }
      ogTitle.content = cafeData.pageTitle || cafeData.name
    }

    // Set Open Graph description
    if (cafeData.description) {
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (!ogDescription) {
        ogDescription = document.createElement('meta')
        ogDescription.setAttribute('property', 'og:description')
        document.head.appendChild(ogDescription)
      }
      ogDescription.content = cafeData.description
    }

  }, [cafeData])
}
