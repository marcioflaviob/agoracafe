import { useState, useEffect } from 'react'
import { client } from './sanity'
import { TranslationProvider, useTranslation } from './context/TranslationContext'
import { useDocumentHead } from './hooks/useDocumentHead'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function AppContent() {
  const [cafeData, setCafeData] = useState(null)
  const [openingHours, setOpeningHours] = useState([])
  const [gallery, setGallery] = useState([])
  const [specialties, setSpecialties] = useState([])
  const [loading, setLoading] = useState(true)
  const { t, loading: translationsLoading } = useTranslation()

  // Use the custom hook to manage document head
  useDocumentHead(cafeData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cafe, hours, galleryImages, specialtyItems] = await Promise.all([
          client.fetch('*[_type == "cafe"][0]{..., favicon, pageTitle}'),
          client.fetch('*[_type == "openingHours"] | order(day)'),
          client.fetch('*[_type == "gallery"] | order(order asc)'),
          client.fetch('*[_type == "specialties"] | order(order asc)')
        ])

        setCafeData(cafe)
        setOpeningHours(hours)
        setGallery(galleryImages)
        setSpecialties(specialtyItems)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading || translationsLoading) {
    return (
      <div className="min-h-screen bg-almond flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eclipse mx-auto mb-4"></div>
          <p className="text-on-almond text-lg">{t('general.loading', 'Loading...')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header cafeData={cafeData} />
      <Hero cafeData={cafeData} />
      <About cafeData={cafeData} />
      <Specialties specialties={specialties} cafeData={cafeData} />
      <Gallery gallery={gallery} />
      <Contact cafeData={cafeData} openingHours={openingHours} />
      <Footer cafeData={cafeData} />
    </div>
  )
}

function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  )
}

export default App
