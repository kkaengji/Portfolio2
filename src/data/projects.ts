export type Project = {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  role: string
  stack: string[]
  highlights: string[]
  links: { label: string; url: string }[]
  featured: boolean
  tag: string
}

export const projects: Project[] = [
  {
    id: 'urr',
    title: 'URR (우르르)',
    subtitle: 'K-POP 팬 대상 공정 티켓팅 플랫폼',
    period: '2026.02 – 2026.04 (진행 중)',
    description:
      '15명 합동팀(PM·디자인·백엔드·AI·클라우드·보안)에서 프론트엔드 1인 단독으로 개발. 실시간 대기열, SVG 좌석 선택, 멤버십 권한 제어까지 구현.',
    role: '프론트엔드 1인 단독',
    stack: ['Next.js 16', 'TypeScript', 'TanStack Query v5', 'Zustand', 'Tailwind CSS v4', 'shadcn/ui'],
    highlights: [
      'Vite → Next.js 16 + FSD 마이그레이션, 45개 API·49회 PR 머지',
      'JWT 인증 — Access Token 메모리, Refresh Token httpOnly 쿠키로 XSS 차단',
      '폴링 기반 실시간 대기열 (10초 갱신, 멤버십 등급별 입장 차등)',
      'SVG 기반 인터랙티브 좌석 선택 + 낙관적 UI + 결제 전 서버 재검증',
      '멤버십 4등급 권한 제어 (라이트닝/썬더/클라우드/미스트)',
    ],
    links: [{ label: 'Demo', url: 'https://urr.guru' }],
    featured: true,
    tag: '대표 프로젝트',
  },
  {
    id: 'bcm',
    title: 'Blind Chicken Market',
    subtitle: '실시간 익명 중고 경매 플랫폼',
    period: '2025.10 – 2026.01 (2개월)',
    description:
      '실시간 입찰, 결제, 무한 스크롤까지 갖춘 중고 경매 플랫폼. 유저 사이트 프론트엔드 전담.',
    role: '유저 사이트 FE 전담 (FE 2명, BE 3명)',
    stack: ['Next.js 16', 'TypeScript', 'WebSocket (STOMP)', 'TossPayments', 'Tailwind', 'shadcn/ui'],
    highlights: [
      'WebSocket(STOMP) 실시간 입찰 — 경매 ID 단위 채널 구독',
      'IDOR 이중방어 — 결제 페이지 진입 시 주문 조회 API 강제 호출, 서버 403 감지 후 리다이렉트',
      'TossPayments 서버사이드 결제 승인 (API Route로 시크릿 키 서버 격리)',
      'Intersection Observer 무한 스크롤',
    ],
    links: [
      { label: 'Demo', url: 'https://bcm.u-jinlee1029.store' },
      { label: 'YouTube', url: 'https://youtube.com/watch?v=dM07anPjfsk' },
    ],
    featured: true,
    tag: '팀 프로젝트',
  },
  {
    id: 'portfolio',
    title: '개발자 포트폴리오',
    subtitle: '이 사이트',
    period: '2026.03 –',
    description: '라이트/다크 테마, ⌘K 커맨드 팔레트, 터미널 악센트 UI를 갖춘 포트폴리오 사이트.',
    role: '개인 프로젝트',
    stack: ['Vite', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    highlights: [
      '라이트/다크 테마 토글',
      '⌘K 커맨드 팔레트 — 페이지 탐색, 테마 전환, 링크 이동',
      '터미널 악센트 UI (Hero 위젯, 타이핑 애니메이션)',
    ],
    links: [],
    featured: false,
    tag: '개인 프로젝트',
  },
  {
    id: 'qms',
    title: '품질 관리 시스템 QMS',
    subtitle: '자동차·전자·화학 제조 기업 대상 B2B 솔루션',
    period: '2020 – 2025 (4년 8개월)',
    description:
      '솔바테크놀러지 대리로서 제조 기업 대상 B2B 품질 관리 솔루션 풀스택 개발. LS전선, SK넥실리스 등에 납품.',
    role: '풀스택 개발자 (C# ASP.NET + MSSQL)',
    stack: ['C# ASP.NET', 'MSSQL', 'jQuery'],
    highlights: [
      '산업별 신규 메뉴 개발 (기획서 기반 DB·SP·화면 전부 구현)',
      '부서 간/협력사 결재 시스템 + 자동 메일 알림',
      'XSS 방어 (클라이언트 escape + 서버 validation 이중)',
      '파일 업로드 및 품질 문서 관리 (버전·권한)',
    ],
    links: [],
    featured: false,
    tag: '이전 경력',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
