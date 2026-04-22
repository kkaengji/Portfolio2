import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedSection } from '@/components/sections/FeaturedSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { OtherWorksSection } from '@/components/sections/OtherWorksSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Separator />
      <FeaturedSection />
      <AboutSection />
      <OtherWorksSection />
      <ContactSection />
    </main>
  )
}
