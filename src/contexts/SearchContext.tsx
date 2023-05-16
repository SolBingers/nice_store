import React, { createContext, useState } from 'react';

interface SearchContextProps {
  query: string;
  setQuery: (value: string) => void;
}



export const SearchContext = createContext<SearchContextProps>({
  query: '',
} as SearchContextProps);

type Props = {
  children: React.ReactNode;
};

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};