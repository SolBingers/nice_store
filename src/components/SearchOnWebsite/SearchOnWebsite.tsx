import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import searchStyles from './SearchOnWebsite.module.scss';
import lens from '../../images/lens.svg';
import cross from '../../images/cross.svg';
import { getSearchProducts } from '../../api/products';
import { useQuery } from 'react-query';
import { ProductItem } from '../../types/types';
import { SearchModal } from '../SearchModal';
import classNames from 'classnames';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { updateSearch } from '../../utils/helpers';

type Response = {
  data: ProductItem[];
  pages: number;
};

export const SearchOnWebsite: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchAviable, setIsSearchAviable] = useState(false);
  const navigate = useNavigate();
  const query = searchParams.get('query') || '';
  const inputRef = useRef<HTMLInputElement>(null);
  const onQueryChange = (query: string) => {

    updateSearch({ query }, searchParams, setSearchParams);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {

      if (!(event.target instanceof HTMLInputElement)) {
        setIsSearchAviable(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

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

  const getProducts = async () => {
    return await getSearchProducts(searchParams.toString().split('+').join('-').toLowerCase());
  };

  const {isLoading, data, refetch } = useQuery<Response>(
    'products', 
    getProducts, 
    {
      enabled: false,
    });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchAviable(true);

    if(event.target.value !== ' ') {
      onQueryChange(event.target.value.replace('  ', ' '));
    }

    return true;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }
  };

  const handleEnableSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsSearchAviable(true);
    console.log('en');
    event.stopPropagation();
  };


  const handleClear = () => {
    onQueryChange('');
  };
  
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSearchAviable(false);
    navigate(`/search?${searchParams}`);
  };

  return (
    <>
      <div className={searchStyles.container} >
        <button 
          className={searchStyles.openSearch} 
          onClick={handleEnableSearch}
        >
          <img src={lens} alt="lens" className={searchStyles.lensOpen}/>
        </button>

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
            onKeyDown={handleKeyDown}
            ref={inputRef}
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
      </div>

      {isSearchAviable && (
        <SearchModal items={data?.data} isLoading={isLoading}/>
      )}
    </>
  );
};