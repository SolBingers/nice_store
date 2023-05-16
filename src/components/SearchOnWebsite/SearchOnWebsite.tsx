import React, { useState, useEffect, useContext } from 'react';
import searchStyles from './SearchOnWebsite.module.scss';
import lens from '../../images/lens.svg';
import cross from '../../images/cross.svg';
import { getSearchProducts } from '../../api/products';
import { useQuery } from 'react-query';
import { ProductItem } from '../../types/types';
import { SearchModal } from '../SearchModal';
import classNames from 'classnames';
import { SearchContext } from '../../contexts/SearchContext';
import { useNavigate} from 'react-router-dom';

type Response = {
  data: ProductItem[];
  pages: number;
};

export const SearchOnWebsite: React.FC = () => {
  const { query, setQuery } = useContext(SearchContext);
  const [isSearchAviable, setIsSearchAviable] = useState(false);
  const navigate = useNavigate();
  
  const casedQuery = query.replaceAll(' ', '-').toLowerCase();

  const getProducts = async () => {
    return await getSearchProducts(`query=${casedQuery}`);
  };

  const {isLoading, data, refetch } = useQuery<Response>(
    'products', 
    getProducts, 
    {
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

  const handleClear = () => {
    setQuery('');
  };
  
  const handleOnSubmit = () => {
    handleClear();
    navigate('/search');
  };


  return (
    <>
      <div
        className={classNames(searchStyles.blur, {
          [searchStyles.blur__visible]: query.length > 0 || isSearchAviable,
        })}
        onClick={handleClear}
        onDoubleClick={() => setIsSearchAviable(false)}
      />
      <div className={searchStyles.container}>
        <button className={classNames(
          isSearchAviable 
            ? [searchStyles.closeSearch]
            : [searchStyles.openSearch],
          
        )} onClick={handleEnableSearch}
        >
          {isSearchAviable ?(
            <img src={cross} alt="lens" className={searchStyles.lensOpen}/>
          ) :(
            <img src={lens} alt="lens" className={searchStyles.lensOpen}/>
          )}
        </button>
      </div>

      <form className={classNames(
        searchStyles.formContainer,{
          [searchStyles.formContainerOpen]: isSearchAviable,
        }
      )}
      onSubmit={handleOnSubmit}
      >
        <input 
          type="text" 
          className={searchStyles.input}
          placeholder='Search on website...'
          value={query}
          onChange={handleSearch}
        />

        {query.length > 0 && (
          <button className={searchStyles.cross} onClick={handleClear}>
            <img src={cross} alt="cross" className={searchStyles.crossImage}/>
          </button>
        )}
        <button className={searchStyles.submit} type='submit'>
          <img src={lens} alt="lens" className={searchStyles.lens}/>
        </button>
      </form>

      {query.length > 0 && (
        <SearchModal items={data?.data} isLoading={isLoading}/>
      )}
    </>
  );
};