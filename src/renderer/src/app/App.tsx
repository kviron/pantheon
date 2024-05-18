import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { MainLayout } from '../shared/layouts/MainLayout/MainLayout'

function App() {
  return (
    <Suspense fallback="">
      <MainLayout
        header={<div>Навбра</div>}
        content={<AppRouter />}
        sidebar={<div>сайдебар</div>}
      />
    </Suspense>
  )
}

export default App
