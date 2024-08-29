import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/100.css';  // Thin
import '@fontsource/roboto/300.css';  // Light
import '@fontsource/roboto/400.css';  // Regular
import '@fontsource/roboto/500.css';  // Medium
import '@fontsource/roboto/700.css';  // Bold
import '@fontsource/roboto/900.css';  // Black



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
