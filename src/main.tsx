import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { NavBar } from './components/NavBar'
import { MobileMenu } from './components/MobileMenu'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <MobileMenu />
    <App />
  </React.StrictMode>,
)
