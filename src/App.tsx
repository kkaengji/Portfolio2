import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CommandPalette } from '@/components/CommandPalette'
import Home from '@/pages/Home'
import ProjectURR from '@/pages/ProjectURR'
import ProjectBCM from '@/pages/ProjectBCM'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/urr" element={<ProjectURR />} />
          <Route path="/projects/bcm" element={<ProjectBCM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <CommandPalette />
    </div>
  )
}
