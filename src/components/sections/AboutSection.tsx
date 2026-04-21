import { journey } from '@/data/journey'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <p className="section-heading">cat ./journey.md</p>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">피벗 스토리</h2>
          <div className="text-sm text-muted-foreground leading-7 space-y-3">
            <p>
              전산고 → 컴퓨터공학과 → C# ASP.NET 풀스택 4년 8개월.
              제조 기업 B2B 솔루션을 DB 설계부터 화면까지 혼자 만들었습니다.
            </p>
            <p>
              그 경험이 오히려 프론트엔드의 매력을 알게 해줬습니다.
              사용자가 직접 보고 만지는 것을 제대로 만들고 싶었습니다.
            </p>
            <p>
              KT Cloud 부트캠프에서 React와 Next.js를 배운 뒤,
              지금은 URR(공정 티켓팅)의 프론트엔드를 1인으로 이끌고 있습니다.
            </p>
            <p className="font-mono text-xs border-l-2 border-amber-500 pl-3 text-foreground">
              "DB부터 화면까지 만들던 사람이,
              <br />이제 화면을 제대로 만듭니다."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">타임라인</h2>
          <ol className="relative border-l border-border space-y-5 ml-1">
            {journey.map((item, i) => (
              <li key={i} className="ml-4">
                <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-amber-500" />
                <p className="font-mono text-xs text-amber-600 mb-0.5">{item.period}</p>
                <p className="text-sm font-medium">{item.title}</p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                )}
                {item.items && (
                  <ul className="mt-1 space-y-0.5">
                    {item.items.map((sub, j) => (
                      <li key={j} className="text-xs text-muted-foreground before:content-['└_'] before:mr-1">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
