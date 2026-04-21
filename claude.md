# Portfolio — 남경진 (kkaengji)

> 이 문서는 Claude Code가 프로젝트 컨텍스트를 파악하기 위한 핸드오프 문서입니다.
> 새 세션 시작 시 이 파일을 먼저 읽고 작업을 이어가세요.

---

## 프로젝트 개요

IT 웹 프론트엔드 개발자 **남경진(kkaengji)** 의 취업용 포트폴리오 사이트.

**타겟**: 네카라쿠배 대기업 + 중견기업
**핵심 메시지**: "DB부터 화면까지 만들던 사람이, 이제 화면을 제대로 만듭니다."

## 디자인 컨셉 (확정됨)

- **뼈대**: Linear / Vercel / Stripe 톤 (심플하고 내용 중심) — `leerob.io` 구조 참고
- **악센트**: 터미널 감성을 "포인트"로만 녹이기. 전면 터미널 스타일 ❌
  - 포인트 1: Hero 터미널 위젯 (타이핑 애니메이션 + 깜빡이는 커서)
  - 포인트 2: About 섹션을 `$ cat ./journey.md` 스타일로
  - 섹션 제목에 `$` 프롬프트 악센트
  - 모노스페이스는 제목/숫자/코드블록에만 (본문은 Pretendard)
