import { useState } from 'react'
import { contactContent } from '../data'
import { useLanguage } from '../../../app/providers'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { Button } from '../../../components/ui/Button'
import { submitContactForm } from '../../../services/contactService'

export function ContactSection() {
  const { language } = useLanguage()
  const content = contactContent[language]
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    await submitContactForm(formData)
    setStatus('success')
  }

  return (
    <section className="section section--light">
      <Container className="contact">
        <div className="contact__form reveal">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
          <form onSubmit={handleSubmit} className="form">
            <div className="form__row">
              <input
                type="text"
                name="name"
                placeholder={content.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={content.form.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__row">
              <input
                type="tel"
                name="phone"
                placeholder={content.form.phone}
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="goal"
                placeholder={content.form.goal}
                value={formData.goal}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" variant="primary" disabled={status === 'loading'}>
              {content.form.submit}
            </Button>
            {status === 'success' ? (
              <p className="form__success">{content.form.success}</p>
            ) : null}
          </form>
        </div>
        <div className="contact__info reveal delay-1">
          <div className="card">
            <h3>{content.info.title}</h3>
            <ul className="list">
              {content.info.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="contact__details">
            <div>
              <span className="eyebrow">{content.detailsLabels.email}</span>
              <p>{content.details.email}</p>
            </div>
            <div>
              <span className="eyebrow">{content.detailsLabels.phone}</span>
              <p>{content.details.phone}</p>
            </div>
            <div>
              <span className="eyebrow">{content.detailsLabels.address}</span>
              <p>{content.details.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
