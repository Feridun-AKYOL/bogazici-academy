import { Container } from '../ui/Container'
import { Logo } from './Logo'
import { externalLinks } from '../../constants/links'
import { useLanguage } from '../../app/providers'
import { footerContent } from '../../features/contact/data'

export function Footer() {
  const { language } = useLanguage()
  const content = footerContent[language]

  return (
    <footer className="footer">
      <Container className="footer__grid">
        <div>
          <Logo variant="dark" />
          <p>{content.tagline}</p>
        </div>
        <div>
          <h4>{content.quickLinksTitle}</h4>
          <ul>
            {content.quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{content.platformsTitle}</h4>
          <ul>
            <li>
              <a href={externalLinks.moodle} target="_blank" rel="noreferrer">
                Moodle
              </a>
            </li>
            <li>
              <a href={externalLinks.ixl} target="_blank" rel="noreferrer">
                IXL
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="footer__bottom">{content.copyright}</div>
    </footer>
  )
}
