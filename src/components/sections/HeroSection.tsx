import { useEffect, useState } from 'react'
import { profile, contact } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { useCommandPalette } from '@/providers/CommandPaletteProvider'
import { ArrowDown, Github, ExternalLink } from 'lucide-react'

const TYPING_LINES = [
  'Frontend Developer',
  'React · Next.js · TypeScript',
  '4y 8m full-stack → React',
  'DB부터 화면까지',
]

function TerminalWidget() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentLine = TYPING_LINES[lineIndex]!

    if (!isDeleting && charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 70)
      return () => clearTimeout(t)
    }

    if (!isDeleting && charIndex === currentLine.length) {
      const t = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 40)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setLineIndex((i) => (i + 1) % TYPING_LINES.length)
    }
  }, [charIndex, isDeleting, lineIndex])

  return (
    <div className="inline-flex flex-col gap-1.5 rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <p className="text-muted-foreground text-xs">
        <span className="text-amber-600">~/kkaengji</span>{' '}
        <span className="text-muted-foreground">$</span> whoami
      </p>
      <p className="text-foreground">
        {displayText}
        <span className="terminal-cursor ml-0.5" />
      </p>
    </div>
  )
}

export function HeroSection() {
  const { setOpen } = useCommandPalette()

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-20 pb-16">
      <div className="flex flex-col gap-6">
        <TerminalWidget />

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
            {profile.tagline}
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            {profile.taglineSub}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="amber"
            size="sm"
          >
            <a href="#featured">
              Work 보기
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
            ⌘K 팔레트 열기
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={contact.blog} target="_blank" rel="noopener noreferrer" aria-label="Velog">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