- **컬러**: **라이트 모드 기본** + **앰버(#d97706, CRT 빈티지 호박색) 포인트** + 다크 토글
- **서사 녹이기**: "ASP.NET 4년 8개월 → Next.js 전환" 피벗 스토리를 About 섹션에 자연스럽게

## 스택 (확정됨)

- **Vite + React 19 + TypeScript** (Next.js 아님 — React 프로젝트 하나 확보 목적)
- **Tailwind CSS v3** + **shadcn/ui** (new-york style, neutral base)
- **React Router v7** (라우팅)
- **cmdk** (커맨드 팔레트)
- **lucide-react** (아이콘)
- **Pretendard** (본문 한글 폰트) + **JetBrains Mono** (코드/숫자)

## 프로필 (남경진)

- 이름: 남경진
- 이메일: nkj960425@naver.com
- GitHub: https://github.com/kkaengji
- Blog: https://velog.io/@kkaengji/posts
- 경력: 4년 8개월 (C# ASP.NET 풀스택) → 프론트엔드 전환 중
- KT Cloud 부트캠프 수료 (2025)

## 페이지 구조

```
/                  홈 (Hero + Featured Work + About + Other Works + Skills + Contact)
/projects/urr      URR 상세 케이스 스터디
/projects/bcm      BCM 상세 케이스 스터디
```

## 폴더 구조

```
portfolio/
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── components.json (shadcn)
├── index.html
├── .gitignore
├── CLAUDE.md (이 파일)
├── public/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css            ← 테마 CSS 변수 (라이트/다크 + amber)
    ├── vite-env.d.ts
    ├── lib/
    │   └── utils.ts         ← cn() 헬퍼
    ├── providers/
    │   ├── ThemeProvider.tsx         ← 라이트/다크 토글
    │   └── CommandPaletteProvider.tsx ← ⌘K 상태
    ├── components/
    │   ├── ui/              ← shadcn 컴포넌트 (아직 없음 — 만들어야 함)
    │   ├── layout/
    │   │   ├── Header.tsx           ✅
    │   │   ├── Footer.tsx           ✅ (data/profile.ts 참조 중)
    │   │   └── ThemeToggle.tsx      ✅
    │   ├── sections/        ← 홈 페이지 섹션들 (아직 없음)
    │   └── CommandPalette.tsx       ← ⌘K UI (아직 없음, App.tsx 참조 중)
    ├── pages/               ← 아직 없음
    │   ├── Home.tsx
    │   ├── ProjectURR.tsx
    │   ├── ProjectBCM.tsx
    │   └── NotFound.tsx
    ├── data/                ← 아직 없음
    │   ├── profile.ts       ← 이름, 연락처, 링크
    │   ├── projects.ts      ← URR, BCM, 포트폴리오, QMS
    │   ├── journey.ts       ← 경력 타임라인
    │   └── skills.ts        ← 기술 스택 카테고리
    └── hooks/               (아직 없음)
```

## 진행 상황

### 해야 할 것

- Task #1: 프로젝트 초기 세팅 (package.json, tsconfig, vite.config, tailwind.config, postcss, index.html, components.json)
- 디자인 시스템 핵심 (`src/index.css` — 라이트/다크 + 앰버 CSS 변수 + 유틸 클래스)
- `ThemeProvider`, `CommandPaletteProvider`
- `Header`, `Footer`, `ThemeToggle`
- `main.tsx`, `App.tsx` (라우팅 포함)

**즉시 만들어야 파일이 성립되는 것들:**

1. **`src/data/profile.ts`** — Footer가 이미 import 중 (`contact` 객체 필요)
2. **shadcn UI 컴포넌트들** — Header/ThemeToggle/Footer가 `@/components/ui/button` import 중
   - `src/components/ui/button.tsx`
   - `src/components/ui/badge.tsx`
   - `src/components/ui/card.tsx`
   - `src/components/ui/separator.tsx`
   - `src/components/ui/dialog.tsx`
   - `src/components/ui/command.tsx`
3. **페이지 스텁 4개** — App.tsx 라우팅에서 import 중
   - `src/pages/Home.tsx`
   - `src/pages/ProjectURR.tsx`
   - `src/pages/ProjectBCM.tsx`
   - `src/pages/NotFound.tsx`
4. **`src/components/CommandPalette.tsx`** — App.tsx에서 import 중

**그 다음 순서:**

- Task #3: 데이터 파일 (profile, projects, journey, skills)
- Task #4: Hero 섹션 + 터미널 위젯
- Task #5: Featured Work 섹션 (URR, BCM 카드)
- Task #6: About/Journey 섹션
- Task #7: Other Works + Skills + Contact
- Task #8: ⌘K 커맨드 팔레트 구현
- Task #9: 프로젝트 상세 페이지 (URR, BCM 케이스 스터디)
- Task #10: 반응형 + README + 최종 점검

## 컨텐츠 (프로젝트 데이터)

### Hero 한 줄 훅

> DB부터 화면까지 만들던 사람이, 이제 화면을 제대로 만듭니다.

서브: `Frontend Developer · Seoul · 4년 8개월 full-stack → React/Next.js`

### 01. URR (우르르) — 대표 프로젝트 1순위

- 기간: 2026.02 – 2026.04.22 (진행 중)
- 소개: K-POP 팬 대상 공정 티켓팅 플랫폼
- 역할: 15명 합동팀(PM·디자인·백엔드·AI·클라우드·보안)에서 **프론트엔드 1인 단독**
- 스택: Next.js 16, TypeScript, TanStack Query v5, Zustand, Tailwind CSS v4, shadcn/ui
- 데모: https://urr.guru
- 핵심 성과:
  - Vite → Next.js 16 + FSD 마이그레이션, AI 에이전트 병렬 개발 (45개 API, 49회 PR 머지)
  - JWT 인증 — Access Token 메모리 보관, Refresh Token httpOnly 쿠키, XSS 차단
  - 폴링 기반 실시간 대기열 (10초 갱신, 멤버십 등급별 입장 차등)
  - SVG 기반 인터랙티브 좌석 선택 + 낙관적 UI + 결제 전 서버 재검증
  - 멤버십 4등급 권한 제어 (라이트닝/썬더/클라우드/미스트)
  - 공식 양도 마켓

### 02. Blind Chicken Market (BCM) — 대표 프로젝트 2순위 (애정 ♥)

- 기간: 2025.10.31 – 2026.01.02 (2개월)
- 소개: 실시간 익명 중고 경매 플랫폼
- 역할: 유저 사이트 프론트엔드 전담 (FE 2명, BE 3명)
- 스택: Next.js 16, TypeScript, WebSocket(STOMP), TossPayments, Tailwind, shadcn/ui
- 데모: https://bcm.u-jinlee1029.store
- 영상: https://youtube.com/watch?v=dM07anPjfsk
- 핵심 성과:
  - WebSocket(STOMP) 실시간 입찰 — 경매 ID 단위 채널 구독
  - IDOR 이중방어 — 결제 페이지 진입 시 주문 조회 API 강제 호출, 서버 403 감지 후 리다이렉트
  - TossPayments 서버사이드 결제 승인 (API Route로 시크릿 키 서버 격리)
  - Intersection Observer 무한 스크롤

### 03. 개발자 포트폴리오 (이 사이트)

- 기간: 2026.03 –
- 스택: Vite + React + TypeScript + Tailwind + shadcn/ui
- 주요 구현: 라이트/다크 테마, ⌘K 커맨드 팔레트, 터미널 악센트 UI

### 04. 품질 관리 시스템 QMS (이전 경력)

- 기간: 2020 – 2025 (4년 8개월, 솔바테크놀러지 대리)
- 소개: 자동차·전자·화학 제조 기업 대상 B2B 솔루션
- 스택: C# ASP.NET, MSSQL, jQuery
- 납품: LS전선, SK넥실리스 등
- 핵심 성과:
  - 산업별 신규 메뉴 개발 (기획서 기반 DB·SP·화면 전부 구현)
  - 부서 간/협력사 결재 시스템 + 자동 메일 알림
  - XSS 방어 (클라 escape + 서버 validation 이중)
  - 파일 업로드 및 품질 문서 관리 (버전·권한)

## 경력 타임라인 (About 섹션용)

```
2012–2015    전산고
2015–2020    경남대학교 컴퓨터공학과
2020–2025    솔바테크놀러지, C# ASP.NET 풀스택 대리
             ├ 4년 8개월
             ├ DB 설계 · SP 작성 · 화면까지 풀스택
             └ LS전선 · SK넥실리스 납품
2025         KT Cloud 부트캠프 수료 — React, Next.js, TypeScript
2026.02–     URR 프론트 1인 단독 + BCM (현재)
```

## 기술 스택 분류 (Skills 섹션용)

- **Core**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **State / Data**: TanStack Query, Zustand
- **Backend (이전 경력)**: C# ASP.NET, MSSQL, MySQL, Spring Boot
- **Tools**: Git, GitHub, Vercel
- **AI Workflow**: Claude Sonnet 4.6, ChatGPT, Gemini, GitHub Copilot, v0

## ⌘K 팔레트 구조

```
Navigate   Home · Featured · About · Skills · Contact
Projects   URR · BCM
Links      GitHub · Blog · Email
Theme      Light · Dark · System
Commands   Copy Email · Back to Top
```

## 코딩 컨벤션

- 타입: `interface` 보다 `type` 선호, props는 컴포넌트 상단에 inline or export
- import 정렬: 외부 → 내부(`@/...`) 순서, 빈 줄로 구분
- 스타일링: Tailwind utility + `cn()` 헬퍼, `class-variance-authority` 변형
- 데이터는 `src/data/` 에서 읽기. 컴포넌트는 순수하게 유지
- 한글 텍스트 OK. 주석은 한글 허용
- 접근성: `aria-label`, focus-visible outline 지킬 것 (amber ring 이미 설정됨)

## 실행 명령

```bash
npm install
npm run dev    # 개발 서버
npm run build  # 프로덕션 빌드
```

## 중요 주의사항

1. **npm install 아직 안 돌렸음** — Claude Code로 넘어가면 첫 실행 시 필요
2. **데이터 파일이 없으면 빌드 에러남** — Footer가 `@/data/profile` import 중, 이거 먼저 만들어야 함
3. **shadcn 컴포넌트 미설치** — 수동 생성 또는 `npx shadcn@latest add button card badge dialog command separator` 실행
4. **포트폴리오 이전 시도**: 경진님이 이전에 터미널 전면 스타일 포트폴리오를 만들다가 "사공이 많아서 산으로 감" 으로 엎음. 이번에는 **Linear/Vercel 뼈대 + 터미널 악센트 포인트 3개** 로 절제해서 갈 것. 전면 터미널 스타일로 가지 말 것.
