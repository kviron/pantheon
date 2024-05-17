import './app/styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { HashRouter } from 'react-router-dom'
import { StoreProvider } from './app/providers/StoreProvider'
import { ThemeProvider } from './app/providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </HashRouter>
  </React.StrictMode>
)
