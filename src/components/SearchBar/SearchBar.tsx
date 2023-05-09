import React, { FC } from 'react';
import searchBar from './SearchBar.module.scss';

export const SearchBar: FC = () => {
  return (
    <div className={searchBar.searchBar}>
      <input 
        type="text" 
        placeholder="Search on website..." 
        className={searchBar.searchField}
      />
      <div>Prism</div>
    </div>
  );
};
