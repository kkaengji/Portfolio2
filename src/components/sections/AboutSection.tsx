import { journey } from "@/data/journey";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="section-heading">About</p>

      <div className="grid sm:grid-cols-2 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">My Story</h2>
          <div className="text-sm text-muted-foreground leading-7 space-y-3">
            <p>
              경남대학교 컴퓨터공학과를 졸업한 뒤 솔바테크놀러지에 입사했습니다.
              4년 8개월 동안 C# ASP.NET으로 제조 기업 B2B 품질 관리 솔루션을
              개발했습니다. 메뉴 단위로 담당자를 나눠 DB 설계·프로시저 작성·화면
              구현을 한 사람이 전담하는 방식이었고, LS전선·SK넥실리스 등에
              납품되는 시스템을 만들었습니다.
            </p>
            <p>
              화면을 계속 만들면서 한 가지가 뚜렷해졌습니다. 기능이 완성돼도
              화면이 불편하면, 사람들은 그 시스템을 피하거나 우회합니다. 기능의
              완성도와 화면의 완성도는 다르다는 걸 현장에서 봤습니다. 제대로 된
              화면을 만드는 데 집중하고 싶었습니다.
            </p>
            <p>
              지금은 React로 만들지만, API 응답 구조가 왜 그렇게 나오는지, 어떤
              쿼리 비용이 뒤에 있는지를 알면서 개발합니다. 그게 맥락이 끊기지
              않는 UI를 만드는 방식이라고 생각합니다.
            </p>
            <p className="font-mono text-xs border-l-2 border-amber-500 pl-3 text-foreground leading-relaxed">
              "What I cannot create, I do not understand."
              <br />
              <span className="text-muted-foreground/70 text-[11px]">
                만들 수 없으면 이해한 게 아니다. — Richard Feynman
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>
          <ol className="relative border-l border-border space-y-5 ml-1">
            {journey.map((item, i) => (
              <li key={i} className="ml-4">
                <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-amber-500" />
                <p className="font-mono text-xs text-amber-600 mb-0.5">
                  {item.period}
                </p>
                <p className="text-sm font-medium">
                  {item.highlight ? (
                    <span className="bg-amber-100 dark:bg-amber-950/50 px-1 rounded">
                      {item.title}
                    </span>
                  ) : (
                    item.title
                  )}
                </p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground">
                    {item.subtitle}
                  </p>
                )}
                {item.items && (
                  <ul className="mt-1 space-y-0.5">
                    {item.items.map((sub, j) => (
                      <li
                        key={j}
                        className="text-xs text-muted-foreground before:content-['└_'] before:mr-1"
                      >
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
  );
}
