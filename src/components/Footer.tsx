import goforeFooterLogo from '../../icons/Gofore-footer-logo.png'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

const legalKeys = [
  'footer.legal.cookies',
  'footer.legal.whistleblowing',
  'footer.legal.privacy',
  'footer.legal.security',
  'footer.legal.iso',
  'footer.legal.brandbook',
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={goforeFooterLogo} alt="Gofore" className="footer__logo" width={158} height={26} />
        <p className="footer__tagline">{t('footer.tagline')}</p>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copyright">{t('footer.copyright')}</span>
          <nav className="footer__legal">
            {legalKeys.map((key) => (
              <a key={key} href="#" className="footer__legal-link">
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
