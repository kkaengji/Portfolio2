export type Trouble = {
  title: string;
  content: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  overview?: string;
  role: string;
  stack: string[];
  highlights: string[];
  troubles?: Trouble[];
  retrospective?: string;
  links: { label: string; url: string }[];
  featured: boolean;
  tag: string;
};

export const projects: Project[] = [
  {
    id: "urr",
    title: "URR (우르르)",
    subtitle: "K-POP 팬 대상 공정 티켓팅 플랫폼",
    period: "2026.02 – 2026.04",
    description:
      "FE 1인으로 45개 API·49회 PR 처리. Vite 프로토타입을 Next.js + FSD로 마이그레이션해 AI 에이전트 병렬 개발 환경을 구축했습니다. S3+CloudFront 정적 배포 환경에서 OAuth 콜백 시 메모리 토큰 유실 문제를 sessionStorage 전환으로 해결하고, Refresh Token은 httpOnly 쿠키로 분리해 XSS 탈취 경로를 차단했습니다.",
    overview:
      "K-POP 팬을 위한 공정 티켓팅 플랫폼입니다. 멤버십 등급별 대기열 입장부터 인터랙티브 좌석 선택, 7분 임시 점유·결제, 안전 양도까지 전체 예매 플로우를 구현했습니다. PM·디자인·백엔드·AI·클라우드·보안 15명 합동 팀에서 프론트엔드를 1인 단독 담당했습니다.\n\n디자인팀의 Vite 프로토타입을 Next.js 16 + FSD 구조로 마이그레이션해 AI 에이전트 병렬 개발 환경을 구축했습니다. 45개 엔드포인트를 연동했고, Access Token은 sessionStorage, Refresh Token은 httpOnly 쿠키로 분리해 XSS 차단 및 OAuth 콜백 토큰 유실 문제를 해결했습니다.",
    role: "프론트엔드 1인 단독",
    stack: [
      "Next.js 16",
      "TypeScript",
      "TanStack Query v5",
      "Zustand",
      "Tailwind CSS v4",
      "shadcn/ui",
    ],
    highlights: [
      "Vite → Next.js 16 + FSD 마이그레이션, 45개 API·49회 PR 머지",
      "JWT 인증 — Access Token sessionStorage, Refresh Token httpOnly 쿠키로 XSS 차단",
      "폴링 기반 실시간 대기열 (10초 갱신, 멤버십 등급별 입장 차등)",
      "SVG 인터랙티브 좌석 맵 — 구역별 잔여석 API + 개별 좌석 가용성 API 조합, 가용/선택/점유 3단계 색상 시각화 (Zustand)",
      "7분 임시 점유 + 낙관적 UI + 결제 전 서버 재검증",
      "예매 완료 QR 코드 + 마이티켓 월렛 — 예약 ID 기반 실 데이터 API 연동",
      "멤버십 4등급 권한 제어 (라이트닝/썬더/클라우드/미스트)",
      "안전 양도 시스템 — 양도 게시판 + 양도 신청 플로우 API 연동",
    ],
    troubles: [
      {
        title: "S3 정적 배포 환경 — OAuth 콜백 토큰 유실 (403)",
        content:
          "문제: 카카오 소셜 로그인 완료 후 본인인증 단계에서 API 요청이 403 반환. S3+CloudFront 배포 환경에서만 발생, 로컬 정상.\n원인: OAuth 콜백 후 CloudFront가 새 HTML 로드 시 full page reload 발생, JS 메모리의 Access Token 초기화.\n해결: tokenStore에 sessionStorage 백업 계층 추가. 저장 시 sessionStorage에도 복사, 모듈 초기화 시 자동 복원. Refresh Token은 httpOnly 쿠키라 XSS 탈취 불가, Access Token 수명 60분으로 허용 가능한 트레이드오프 판단.\n결과: OAuth 콜백 후 페이지 전환 시에도 토큰 유지.",
      },
      {
        title: "React Compiler와 수동 useCallback 이중 메모이제이션 충돌",
        content:
          "문제: 온보딩 플로우(소셜 로그인 → 본인인증 → 가입 완료)에서 특정 단계로 넘어갈 때 화면이 멈추거나 핸들러가 실행되지 않는 현상 간헐적 발생.\n원인: Next.js 16에 포함된 React Compiler(실험적)가 자동 메모이제이션을 처리하는데, 수동 useCallback과 이중으로 적용되어 함수 참조가 의도치 않게 고정됨.\n해결: useOnboardingAuth 훅에서 수동 useCallback 전부 제거. React Compiler가 관리하는 환경에서는 useMemo/useCallback 수동 작성 금지.\n결과: 온보딩 플로우 정상 동작. React Compiler 사용 환경 전반에 수동 메모이제이션 금지 원칙 적용.",
      },
    ],
    retrospective:
      "잘된 것: FSD + AI 에이전트 병렬 개발 조합이 효과적이었습니다. 레이어 단방향 import 규칙 덕분에 에이전트 간 코드 충돌이 없었고, ui/ → model/ → api/ 순서로 세션을 나눠도 중단·재개가 자연스러웠습니다. 인증 설계도 httpOnly 쿠키 + 메모리 토큰 조합으로 XSS 노출 면적을 최소화하고, 401 자동 재시도 인터셉터가 TanStack Query 에러 흐름과 자연스럽게 통합됐습니다.\n\n아쉬운 것: TierLevel 대소문자 불일치로 25개 파일을 전면 수정해야 했습니다. 백엔드 API 스펙 확인 없이 프론트 편의 기준으로 타입을 먼저 정의한 결과입니다. 예매 Zustand store도 늦게 도입되어 일부 컴포넌트에 props drilling 코드가 잔존합니다. 여러 라우트에 걸치는 상태는 초기 설계 시 스토어로 먼저 정의해야 한다는 교훈을 얻었습니다.",
    links: [{ label: "GitHub", url: "https://github.com/KTCloud-TechUp/urr-frontend" }],
    featured: true,
    tag: "대표 프로젝트",
  },
  {
    id: "bcm",
    title: "Blind Chicken Market",
    subtitle: "실시간 익명 중고 경매 플랫폼",
    period: "2025.10 – 2026.01",
    description:
      "폴링·SSE·WebSocket을 직접 비교해 WebSocket(STOMP)을 채택, 경매 ID 단위 채널 구독으로 불필요한 브로드캐스트를 차단했습니다. 병렬 요청 중 Refresh Token Race Condition을 subscriber 큐로 해결하고, IDOR를 프론트에서 이중 방어했습니다.",
    overview:
      "익명 기반 중고 경매 거래 플랫폼입니다. 판매자가 상품을 등록하면 구매자들이 실시간으로 입찰하고, 낙찰 후 결제까지 하나의 플로우로 연결됩니다. Frontend 2명(유저·관리자 사이트 분리), Backend 3명 팀 프로젝트에서 유저 사이트 프론트엔드 전체를 단독 담당했습니다.\n\n실시간 입찰 구현을 위해 폴링·SSE·WebSocket을 직접 비교 후 WebSocket(STOMP)을 채택했습니다. 경매 ID 단위 채널 구독으로 불필요한 브로드캐스트를 차단했고, TossPayments 결제 승인은 Next.js API Route로 서버사이드 처리해 시크릿 키를 격리했습니다.",
    role: "유저 사이트 FE 단독 (FE 2명 — 유저 사이트 · 관리자 사이트, BE 3명)",
    stack: [
      "Next.js 16",
      "TypeScript",
      "WebSocket (STOMP)",
      "TossPayments",
      "AWS S3",
      "Tailwind",
      "shadcn/ui",
    ],
    highlights: [
      "WebSocket(STOMP) 실시간 입찰 — 경매 ID 단위 채널 구독",
      "IDOR 이중방어 — 결제 페이지 진입 시 주문 조회 API 강제 호출, 서버 403 감지 후 리다이렉트",
      "TossPayments 서버사이드 결제 승인 (API Route로 시크릿 키 서버 격리)",
      "Intersection Observer 무한 스크롤",
      "반응형 UI — 모바일 하단 네비게이션 분리로 PC/Mobile 동일 기능 제공",
      "API 실패 시 Mock 데이터 폴백 — 백엔드 장애 상황에서도 화면 유지",
    ],
    troubles: [
      {
        title: "IDOR — URL 직접 접근을 통한 비인가 주문 접근",
        content:
          "문제: /payment/{orderId} URL에서 orderId 변경 시 타인의 주문 정보 접근 및 의도치 않은 대납 가능.\n원인: UI 버튼 경유만 가정해 직접 URL 접근에 대한 프론트 접근 제어 부재, 서버 차단만으로는 렌더링 직전 데이터 노출 위험.\n해결: 페이지 진입 즉시 주문 조회 API 강제 호출, 서버 403·404 응답 감지 시 경고 메시지 표시 후 메인 리다이렉트.\n결과: URL 직접 접근을 통한 비인가 접근 차단, 비정상 접근 상황에서도 자연스러운 UX 유지.",
      },
      {
        title: "WebSocket — 종료된 경매에서 구독 유지 및 중복 수신",
        content:
          "문제: 경매 종료 후에도 STOMP 구독이 유지되어 불필요한 메시지가 수신되고, 페이지 재진입 시 이전 구독이 해제되지 않아 동일 입찰 이벤트가 중복 처리됨.\n원인: useEffect 내 STOMP 클라이언트 생성 시 cleanup 처리 누락, 컴포넌트 언마운트 후에도 소켓 연결이 유지되어 재진입 시 기존 연결 위에 새 연결이 추가됨.\n해결: 페이지 진입 시 경매 종료 여부 사전 확인해 불필요한 연결 자체를 차단, useRef로 클라이언트 인스턴스를 관리해 cleanup에서 반드시 deactivate 호출.\n결과: 종료된 경매 진입 시 WebSocket 연결 요청 0건으로 감소, 중복 구독으로 인한 입찰 이벤트 중복 처리 제거.",
      },
    ],
    retrospective:
      "실시간 입찰 방식을 선택할 때 폴링 → SSE → WebSocket을 직접 비교하면서, '실시간이면 WebSocket'이 아니라 단방향/양방향, 서버 부하, 구조 복잡도를 기준으로 기술을 선택하는 방식을 처음으로 문서화해 봤습니다. IDOR를 프론트에서 직접 방어하면서 '서버가 막아주면 된다'는 생각 대신 프론트도 보안 레이어의 일부라는 인식이 생겼습니다.\n\n아쉬운 점은 실제 동시 입찰 트래픽에 대한 부하 테스트를 끝까지 진행하지 못한 것입니다. 다음 프로젝트에서는 초기 설계 단계부터 부하 테스트 시나리오를 포함할 계획입니다.",
    links: [{ label: "GitHub", url: "https://github.com/kt-merge/bcm-front-repository" }],
    featured: true,
    tag: "팀 프로젝트",
  },
  {
    id: "qms",
    title: "품질 관리 시스템 QMS",
    subtitle: "자동차·전자·화학 제조 기업 대상 B2B 솔루션",
    period: "2020 – 2025 (4년 8개월)",
    description:
      "메뉴 단위로 DB 설계·프로시저 작성·화면 구현을 전담하는 방식으로 제조 기업 B2B 품질 관리 솔루션 개발. LS전선·SK넥실리스·에코프로비엠 등에 납품.",
    role: "풀스택 개발자 (C# ASP.NET + MSSQL)",
    stack: ["C# ASP.NET", "MSSQL", "jQuery"],
    highlights: [
      "산업별 신규 메뉴 개발 (기획서 기반 DB·SP·화면 전부 구현)",
      "부서 간/협력사 결재 시스템 + 자동 메일 알림",
      "XSS 방어 (클라이언트 escape + 서버 validation 이중)",
      "파일 업로드 및 품질 문서 관리 (버전·권한)",
      "다국어 지원 (한·영·중)",
    ],
    links: [],
    featured: false,
    tag: "이전 경력",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
