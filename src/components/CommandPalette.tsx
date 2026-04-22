import { useNavigate } from 'react-router-dom'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { useCommandPalette } from '@/providers/CommandPaletteProvider'
import { useTheme } from '@/providers/ThemeProvider'
import { contact } from '@/data/profile'
import {
  Home,
  Briefcase,
  User,
  Zap,
  Mail,
  Github,
  Sun,
  Moon,
  ArrowUp,
  Copy,
} from 'lucide-react'

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette()
  const { setTheme } = useTheme()
  const navigate = useNavigate()

  function run(fn: () => void) {
    setOpen(false)
    setTimeout(fn, 50)
  }

  function scrollTo(id: string) {
    run(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="명령어 또는 페이지를 검색하세요..." />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => run(() => navigate('/'))}>
            <Home />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo('featured')}>
            <Briefcase />
            <span>Featured Work</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo('about')}>
            <User />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo('skills')}>
            <Zap />
            <span>Skills</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo('contact')}>
            <Mail />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          <CommandItem onSelect={() => run(() => navigate('/projects/urr'))}>
            <Briefcase />
            <span>URR — 공정 티켓팅 플랫폼</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => navigate('/projects/bcm'))}>
            <Briefcase />
            <span>BCM — 익명 경매 플랫폼</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            onSelect={() => run(() => window.open(contact.github, '_blank'))}
          >
            <Github />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem
            onSelect={() => run(() => window.open(contact.blog, '_blank'))}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <polyline points="7.5,8 12,16 16.5,8" />
            </svg>
            <span>Blog (Velog)</span>
          </CommandItem>
          <CommandItem
            onSelect={() => run(() => (window.location.href = `mailto:${contact.email}`))}
          >
            <Mail />
            <span>Email</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => run(() => setTheme('light'))}>
            <Sun />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => setTheme('dark'))}>
            <Moon />
            <span>Dark Mode</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Commands">
          <CommandItem
            onSelect={() =>
              run(() => navigator.clipboard.writeText(contact.email))
            }
          >
            <Copy />
            <span>이메일 복사</span>
          </CommandItem>
          <CommandItem
            onSelect={() => run(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
          >
            <ArrowUp />
            <span>Back to Top</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
