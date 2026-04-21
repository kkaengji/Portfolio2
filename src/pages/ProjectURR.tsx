import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'

const project = projects.find((p) => p.id === 'urr')!

export default function ProjectURR() {
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
            15명 규모의 합동팀에서 프론트엔드를 혼자 담당하며, PM·디자인·백엔드·AI·클라우드·보안 파트와
            실시간으로 협업했습니다. 45개 API 연동과 49회의 PR 머지를 통해 빠른 반복 개발과
            커뮤니케이션 능력을 키웠습니다.
          </p>
          <p>
            JWT 인증 아키텍처, 실시간 대기열, SVG 좌석 선택 등 복잡한 도메인 로직을
            혼자 설계하고 구현하며 실전 프론트엔드 역량을 쌓았습니다.
          </p>
        </div>
      </section>
    </main>
  )
}
