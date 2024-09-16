import React from 'react'
import App from './App.tsx'
import './index.css'
import './i18n'
import ReactDOM from 'react-dom/client'


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
