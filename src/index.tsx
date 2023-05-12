import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { FavoriteProvider } from './contexts/FavoriteContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);
root.render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <App />
          </HashRouter>
        </QueryClientProvider>
      </CartProvider>
    </FavoriteProvider>
  </React.StrictMode>,
);

