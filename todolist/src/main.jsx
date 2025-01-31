import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Todolist from './todolist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
)
