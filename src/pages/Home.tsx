import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedSection } from '@/components/sections/FeaturedSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { OtherWorksSection } from '@/components/sections/OtherWorksSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Separator />
      <FeaturedSection />
      <Separator />
      <AboutSection />
      <Separator />
      <OtherWorksSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ContactSection />
    </main>
  )
}
