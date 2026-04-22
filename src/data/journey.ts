export type JourneyItem = {
  period: string;
  title: string;
  subtitle?: string;
  items?: string[];
  highlight?: boolean;
};

export const journey: JourneyItem[] = [
  {
    period: "2025.09 – 2026.04",
    title: "KT Cloud 풀스택 부트캠프",
    subtitle: "React, Next.js, TypeScript, SpringBoot (1056h)",
    items: [
      "URR — K-POP 공정 티켓팅 플랫폼 (FE 1인)",
      "BCM — 실시간 익명 중고 경매 플랫폼",
    ],
  },
  {
    period: "2020 – 2025",
    title: "솔바테크놀러지 — C# ASP.NET 풀스택 대리",
    subtitle: "4년 8개월",
    highlight: true,
    items: ["DB 설계 · SP 작성 · 화면까지 풀스택", "LS전선 · SK넥실리스 · 에코프로비엠 등 납품"],
  },
  {
    period: "2020.02 – 2020.10",
    title: "부경대학교 — IoT 시스템 개발자 과정",
    subtitle: "1200h",
  },
  {
    period: "2015 – 2020",
    title: "경남대학교 컴퓨터공학과",
  },
];
