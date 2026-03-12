import { aboutContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function AboutSection() {
  const { language } = useLanguage()
  const content = aboutContent[language]

  return (
    <section className="section section--light">
      <Container className="section__grid">
        <div className="reveal">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
        </div>
        <div className="card reveal delay-1">
          <ul className="list">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
