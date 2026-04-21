import { contact, profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Mail, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <p className="section-heading">echo $CONTACT</p>

      <div className="rounded-xl border border-border p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">함께 만들어봐요</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
          새로운 프로젝트, 협업, 또는 그냥 인사라도 좋습니다.
          <br />
          언제든지 연락 주세요.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button
            variant="amber"
            onClick={copyEmail}
            className="gap-2"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? '복사됨!' : contact.email}
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" />
              메일 보내기
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-4 pt-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            {profile.handle}
          </a>
          <a
            href={contact.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Velog
          </a>
        </div>
      </div>
    </section>
  )
}
