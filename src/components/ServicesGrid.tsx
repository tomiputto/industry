import arrowBlue from '../../icons/arrow-blue.png'
import iconWaterVoc from '../../icons/icon-water_voc.png'
import iconPacemaker from '../../icons/icon-pacemaker.png'
import iconRocket from '../../icons/icon-rocket.png'
import iconLiftToTalk from '../../icons/icon-lift_to_talk.png'
import iconWaterEc from '../../icons/icon-water_ec.png'
import iconStethoscope from '../../icons/icon-stethoscope_check.png'
import { useLanguage } from '../i18n/LanguageContext'
import './ServicesGrid.css'

const serviceIcons = [
  iconWaterVoc,
  iconPacemaker,
  iconRocket,
  iconLiftToTalk,
  iconWaterEc,
  iconStethoscope,
]

export default function ServicesGrid() {
  const { t } = useLanguage()

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__grid">
          {serviceIcons.map((icon, i) => {
            const n = i + 1
            return (
              <div key={n} className="service-card">
                <img src={icon} alt="" className="service-card__icon" width={44} height={44} />
                <h3 className="service-card__title">{t(`services.${n}.title`)}</h3>
                <p className="service-card__desc">{t(`services.${n}.desc`)}</p>
                <a href="#" className="service-card__link">
                  {t('services.readMore')}
                  <img src={arrowBlue} alt="" width={12} height={12} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
