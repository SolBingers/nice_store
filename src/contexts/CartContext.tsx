import React, { useEffect } from 'react';
import { Product } from '../types/types';
import { useLocalStorage } from '../customHooks/useLocalStorage';

interface Context {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
}

const initialValue = {
  cart: [],
  addToCart: (item: Product) => {
    item;
  },
  removeFromCart: (itemId: string) => {
    itemId;
  },
};

export const CartContext = React.createContext<Context>(initialValue);

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);

  const updateLocalStorage = (cartData: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item: Product) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cart.filter((item: Product) => item.id !== itemId);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
