import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import feather from 'feather-icons';
import './assets/css/utils/all.scss';
import App from './App.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize feather icons after render
setTimeout(() => {
  feather.replace();
}, 0);
