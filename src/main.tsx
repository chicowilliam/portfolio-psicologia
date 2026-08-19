import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IconContext } from '@phosphor-icons/react/dist/lib/context'
import { MotionConfig } from '@/lib/motion-react'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { BookingDialogProvider } from '@/components/providers/BookingDialogProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <IconContext.Provider value={{ color: 'currentColor', weight: 'light' }}>
        <LenisProvider>
          <BookingDialogProvider>
            <App />
          </BookingDialogProvider>
        </LenisProvider>
      </IconContext.Provider>
    </MotionConfig>
  </StrictMode>,
)
