import { useTranslation } from '../context/TranslationContext'
import { SUPPORTED_LANGUAGES } from '../utils/language'

const LanguageSwitcher = ({ className = '' }) => {
  const { currentLanguage, changeLanguage } = useTranslation()

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 cursor-pointer ${
            currentLanguage === code
              ? 'bg-almond text-on-almond'
              : 'text-on-dark hover:text-almond hover:bg-forest'
          }`}
          title={`Switch to ${name}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
