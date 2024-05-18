import './app/styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <HashRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </HashRouter>
    </StoreProvider>
  </React.StrictMode>
)
