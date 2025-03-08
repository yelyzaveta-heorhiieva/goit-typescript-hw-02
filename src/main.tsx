import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
import { Toaster } from 'react-hot-toast';
import App from './App';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster position='top-right' reverseOrder={false} />
  </StrictMode>,
);
