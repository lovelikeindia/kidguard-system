import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ParentalProvider } from './context/ParentalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ParentalProvider>
            <App />
                </ParentalProvider>
                  </StrictMode>,
                  )
