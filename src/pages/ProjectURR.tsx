import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ExternalLink, Check, X } from 'lucide-react'
import { useState, useEffect } from 'react'

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={onClose}>
        <X className="h-6 w-6" />
      </button>
      <img src={src} alt="" className="max-h-[90vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

const project = projects.find((p) => p.id === 'urr')!

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-6">
      <p className="text-base font-semibold">
        <span className="text-amber-600 mr-1">$</span>{label}
      </p>
    </div>
  )
}

const LABEL_COLOR: Record<string, string> = {
  문제: 'text-red-500',
  원인: 'text-orange-500',
  해결: 'text-blue-500',
  결과: 'text-green-600',
}

function TroubleCard({ title, content, index }: { title: string; content: string; index: number }) {
  const rows = content.split('\n').map((line) => {
    const colonIdx = line.indexOf(': ')
    if (colonIdx === -1) return { label: null, text: line }
    const label = line.slice(0, colonIdx)
    const text = line.slice(colonIdx + 2)
    return ['문제', '원인', '해결', '결과'].includes(label)
      ? { label, text }
      : { label: null, text: line }
  })

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="flex items-start gap-3 px-5 py-4 border-b border-border bg-muted/20">
        <span className="font-mono text-xs text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-sm font-medium leading-snug">{title}</h3>
      </div>
      <div className="px-5 py-4 space-y-3">
        {rows.map((row, i) =>
          row.label ? (
            <div key={i} className="grid grid-cols-[3rem_1fr] gap-x-4 items-start">
              <span className={`font-mono text-xs pt-0.5 ${LABEL_COLOR[row.label] ?? 'text-amber-600'}`}>{row.label}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{row.text}</p>
            </div>
          ) : (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">{row.text}</p>
          )
        )}
      </div>
    </div>
  )
}

export default function ProjectURR() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </Button>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="amber">{project.tag}</Badge>
          <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-1">{project.subtitle}</p>
        <p className="text-sm text-muted-foreground">역할: {project.role}</p>

        {project.links.length > 0 && (
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
        )}
      </header>

      <Separator className="mb-10" />

      <section className="mb-10">
        <SectionHeading label="개요" />
        {(project.overview ?? project.description).split('\n\n').map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">{p}</p>
        ))}
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <SectionHeading label="스크린샷" />
        <div className="grid grid-cols-2 gap-3">
          {['urr-1.png', 'urr-2.png', 'urr-3.png', 'urr-4.png'].map((src) => (
            <img key={src} src={`/${src}`} alt={src} onClick={() => setLightbox(`/${src}`)} className="rounded-lg border border-border w-full h-48 object-cover cursor-zoom-in hover:opacity-90 transition-opacity" />
          ))}
        </div>
        {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <SectionHeading label="기술 스택" />
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <SectionHeading label="핵심 구현" />
        <ul className="space-y-3">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.troubles && project.troubles.length > 0 && (
        <>
          <Separator className="mb-10" />
          <section className="mb-10">
            <SectionHeading label="트러블슈팅" />
            <div className="space-y-4">
              {project.troubles.map((t, i) => (
                <TroubleCard key={i} title={t.title} content={t.content} index={i} />
              ))}
            </div>
          </section>
        </>
      )}

      {project.retrospective && (
        <>
          <Separator className="mb-10" />
          <section>
            <SectionHeading label="회고" />
            <div className="rounded-xl border border-border bg-muted/30 p-6 space-y-3">
              {project.retrospective.split('\n\n').map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
