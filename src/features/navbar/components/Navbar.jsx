import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from '../../../components/ui/Container'
import { Button } from '../../../components/ui/Button'
import { Logo } from '../../../components/common/Logo'
import { navLinks, externalLinks } from '../../../constants/links'
import { useLanguage } from '../../../app/providers'

const labels = {
  tr: {
    home: 'Ana Sayfa',
    about: 'Hakkimizda',
    courses: 'Kurslar',
    contact: 'Iletisim',
    moodle: 'Moodle',
    cta: 'Gorusme Planla',
  },
  en: {
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    contact: 'Contact',
    moodle: 'Moodle',
    cta: 'Book a Call',
  },
  nl: {
    home: 'Start',
    about: 'Over Ons',
    courses: 'Opleidingen',
    contact: 'Contact',
    moodle: 'Moodle',
    cta: 'Plan Een Gesprek',
  },
}

export function Navbar() {
  const { language, setLanguage, supportedLanguages } = useLanguage()
  const [open, setOpen] = useState(false)
  const t = labels[language]

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <Logo />
        </Link>
        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
              onClick={() => setOpen(false)}
            >
              {t[link.key]}
            </NavLink>
          ))}
          <a
            className="nav-link nav-link--external"
            href={externalLinks.moodle}
            target="_blank"
            rel="noreferrer"
          >
            {t.moodle}
          </a>
          <div className="navbar__lang">
            {supportedLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={lang === language ? 'lang-chip is-active' : 'lang-chip'}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
        <div className="navbar__actions">
          <Button as={Link} to="/contact" variant="primary" size="sm">
            {t.cta}
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  )
}
