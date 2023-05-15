import React, { useState, useEffect, useMemo } from 'react';
import searchStyles from './SearchOnWebsite.module.scss';
import lens from '../../images/lens.svg';
import cross from '../../images/cross.svg';
import { getAllProducts } from '../../api/products';
import { useQuery } from 'react-query';
import { ProductItem } from '../../types/types';
import { SearchModal } from '../SearchModal';
import classNames from 'classnames';

type Response = {
  data: ProductItem[];
  pages: number;
};

export const SearchOnWebsite: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSearchAviable, setIsSearchAviable] = useState(false);
  
  const casedQuery = query.replaceAll(' ', '-').toLowerCase();

  const getProducts = async () => {
    console.log(1);
    return await getAllProducts('',`query=${casedQuery}`);
  };

  // const { data, refetch } = useQuery<Response>(
  //   {enabled: false},
  //   'products',
  //   getProducts,
  // );

  const { data, refetch } = useQuery('products', getProducts, {
    enabled: false,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value !== ' ') {
      setQuery(event.target.value.replace('  ', ' '));
    }
  };


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(query.length > 0 ) {
        refetch();
      }
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [query]);

  const handleEnableSearch = () => {
    setIsSearchAviable(!isSearchAviable);
  };

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  // };


  return (
    <>
      <div
        className={classNames(searchStyles.blur, {
          [searchStyles.blur__visible]: query.length > 0,
        })}
        onClick={() => setQuery('')}
      />
      <div className={searchStyles.container}>
        <button className={classNames(
          isSearchAviable 
            ? searchStyles.openSearch
            : searchStyles.closeSearch
        )} onClick={handleEnableSearch}/>
        <form className={classNames(
          searchStyles.formContainer,{
            [searchStyles.formContainerOpen]: isSearchAviable,
          }
        )} method='GET' action=''>
          <input 
            type="text" 
            className={searchStyles.input}
            placeholder='Search on website...'
            value={query}
            onChange={handleSearch}
          />

          {query.length > 0 && (
            <button className={searchStyles.cross} onClick={() =>setQuery('')}>
              <img src={cross} alt="cross" className={searchStyles.crossImage}/>
            </button>
          )}
          <button type='submit' className={searchStyles.submit}>
            <img src={lens} alt="lens" className={searchStyles.lens}/>
          </button>
        </form>

        {query.length > 0 && (
          <SearchModal items={data?.data}/>
        )}
      </div>
    </>
  );
};