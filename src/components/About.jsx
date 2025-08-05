import { Coffee, Heart, Users } from 'lucide-react'
import { useTranslation } from '../context/TranslationContext'

const About = ({ cafeData }) => {
  const { t, currentLanguage } = useTranslation()
  
  const features = [
    {
      icon: <Coffee className="w-12 h-12" />,
      title: t('about.feature1.title', 'Premium Coffee'),
      description: t('about.feature1.description', 'Freshly roasted beans from sustainable farms around the world')
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t('about.feature2.title', 'Made with Love'),
      description: t('about.feature2.description', 'Every cup is crafted with passion and attention to detail')
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('about.feature3.title', 'Community Hub'),
      description: t('about.feature3.description', 'A welcoming space for locals and visitors to connect and relax')
    }
  ]

  const buildStats = () => {
    const stats = []
    if (cafeData?.stat1Number && (cafeData?.stat1LabelEn || cafeData?.stat1LabelNl)) {
      const label = currentLanguage === 'nl' ? cafeData.stat1LabelNl || cafeData.stat1LabelEn : cafeData.stat1LabelEn || cafeData.stat1LabelNl
      stats.push({ number: cafeData.stat1Number, label })
    }
    
    if (cafeData?.stat2Number && (cafeData?.stat2LabelEn || cafeData?.stat2LabelNl)) {
      const label = currentLanguage === 'nl' ? cafeData.stat2LabelNl || cafeData.stat2LabelEn : cafeData.stat2LabelEn || cafeData.stat2LabelNl
      stats.push({ number: cafeData.stat2Number, label })
    }
    
    if (cafeData?.stat3Number && (cafeData?.stat3LabelEn || cafeData?.stat3LabelNl)) {
      const label = currentLanguage === 'nl' ? cafeData.stat3LabelNl || cafeData.stat3LabelEn : cafeData.stat3LabelEn || cafeData.stat3LabelNl
      stats.push({ number: cafeData.stat3Number, label })
    }
    
    if (cafeData?.stat4Number && (cafeData?.stat4LabelEn || cafeData?.stat4LabelNl)) {
      const label = currentLanguage === 'nl' ? cafeData.stat4LabelNl || cafeData.stat4LabelEn : cafeData.stat4LabelEn || cafeData.stat4LabelNl
      stats.push({ number: cafeData.stat4Number, label })
    }
    
    return stats
  }

  // Default stats fallback if no custom stats are provided
  const defaultStats = [
    { number: "2019", label: t('about.stats.established', 'Established') },
    { number: "500+", label: t('about.stats.customers', 'Happy Customers') },
    { number: "15+", label: t('about.stats.varieties', 'Coffee Varieties') },
    { number: "100%", label: t('about.stats.fresh', 'Fresh Daily') }
  ]

  const customStats = buildStats()
  const stats = customStats.length > 0 ? customStats : defaultStats

  return (
    <section id="about" className="py-20 bg-almond">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-on-almond mb-6">
              {t('about.title', 'About Our Café')}
            </h2>
            {cafeData?.description && (
              <p className="text-lg lg:text-xl text-on-almond max-w-3xl mx-auto leading-relaxed opacity-90">
                {cafeData.description}
              </p>
            )}
            {!cafeData?.description && (
              <p className="text-lg lg:text-xl text-on-almond max-w-3xl mx-auto leading-relaxed opacity-90">
                {t('about.description', 'Located in the heart of Groningen, our café is more than just a place to grab coffee. We\'re a community gathering space where quality meets comfort, and every visit feels like coming home.')}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-forest text-on-dark rounded-full mb-6 group-hover:bg-eclipse transition-all duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-on-almond mb-4">
                  {feature.title}
                </h3>
                <p className="text-on-almond opacity-80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className={`grid gap-8 mt-16 pt-16 border-t border-eclipse border-opacity-20 ${
            stats.length === 1 ? 'grid-cols-1 justify-items-center' :
            stats.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
            stats.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
            'grid-cols-2 md:grid-cols-4'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-on-almond mb-2">
                  {stat.number}
                </div>
                <div className="text-on-almond opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
