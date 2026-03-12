import { Link } from 'react-router-dom'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { useLanguage } from '../../app/providers'

const notFoundContent = {
  tr: { message: 'Aradiginiz sayfa bulunamadi.', cta: 'Ana Sayfaya Don' },
  en: { message: 'The page you are looking for could not be found.', cta: 'Back to Home' },
  nl: { message: 'De pagina die u zoekt kon niet worden gevonden.', cta: 'Terug naar Home' },
}

export function NotFoundPage() {
  const { language } = useLanguage()
  const content = notFoundContent[language]

  return (
    <section className="section section--light">
      <Container className="not-found">
        <h1>404</h1>
        <p>{content.message}</p>
        <Button as={Link} to="/" variant="primary">
          {content.cta}
        </Button>
      </Container>
    </section>
  )
}
