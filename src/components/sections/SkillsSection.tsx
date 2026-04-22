import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="section-heading">cat ./skills.json</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-amber-600 mb-2">{group.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary" className="text-sm font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
