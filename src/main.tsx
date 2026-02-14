import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SelectComp from './SelectComp.tsx'
import StateForm from './StateForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <SelectComp />
    <StateForm />
  </StrictMode>,
)
