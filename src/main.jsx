
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'
import './App.css'
import 'boxicons/css/boxicons.min.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

function AppWrapper() {
  useEffect(() => {
    AOS.init({
  duration: 1000,
  once: false,
  offset: 120,
  easing: 'ease-out-cubic',
  mirror: true,
})
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
)
