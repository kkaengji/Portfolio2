# Portfolio — 남경진 (kkaengji)

> Claude Code 핸드오프 문서. 새 세션 시작 시 이 파일을 먼저 읽을 것.

---

## 프로젝트 개요

IT 웹 프론트엔드 개발자 **남경진(kyungjin)** 의 취업용 포트폴리오 사이트.

- **타겟**: 네카라쿠배 대기업 + 중견기업
- **핵심 메시지**: "DB부터 화면까지 만들던 사람이, 이제 화면을 제대로 만듭니다."

## 디자인 컨셉 (확정)

- **뼈대**: Linear / Vercel / Stripe 톤 (심플하고 내용 중심) — `leerob.io` 구조 참고
- **악센트**: 터미널 감성을 "포인트"로만. 전면 터미널 스타일 ❌
  - Hero 터미널 위젯 (타이핑 애니메이션 + 깜빡이는 커서)
  - About 섹션 `$ cat ./journey.md` 스타일
  - 섹션 제목에 `$` 프롬프트 (`.section-heading` 유틸 클래스)
  - 모노스페이스는 제목/숫자/코드블록에만 (본문은 Pretendard)
- **컬러**: 라이트 모드 기본 + 앰버(`#d97706`, CRT 빈티지 호박색) 포인트 + 다크 토글
- **서사**: ASP.NET 4년 8개월 → React 전환 피벗 스토리를 About 섹션에 자연스럽게 녹임

## 스택

- **Vite + React 19 + TypeScript** (Next.js 아님 — React 프로젝트 확보 목적)
- **Tailwind CSS v3** + **shadcn/ui** (new-york style, neutral base)
- **React Router v7**
- **cmdk** (커맨드 팔레트)
- **lucide-react** (아이콘)
- **Pretendard** (본문) + **JetBrains Mono** (코드/숫자)

## 프로필

