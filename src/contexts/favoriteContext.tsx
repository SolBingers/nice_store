import React, { useEffect } from 'react';
import { Product } from '../types/Product';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { Phone } from '../types/Phone';

interface Context {
  phone: Phone[];
  addPhone: (item: Phone) => void;
  removePhone: (itemId: string) => void;
}

const initialValue = {
  phone: [],
  addPhone: (item: Product) => {
    item;
  },
  removePhone: (itemId: string) => {
    itemId;
  },
};

export const CartContext = React.createContext<Context>(initialValue);

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [phone, setPhone] = useLocalStorage<Product[]>('phone', []);

  const updateLocalStorage = (phoneData: Product[]) => {
    localStorage.setItem('phone', JSON.stringify(phoneData));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('phone');
    if (storedCart) {
      setPhone(JSON.parse(storedCart));
    }
  }, []);

  const addPhone = (item: Product) => {
    const updatedCart = [...phone, item];
    setPhone(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const removePhone = (itemId: string) => {
    const updatedCart = phone.filter((item: Phone) => item.id !== itemId);
    setPhone(updatedCart);
    updateLocalStorage(updatedCart);
  };

  return (
    <CartContext.Provider value={{ phone, addPhone, removePhone }}>
      {children}
    </CartContext.Provider>
  );
};