import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Quiz from './component/Quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
    {/* <Quiz /> */}

  </StrictMode>,
)