- 이름: 남경진 / kkaengji
- 이메일: nkj960425@naver.com
- GitHub: https://github.com/kkaengji
- Blog: https://velog.io/@kkaengji/posts
- 경력: 4년 8개월 (C# ASP.NET 풀스택, 솔바테크놀러지) → 프론트엔드 전환 중
- KT Cloud 부트캠프 수료 (2025)

## 페이지 구조

```
/                  홈 (Hero → Featured → About → OtherWorks → Skills → Contact)
/projects/urr      URR 케이스 스터디
/projects/bcm      BCM 케이스 스터디
*                  NotFound (404)
```

## 현재 파일 트리 (전체 구현 완료)

```
src/
├── main.tsx
├── App.tsx                         라우팅 (React Router v7)
├── index.css                       CSS 변수 (라이트/다크 + 앰버), 유틸 클래스
├── vite-env.d.ts
├── lib/
│   └── utils.ts                    cn() 헬퍼
├── providers/
│   ├── ThemeProvider.tsx           라이트/다크 토글 (localStorage 저장)
│   └── CommandPaletteProvider.tsx  ⌘K open 상태
├── components/
│   ├── CommandPalette.tsx          ⌘K UI (cmdk 기반)
│   ├── ui/
│   │   ├── badge.tsx               variant: default | secondary | outline | amber | mono
│   │   ├── button.tsx              variant: default | outline | ghost | amber | icon
│   │   ├── command.tsx             CommandDialog, CommandInput, CommandList 등
│   │   ├── dialog.tsx
│   │   └── separator.tsx
│   ├── layout/
│   │   ├── Header.tsx              sticky, ⌘K 버튼, ThemeToggle, 홈에서만 nav 표시
│   │   ├── Footer.tsx              © + GitHub/Blog/Email 아이콘
│   │   └── ThemeToggle.tsx
│   └── sections/
│       ├── HeroSection.tsx         TerminalWidget (타이핑 애니) + 버튼 3개
│       ├── FeaturedSection.tsx     featured 프로젝트 카드 그리드
│       ├── AboutSection.tsx        피벗 스토리 + 타임라인
│       ├── OtherWorksSection.tsx   non-featured 프로젝트 리스트
│       ├── SkillsSection.tsx       skills 그룹 뱃지
│       └── ContactSection.tsx      이메일 복사 + mailto + 링크
├── pages/
│   ├── Home.tsx                    섹션 조합 + Separator
│   ├── ProjectURR.tsx              URR 케이스 스터디
│   ├── ProjectBCM.tsx              BCM 케이스 스터디
│   └── NotFound.tsx                404
└── data/
    ├── profile.ts                  profile, contact 객체
    ├── projects.ts                 Project 타입, projects 배열, featuredProjects, otherProjects
    ├── journey.ts                  JourneyItem 타입, journey 배열
    └── skills.ts                   SkillGroup 타입, skills 배열
```

## 구현 상태

### 완료

- [x] 프로젝트 초기 세팅 (Vite, TypeScript, Tailwind, shadcn, React Router)
- [x] 디자인 시스템 (`index.css` — CSS 변수, `.section-heading`, `.terminal-cursor`, `.amber-dot`)
- [x] ThemeProvider, CommandPaletteProvider
- [x] Header, Footer, ThemeToggle
- [x] 데이터 파일 4개 (profile, projects, journey, skills)
- [x] shadcn UI 컴포넌트 (badge, button, command, dialog, separator)
- [x] Home 페이지 (섹션 6개 전부)
- [x] Hero 섹션 — TerminalWidget 타이핑 애니메이션
- [x] Featured 섹션 — URR, BCM 카드
- [x] About 섹션 — 피벗 스토리 + 타임라인
- [x] OtherWorks 섹션 — 포트폴리오, QMS
- [x] Skills 섹션 — 6개 그룹 뱃지
- [x] Contact 섹션 — 이메일 복사, mailto, 링크
- [x] ⌘K 커맨드 팔레트 (Navigate / Projects / Links / Theme / Commands)
- [x] ProjectURR 케이스 스터디 페이지
- [x] ProjectBCM 케이스 스터디 페이지
- [x] NotFound (404) 페이지

### 남은 것

- [ ] 반응형 최종 점검 (모바일 브레이크포인트)
- [ ] 배포 (Vercel)
- [ ] README.md

## 컨텐츠 요약

### 프로젝트 데이터 (`src/data/projects.ts`)

| id          | 제목                 | featured | tag           |
| ----------- | -------------------- | -------- | ------------- |
| `urr`       | URR (우르르)         | ✅       | 대표 프로젝트 |
| `bcm`       | Blind Chicken Market | ✅       | 팀 프로젝트   |
| `portfolio` | 개발자 포트폴리오    | ❌       | 개인 프로젝트 |
| `qms`       | 품질 관리 시스템 QMS | ❌       | 이전 경력     |

### ⌘K 팔레트 구조

```
Navigate   Home · Featured · About · Skills · Contact
Projects   URR · BCM
Links      GitHub · Blog · Email
Theme      Light · Dark
Commands   이메일 복사 · Back to Top
```

## 코딩 컨벤션

- 타입: `type` 선호 (`interface` 보다), props는 컴포넌트 상단에 inline
- import: 외부 패키지 → `@/` 내부 순서, 빈 줄로 구분
- 스타일링: Tailwind utility + `cn()` 헬퍼
- 데이터는 `src/data/`에서 읽기. 컴포넌트는 순수하게 유지
- 접근성: `aria-label`, `focus-visible` outline (amber ring)
- 주석은 한글 허용

## 주요 커스텀 클래스 / 변형

- `.section-heading` — `font-mono text-sm text-muted-foreground mb-8`, `::before { content: '$ '; color: var(--amber); }`
- `.terminal-cursor` — 깜빡이는 앰버 블록 커서
- `Badge` variant: `amber` (앰버 배경), `mono` (모노 폰트 회색)
- `Button` variant: `amber` (앰버 배경 CTA)

## 실행 명령

```bash
npm run dev    # 개발 서버 (http://localhost:5173)
npm run build  # 프로덕션 빌드
npm run preview
```

## 주의사항

- 터미널 전면 스타일로 가지 말 것. 악센트 포인트 3개만 유지.
- 본문 폰트는 Pretendard. 모노는 제목/숫자/코드에만.
- 앰버 색상: `#d97706` (Tailwind `amber-600`), ring은 `amber-500`.
- ProjectURR / ProjectBCM은 `src/data/projects.ts`에서 id로 데이터를 읽어 렌더링.
