import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../styles/index.css";
import App from './App.jsx'
import AuthPage from '../features/auth/pages/AuthPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AuthPage />
  </StrictMode>,
)