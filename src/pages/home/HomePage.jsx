import { HeroSection } from '../../features/hero/components/HeroSection'
import { AboutSection } from '../../features/about/components/AboutSection'
import { ProgramsSection } from '../../features/programs/components/ProgramsSection'
import { ProcessSection } from '../../features/process/components/ProcessSection'
import { ContactSection } from '../../features/contact/components/ContactSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
