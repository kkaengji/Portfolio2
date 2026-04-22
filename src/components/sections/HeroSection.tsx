import { useEffect, useState } from "react";
import { profile, contact } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";

const TYPING_LINES = [
  "Frontend Developer",
  "React · Next.js · TypeScript",
  "4년 8개월 full-stack → React",
  "DB부터 화면까지",
];

function TerminalWidget() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentLine = TYPING_LINES[lineIndex]!;

    if (!isDeleting && charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
      return () => clearTimeout(t);
    }

    if (!isDeleting && charIndex === currentLine.length) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((i) => (i + 1) % TYPING_LINES.length);
    }
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <div className="inline-flex flex-col gap-1.5 rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <p className="text-muted-foreground text-xs">
        <span className="text-amber-600">~/kkaengji</span>{" "}
        <span className="text-muted-foreground">$</span> whoami
      </p>
      <p className="text-foreground">
        {displayText}
        <span className="terminal-cursor ml-0.5" />
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-16">
      <div className="flex flex-col gap-6">
        <TerminalWidget />

        <div>
          <div className="flex items-baseline gap-2.5 mb-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <span className="font-mono text-sm text-muted-foreground">
              {profile.handle}
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-foreground">
            {profile.tagline[0]}
            <br />
            {profile.tagline[1]}
          </p>
          <p className="mt-3 text-muted-foreground">
            {profile.taglineSub}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="amber" asChild>
            <a href="#featured">프로젝트 보기</a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Velog 블로그"
            >
              <BookOpen className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
