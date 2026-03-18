import arrowBlue from '../../icons/arrow-blue.png'
import iconWaterVoc from '../../icons/icon-water_voc.png'
import iconPacemaker from '../../icons/icon-pacemaker.png'
import iconRocket from '../../icons/icon-rocket.png'
import iconLiftToTalk from '../../icons/icon-lift_to_talk.png'
import iconWaterEc from '../../icons/icon-water_ec.png'
import iconStethoscope from '../../icons/icon-stethoscope_check.png'
import './ServicesGrid.css'

const services = [
  {
    icon: iconWaterVoc,
    title: 'Here is the item number one',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
  {
    icon: iconPacemaker,
    title: 'Here is the item number two',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
  {
    icon: iconRocket,
    title: 'Here is the item number three',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
  {
    icon: iconLiftToTalk,
    title: 'Here is the item number four',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
  {
    icon: iconWaterEc,
    title: 'Here is the item number five',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
  {
    icon: iconStethoscope,
    title: 'Here is the item number six',
    description: "Couple of lines to open up what this is and why it's a great thing.",
  },
]

export default function ServicesGrid() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <img src={service.icon} alt="" className="service-card__icon" width={44} height={44} />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <a href="#" className="service-card__link">
                Read more
                <img src={arrowBlue} alt="" width={12} height={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
