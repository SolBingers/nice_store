import React, { useEffect } from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { Phone } from '../components/types/types';

interface Context {
  phones: Phone[];
  addPhone: (item: Phone) => void;
  removePhone: (itemId: string) => void;
}

const initialValue = {
  phones: [],
  addPhone: (item: Phone) => {
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
  const [phones, setPhones] = useLocalStorage<Phone[]>('phones', []);

  const updateLocalStorage = (phonesData: Phone[]) => {
    localStorage.setItem('phones', JSON.stringify(phonesData));
  };

  useEffect(() => {
    const storedPhone= localStorage.getItem('phones');
    if (storedPhone) {
      setPhones(JSON.parse(storedPhone));
    }
  }, []);

  const addPhone = (item: Phone) => {
    const updatedPhone = [...phones, item];
    setPhones(updatedPhone);
    updateLocalStorage(updatedPhone);
  };

  const removePhone = (phoneId: string) => {
    const updatedPhone = phones.filter((phone: Phone) => phone.phoneId !== phoneId);
    setPhones(updatedPhone);
    updateLocalStorage(updatedPhone);
  };

  return (
    <FavoriteContext.Provider value={{ phones, addPhone, removePhone }}>
      {children}
    </FavoriteContext.Provider>
  );
};