import React, { FC } from 'react';
import './styles/main.scss';
import { RouterProvider } from 'react-router-dom';
import './styles/notification.scss';
import { router } from './utils/router';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FavoriteProvider } from './contexts/favoriteContext';
import { CartProvider } from './contexts/CartContext';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <FavoriteProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </CartProvider>
      </FavoriteProvider>
    </ClerkProvider>
  );
};

export default App;
