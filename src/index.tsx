import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

