import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/GlobalStyles.css';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.css';
// In your main JavaScript file (e.g., src/index.js)
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
