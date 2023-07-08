import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Variables from './content'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Variables>
    <App />
  </Variables>
  </BrowserRouter>
)
