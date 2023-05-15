import React, { useState, useEffect } from 'react';
import searchStyles from './SearchOnWebsite.module.scss';
import lens from '../../images/lens.svg';
import cross from '../../images/cross.svg';
import { getAllProducts } from '../../api/products';
import { useQuery } from 'react-query';
// import { Product } from '../types/types';

export const SearchOnWebsite: React.FC = () => {
  const [query, setQuery] = useState('');
  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);


  const getProducts = async () => {
    return await getAllProducts(query);
  };

  // const { isLoading, data, refetch } = useQuery<Response>(
  //   'products',
  //   getProducts,
  // );

  // useEffect(() => {
  //   refetch();
  // }, [query]);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value !== ' ') {
      setQuery(event.target.value);
    }
  };


  return (
    <form className={searchStyles.container} method='GET' action=''>
      <input 
        type="text" 
        className={searchStyles.input}
        placeholder='Search on website...'
        value={query}
        onChange={handleSearch}
      />

      {query.length > 0 && (
        <button className={searchStyles.cross}>
          <img src={cross} alt="cross" className={searchStyles.crossImage}/>
        </button>
      )}
      <button type='submit' className={searchStyles.submit}>
        <img src={lens} alt="lens" className={searchStyles.lens}/>
      </button>
    </form>
  );
};