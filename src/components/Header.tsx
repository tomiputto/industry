import { useState } from 'react'
import goforeLogo from '../../icons/Gofore-Logo.png'
import arrowWhite from '../../icons/arrow-white.png'
import './Header.css'

const navItems = [
  { label: 'Showreel', href: '#video' },
  { label: 'Services', href: '#services' },
  { label: 'Industry 5.0 booklet', href: '#booklet' },
  { label: 'Get in touch', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <a href="/" className="header__logo">
            <img src={goforeLogo} alt="Gofore" width={106} height={18} />
          </a>
          <div className="header__separator" />
          <nav className="header__lang">
            <a href="#" className="header__lang-item header__lang-item--muted">FI</a>
            <a href="#" className="header__lang-item header__lang-item--active">EN</a>
            <a href="#" className="header__lang-item header__lang-item--muted">DE</a>
          </nav>
        </div>

        {/* Desktop nav */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="header__nav-item">
              {item.label}
            </a>
          ))}
          <a href="https://gofore.com" className="header__nav-item header__nav-item--external" target="_blank" rel="noopener noreferrer">
            Gofore.com
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
            <a href="#" className="header__lang-item header__lang-item--muted">FI</a>
            <a href="#" className="header__lang-item header__lang-item--active">EN</a>
            <a href="#" className="header__lang-item header__lang-item--muted">DE</a>
          </nav>

          <nav className="header__drawer-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="header__drawer-item" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="https://gofore.com"
              className="header__drawer-item header__drawer-item--external"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gofore.com
              <img src={arrowWhite} alt="" width={12} height={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
