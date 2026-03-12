import { programsContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { ProgramCard } from './ProgramCard'

export function ProgramsSection() {
  const { language } = useLanguage()
  const content = programsContent[language]

  return (
    <section className="section section--muted">
      <Container>
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
        />
        <div className="programs-grid">
          {content.programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </Container>
    </section>
  )
}
