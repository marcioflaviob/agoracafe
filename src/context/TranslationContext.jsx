import { createContext, useContext, useState, useEffect } from 'react'
import { client } from '../sanity'
import { detectUserLanguage, saveLanguagePreference, DEFAULT_LANGUAGE } from '../utils/language'

const TranslationContext = createContext()

export function TranslationProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE)
  const [translations, setTranslations] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch translations from Sanity
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setLoading(true)
        const translationData = await client.fetch('*[_type == "translations"]')
        
        // Transform array into nested object for easy access
        const translationMap = {}
        translationData.forEach(item => {
          translationMap[item.key] = {
            en: item.english,
            nl: item.dutch
          }
        })
        
        setTranslations(translationMap)
        setError(null)
      } catch (err) {
        console.error('Error fetching translations:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTranslations()
  }, [])

  // Detect and set initial language
  useEffect(() => {
    const detectedLanguage = detectUserLanguage()
    setCurrentLanguage(detectedLanguage)
  }, [])

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
    saveLanguagePreference(languageCode)
  }

  const t = (key, fallback = '') => {
    if (!translations[key]) {
      return fallback || key
    }
    
    return translations[key][currentLanguage] || translations[key][DEFAULT_LANGUAGE] || fallback || key
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    loading,
    error,
    translations
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
