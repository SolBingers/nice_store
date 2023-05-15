import React from 'react';
import styles from './SearchModal.module.scss';
import { ProductItem } from '../../types/types';
import { SearchItem } from '../SearchItem/SearchItem';

type Props = {
  items?: ProductItem[],
}

export const SearchModal: React.FC<Props> = ({ items }) => {

  return (
    <div className={styles.container}>
      {items?.length !== 0 ? (
        <div className={styles.item}>
          {items?.map(item => (
            <SearchItem productItem={item} key={item.id}/>
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>
          Not found....
        </div>
      )}
    </div>
  );
};