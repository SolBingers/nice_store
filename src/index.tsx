import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { FavoriteProvider } from './contexts/favoriteContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ClerkProvider } from '@clerk/clerk-react';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <FavoriteProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter basename='/nice_store'>
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </CartProvider>
      </FavoriteProvider>
    </ClerkProvider>
  </React.StrictMode>,
);

