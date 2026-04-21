import { otherProjects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

export function OtherWorksSection() {
  return (
    <section id="other-works" className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <p className="section-heading">git log --oneline ./other</p>

      <div className="divide-y divide-border">
        {otherProjects.map((project) => (
          <div key={project.id} className="py-5 flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="sm:w-36 shrink-0">
              <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
              <Badge variant="outline" className="mt-1 text-xs">{project.tag}</Badge>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Badge key={s} variant="mono" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            {project.links.length > 0 && (
              <div className="flex gap-2 shrink-0">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
