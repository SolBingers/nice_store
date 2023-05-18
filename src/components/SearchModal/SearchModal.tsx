import React from 'react';
import styles from './SearchModal.module.scss';
import { ProductItem } from '../../types/ProductItem';
import { SearchItem } from '../SearchItem/SearchItem';
import { Loader } from '../Loader';

type Props = {
  items?: ProductItem[];
  isLoading: boolean;
};

export const SearchModal: React.FC<Props> = ({ items, isLoading }) => {
  return (
    <div className={styles.container}>
      {isLoading && <Loader />}

      {items?.length !== 0 ? (
        <div className={styles.item}>
          {items?.map((item) => (
            <SearchItem productItem={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>Not found....</div>
      )}
    </div>
  );
};
