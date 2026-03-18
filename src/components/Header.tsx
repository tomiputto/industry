import { useState } from 'react'
import goforeLogo from '../../icons/Gofore-Logo.png'
import arrowWhite from '../../icons/arrow-white.png'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navItems = [
    { key: 'nav.showreel', href: '#video' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.booklet', href: '#booklet' },
    { key: 'nav.getInTouch', href: '#contact' },
  ]

  const langs: Lang[] = ['fi', 'en', 'de']

  const LangNav = () => (
    <>
      {langs.map((l) => (
        <button
          key={l}
          className={`header__lang-item${lang === l ? ' header__lang-item--active' : ' header__lang-item--muted'}`}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </>
  )

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <a href="/" className="header__logo">
            <img src={goforeLogo} alt="Gofore" width={106} height={18} />
          </a>
          <div className="header__separator" />
          <nav className="header__lang">
            <LangNav />
          </nav>
        </div>

        {/* Desktop nav */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="header__nav-item">
              {t(item.key)}
            </a>
          ))}
          <a href="https://gofore.com" className="header__nav-item header__nav-item--external" target="_blank" rel="noopener noreferrer">
            {t('nav.gofore')}
            <img src={arrowWhite} alt="" width={12} height={12} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__menu-icon" />
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="header__drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="header__drawer-top">
            <a href="/" className="header__logo">
              <img src={goforeLogo} alt="Gofore" width={106} height={18} />
            </a>
            <button
              className="header__close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="header__close-icon" />
            </button>
          </div>

          <nav className="header__drawer-lang">
            <LangNav />
          </nav>

          <nav className="header__drawer-nav">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="header__drawer-item" onClick={() => setMenuOpen(false)}>
                {t(item.key)}
              </a>
            ))}
            <a
              href="https://gofore.com"
              className="header__drawer-item header__drawer-item--external"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.gofore')}
              <img src={arrowWhite} alt="" width={12} height={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
