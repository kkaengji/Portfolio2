import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-24 text-center">
      <p className="font-mono text-amber-600 text-sm mb-4">$ cd /not-found</p>
      <h1 className="text-6xl font-bold font-mono mb-4">404</h1>
      <p className="text-muted-foreground mb-8">페이지를 찾을 수 없습니다.</p>
      <Button asChild variant="amber">
        <Link to="/">홈으로 돌아가기</Link>
      </Button>
    </main>
  )
}
