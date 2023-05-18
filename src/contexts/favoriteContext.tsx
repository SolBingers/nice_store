import React, { useEffect } from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { ProductItem } from '../types/ProductItem';
import { toast } from 'react-toastify';

interface Context {
  phones: ProductItem[];
  addPhone: (item: ProductItem) => void;
  removePhone: (itemId: string) => void;
}

const initialValue = {
  phones: [],
  addPhone: (item: ProductItem) => {
    item;
  },
  removePhone: (itemId: string) => {
    itemId;
  },
};

export const FavoriteContext = React.createContext<Context>(initialValue);

type Props = {
  children: React.ReactNode;
};

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const notification = (message: string) => toast(message);

  const [phones, setPhones] = useLocalStorage<ProductItem[]>('phones', []);

  const updateLocalStorage = (phonesData: ProductItem[]) => {
    localStorage.setItem('phones', JSON.stringify(phonesData));
  };

  useEffect(() => {
    const storedPhone = localStorage.getItem('phones');
    if (storedPhone) {
      setPhones(JSON.parse(storedPhone));
    }
  }, []);

  const addPhone = (item: ProductItem) => {
    const updatedPhone = [...phones, item];
    setPhones(updatedPhone);
    updateLocalStorage(updatedPhone);
    notification('Product added to favorites 🤝');
  };

  const removePhone = (itemId: string) => {
    const updatedPhone = phones.filter(
      (phone: ProductItem) => phone.itemId !== itemId,
    );
    setPhones(updatedPhone);
    updateLocalStorage(updatedPhone);
    notification('Product removed from favorites 🤝');
  };

  return (
    <FavoriteContext.Provider value={{ phones, addPhone, removePhone }}>
      {children}
    </FavoriteContext.Provider>
  );
};
