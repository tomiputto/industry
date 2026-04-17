import iconPacemaker from '../../icons/icon-pacemaker.png'
import iconRocket from '../../icons/icon-rocket.png'
import iconWaterEc from '../../icons/icon-water_ec.png'
import iconWaterVoc from '../../icons/icon-water_voc.png'
import { useLanguage } from '../i18n/LanguageContext'
import './ServicesGrid.css'

const services = [
  { icon: iconPacemaker, n: 1, bullets: ['b1', 'b2', 'b3', 'b4'] },
  { icon: iconRocket,    n: 2, bullets: ['b1', 'b2', 'b3'] },
  { icon: iconWaterEc,   n: 3, bullets: ['b1', 'b2', 'b3', 'b4'] },
  { icon: iconWaterVoc,  n: 4, bullets: ['b1', 'b2', 'b3', 'b4'] },
]

export default function ServicesGrid() {
  const { t } = useLanguage()

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <h2 className="services__heading">{t('services.heading')}</h2>
        <div className="services__grid">
          {services.map(({ icon, n, bullets }) => (
            <div key={n} className="service-card">
              <img src={icon} alt="" className="service-card__icon" width={44} height={44} />
              <h3 className="service-card__title">{t(`services.${n}.title`)}</h3>
              <ul className="service-card__list">
                {bullets.map((b) => (
                  <li key={b}>{t(`services.${n}.${b}`)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
