import { otherProjects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export function OtherWorksSection() {
  return (
    <section id="other-works" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="section-heading">Experience</p>

      <div className="space-y-6">
        {otherProjects.map((project) => (
          <div key={project.id} className="rounded-xl border border-border p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">{project.tag}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
              </div>
              <p className="text-sm text-muted-foreground shrink-0">{project.role}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <ul className="space-y-2 mb-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Badge key={s} variant="mono" className="text-xs">{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
