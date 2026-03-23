import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './context/ThemeProvider.jsx'
import { CountriesProvider } from './context/CountriesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/countries-app/">
      <ThemeProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
