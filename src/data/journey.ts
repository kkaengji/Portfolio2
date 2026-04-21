export type JourneyItem = {
  period: string
  title: string
  subtitle?: string
  items?: string[]
}

export const journey: JourneyItem[] = [
  {
    period: '2012 – 2015',
    title: '전산고 입학 & 졸업',
  },
  {
    period: '2015 – 2020',
    title: '경남대학교 컴퓨터공학과',
  },
  {
    period: '2020 – 2025',
    title: '솔바테크놀러지 — C# ASP.NET 풀스택 대리',
    subtitle: '4년 8개월',
    items: [
      'DB 설계 · SP 작성 · 화면까지 풀스택',
      'LS전선 · SK넥실리스 납품',
    ],
  },
  {
    period: '2025',
    title: 'KT Cloud 부트캠프 수료',
    subtitle: 'React, Next.js, TypeScript',
  },
  {
    period: '2026.02 –',
    title: 'URR 프론트 1인 단독 + BCM',
    subtitle: '현재 진행 중',
  },
]
