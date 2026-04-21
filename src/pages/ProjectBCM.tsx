import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'

const project = projects.find((p) => p.id === 'bcm')!

export default function ProjectBCM() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </Button>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="amber">{project.tag}</Badge>
          <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.subtitle}</p>
        <p className="text-sm text-muted-foreground mt-1">역할: {project.role}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.links.map((link) => (
            <Button key={link.label} variant="outline" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </header>

      <section className="mb-10">
        <h2 className="font-mono text-sm text-amber-600 mb-4">$ cat overview.md</h2>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-sm text-amber-600 mb-4">$ cat stack.txt</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-sm text-amber-600 mb-4">$ git log --oneline</h2>
        <ul className="space-y-3">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-muted/30 p-6 space-y-4">
        <h2 className="font-mono text-sm text-amber-600">$ cat lessons.md</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            WebSocket(STOMP)로 실시간 입찰을 구현하고, IDOR 취약점을 이중 방어하며
            보안에 대한 감각을 키웠습니다.
          </p>
          <p>
            TossPayments 서버사이드 결제 승인으로 시크릿 키를 서버에 격리하고,
            Intersection Observer 무한 스크롤로 사용자 경험을 개선했습니다.
          </p>
          <p>
            BCM은 기술적으로나 팀워크 면에서나 특별히 애착이 가는 프로젝트입니다.
          </p>
        </div>
      </section>
    </main>
  )
}
