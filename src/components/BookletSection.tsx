import highlightImage from '../../icons/Highlight-Image.png'
import { useLanguage } from '../i18n/LanguageContext'
import './BookletSection.css'

export default function BookletSection() {
  const { t } = useLanguage()

  return (
    <section className="booklet" id="booklet">
      <div className="booklet__inner">
        <div className="booklet__text">
          <h2 className="booklet__heading">{t('booklet.heading')}</h2>
          <p className="booklet__body">{t('booklet.body')}</p>
          <a href="#" className="booklet__btn">{t('booklet.btn')}</a>
        </div>
        <div className="booklet__image">
          <img src={highlightImage} alt="Industry 5.0 Design Booklet" />
        </div>
      </div>
    </section>
  )
}
