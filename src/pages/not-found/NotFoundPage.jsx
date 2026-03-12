import { Link } from 'react-router-dom'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'

export function NotFoundPage() {
  return (
    <section className="section section--light">
      <Container className="not-found">
        <h1>404</h1>
        <p>Aradiginiz sayfa bulunamadi.</p>
        <Button as={Link} to="/" variant="primary">
          Ana Sayfaya Don
        </Button>
      </Container>
    </section>
  )
}
