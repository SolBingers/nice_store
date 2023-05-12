import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';
import classNames from 'classnames';
import styles from './CategoryPage.module.scss';
import { List } from '../../components/List';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination';

type Props = {
  className?: string;
}

export const CategoryPage: FC<Props> = ({ className }) => {
  const { selectedCategory } = useParams();
  
  return (
    <main className={classNames(className, styles.main)}>
      <Categories />
      
      <div className={styles.content}>
        <p className={styles.title}>
          {selectedCategory}
        </p>

        <div className={styles.settings}>
          <SettingsInput 
            className={styles.input}
            title="Product name" 
          />

          <SettingsSelect 
            className={styles.select}
            title="Sort by"
            apiTitle="sort"
            options={['Newest', 'Oldest', 'Cheapest']}
            selected = 'Newest'
            setSelected={() => {return;}}
          />

          <SettingsSelect 
            className={styles.select}
            title="Items per page"
            apiTitle="count"
            options={['4', '8', '12', '16']}
            selected = '8'
            setSelected={() => {return;}}
          />
        </div>

        <List 
          className={styles.list}
          products={[]} 
        />

        <Pagination
          className={styles.pagination}
          currentPage={1} 
        />
      </div>
    </main>
  );
};