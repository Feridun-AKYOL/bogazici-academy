import { processContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function ProcessSection() {
  const { language } = useLanguage()
  const content = processContent[language]

  return (
    <section className="section section--dark">
      <Container>
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />
        <div className="steps-grid">
          {content.steps.map((step, index) => (
            <div key={step.title} className="step-card reveal">
              <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
