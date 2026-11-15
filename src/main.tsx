import '@fontsource-variable/fraunces'
import '@fontsource-variable/readex-pro'
import './styles/global.css'

import { LazyMotion, MotionConfig, domMax } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { fontsReady, warmUpFonts } from './app/fonts'
import { router } from './app/router'
import { registerServiceWorker } from './app/serviceWorker'

const root = createRoot(document.getElementById('root')!)

void fontsReady(document.documentElement.lang).then(() => {
  root.render(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domMax} strict>
          <RouterProvider router={router} />
        </LazyMotion>
      </MotionConfig>
    </StrictMode>,
  )
  warmUpFonts()
})

registerServiceWorker()
