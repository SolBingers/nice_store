import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { FavoriteProvider } from './contexts/favoriteContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchProvider } from './contexts/SearchContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);
root.render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <SearchProvider>
          <QueryClientProvider client={queryClient}>
            <HashRouter>
              <App />
            </HashRouter>
          </QueryClientProvider>
        </SearchProvider>
      </CartProvider>
    </FavoriteProvider>
  </React.StrictMode>,
);

