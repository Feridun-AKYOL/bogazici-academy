import { aboutContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function AboutSection() {
  const { language } = useLanguage()
  const content = aboutContent[language]

  return (
    <section className="section section--muted">
      <Container className="about__grid">
        <div className="about__image-wrap reveal">
          <img
            src="https://picsum.photos/seed/classroom-belgium/560/440"
            alt="Bogazici Academy sinif"
            className="about__image"
          />
        </div>
        <div className="reveal delay-1">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
          <ul className="list about__list">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
