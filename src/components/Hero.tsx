import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__tag">{t('hero.tag')}</p>
        <h1 className="hero__heading">{t('hero.heading')}</h1>
        <p className="hero__body">{t('hero.body')}</p>
      </div>
    </section>
  )
}
