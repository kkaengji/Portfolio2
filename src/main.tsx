import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { CommandPaletteProvider } from '@/providers/CommandPaletteProvider'
import App from './App'
import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CommandPaletteProvider>
          <App />
        </CommandPaletteProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
