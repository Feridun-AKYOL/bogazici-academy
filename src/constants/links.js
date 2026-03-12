import { env } from '../config/env'
import { routes } from './routes'

export const navLinks = [
  { key: 'home', to: routes.home },
  { key: 'about', to: routes.about },
  { key: 'courses', to: routes.courses },
  { key: 'contact', to: routes.contact },
]

export const externalLinks = {
  moodle: env.moodleUrl,
  ixl: env.ixlUrl,
  email: `mailto:${env.contactEmail}`,
}
