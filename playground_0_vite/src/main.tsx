import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import "./css/tailwind.css";
// import 'bootstrap/dist/css/bootstrap.css'
import "./css/style.css";
import { ThemesProvider } from './components/[tools]/ThemeToggle/ThemesProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </React.StrictMode>,
)
