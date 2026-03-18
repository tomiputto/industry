import goforeFooterLogo from '../../icons/Gofore-footer-logo.png'
import arrowWhite from '../../icons/arrow-white.png'
import './Footer.css'

const socialLinks = [
  { label: 'Gofore.com', href: 'https://gofore.com' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Spotify', href: '#' },
]

const legalLinks = [
  { label: 'Evästeasetukset', href: '#' },
  { label: 'Väärinkäytösilmoitukset', href: '#' },
  { label: 'Tietosuojaseloste', href: '#' },
  { label: 'Tietoturvapolitiikka', href: '#' },
  { label: 'ISO27001 -sertifikaatti', href: '#' },
  { label: 'Brandbook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={goforeFooterLogo} alt="Gofore" className="footer__logo" width={158} height={26} />
        <p className="footer__tagline">Pioneering an ethical digital world</p>

        <nav className="footer__social">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer__social-link" target="_blank" rel="noopener noreferrer">
              {link.label}
              <img src={arrowWhite} alt="" width={12} height={12} />
            </a>
          ))}
        </nav>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copyright">2026 Gofore Oyj</span>
          <nav className="footer__legal">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__legal-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
