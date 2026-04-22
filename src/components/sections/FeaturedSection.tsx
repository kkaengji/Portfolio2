import { Link } from 'react-router-dom'
import { featuredProjects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

export function FeaturedSection() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="section-heading">Projects</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group relative flex flex-col gap-3 rounded-xl border border-border p-5 hover:border-amber-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <Badge variant="amber" className="mb-2 text-xs">
                  {project.tag}
                </Badge>
                <h2 className="font-semibold text-base group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-600 shrink-0 transition-colors mt-0.5" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
              {project.stack.slice(0, 4).map((s) => (
                <Badge key={s} variant="mono" className="text-xs">
                  {s}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="mono" className="text-xs">
                  +{project.stack.length - 4}
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
