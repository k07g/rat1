import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SelectComp from './SelectComp.tsx'
import StateForm from './StateForm.tsx'
import StateFormUC from './StateFormUC.tsx'
import FormTextarea from './FormTextarea.tsx'
import FormSelect from './FormSelect.tsx'
import FormList from './FormList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <SelectComp />
    <StateForm />
    <StateFormUC />
    <FormTextarea />
    <FormSelect />
    <FormList />
  </StrictMode>,
)
