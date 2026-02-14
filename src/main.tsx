import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SelectComp from './SelectComp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <SelectComp />
  </StrictMode>,
)
