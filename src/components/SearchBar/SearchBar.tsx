import React, { FC } from 'react';
import searchBar from './SearchBar.module.scss';
import { ReactComponent as Lens } from '../../images/lens.svg';

export const SearchBar: FC = () => {
  return (
    <div className={searchBar.searchBar}>
      <input 
        type="text" 
        placeholder="Search on website..." 
        className={searchBar.searchField}
      />
      <button className={searchBar.lensButton}>
        <Lens className={searchBar.lens} />
      </button>
    </div>
  );
};
