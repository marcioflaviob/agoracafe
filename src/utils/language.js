/**
 * Language utilities for internationalization
 */

export const SUPPORTED_LANGUAGES = {
  en: 'English',
  nl: 'Nederlands'
}

export const DEFAULT_LANGUAGE = 'en'

/**
 * Detects the user's preferred language based on browser locale
 * Falls back to English if not supported
 */
export function detectUserLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  // Check localStorage first for user preference
  const savedLanguage = localStorage.getItem('preferredLanguage')
  if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
    return savedLanguage
  }
  
  // Check browser language
  const browserLanguage = navigator.language.toLowerCase()
  
  // Direct match
  if (SUPPORTED_LANGUAGES[browserLanguage]) {
    return browserLanguage
  }
  
  // Check language code only (e.g., 'en-US' -> 'en')
  const languageCode = browserLanguage.split('-')[0]
  if (SUPPORTED_LANGUAGES[languageCode]) {
    return languageCode
  }
  
  // Dutch language variations
  if (browserLanguage.includes('nl') || browserLanguage.includes('dutch')) {
    return 'nl'
  }
  
  return DEFAULT_LANGUAGE
}

/**
 * Saves user's language preference to localStorage
 */
export function saveLanguagePreference(language) {
  if (typeof window !== 'undefined' && SUPPORTED_LANGUAGES[language]) {
    localStorage.setItem('preferredLanguage', language)
  }
}

/**
 * Gets the display name for a language code
 */
export function getLanguageDisplayName(languageCode) {
  return SUPPORTED_LANGUAGES[languageCode] || SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE]
}
