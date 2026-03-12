import { Link } from 'react-router-dom'
import { heroContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { Button } from '../../../components/ui/Button'

export function HeroSection() {
  const { language } = useLanguage()
  const content = heroContent[language]

  return (
    <section className="hero">
      <Container className="hero__grid">
        <div className="hero__content reveal">
          <span className="eyebrow">Bogazici Academy</span>
          <h1>{content.title}</h1>
          <p className="hero__subtitle">{content.subtitle}</p>
          <div className="hero__actions">
            <Button as={Link} to="/courses" variant="primary">
              {content.primaryCta}
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              {content.secondaryCta}
            </Button>
          </div>
          <ul className="hero__highlights">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero__card reveal delay-1">
          <div className="hero__card-inner">
            {content.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__glow" />
        </div>
      </Container>
    </section>
  )
}
