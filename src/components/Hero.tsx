import iconPacemaker from '../../images/icon-pacemaker 1.png'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__top">
            <p className="hero__tag">{t('hero.tag')}</p>
            <h1 className="hero__heading">{t('hero.heading')}</h1>
          </div>
          <p className="hero__body">{t('hero.body')}</p>
        </div>
        <div className="hero__cta">
          <div className="hero__cta-left">
            <img src={iconPacemaker} alt="" className="hero__cta-icon" width={32} height={32} />
            <p className="hero__cta-text">{t('hero.ctaText')}</p>
          </div>
          <a href="#booklet" className="hero__cta-btn">{t('hero.ctaBtn')}</a>
        </div>
      </div>
    </section>
  )
}
