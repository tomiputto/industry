import { useLanguage } from '../i18n/LanguageContext'
import './StrategySection.css'

export default function StrategySection() {
  const { t } = useLanguage()

  return (
    <section className="strategy">
      <div className="strategy__inner">
        <h2 className="strategy__heading">{t('strategy.heading')}</h2>
        <p className="strategy__body">{t('strategy.body')}</p>
      </div>
    </section>
  )
}
