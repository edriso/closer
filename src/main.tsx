import '@fontsource-variable/fraunces'
import '@fontsource-variable/readex-pro'
import './styles/global.css'

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './app/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <RouterProvider router={router} />
      </LazyMotion>
    </MotionConfig>
  </StrictMode>,
)
