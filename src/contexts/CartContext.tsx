import React, { useEffect } from 'react';
import { Product } from '../types/types';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { toast } from 'react-toastify';

interface Context {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  removeAllfromCart: () => void;
}

const initialValue = {
  cart: [],
  addToCart: (item: Product) => {
    item;
  },
  removeFromCart: (itemId: string) => {
    itemId;
  },
  removeAllfromCart: () => {
    return;
  }
};

export const CartContext = React.createContext<Context>(initialValue);

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);
  const notify = (message: string) => toast(message);
  const notifySuccesfull = () => {
    toast.success('Payment was successful');
  };

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
    notify('Product added to cart 🤝');
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cart.filter((item: Product) => item.id !== itemId);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    notify('Product removed from cart 🤝');
  };

  const removeAllfromCart = () => {
    setCart([]);
    updateLocalStorage([]);
    notifySuccesfull();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllfromCart }}>
      {children}
    </CartContext.Provider>
  );
};
