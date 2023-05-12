import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';
import classNames from 'classnames';
import styles from './CategoryPage.module.scss';
import { List } from '../../components/List';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination';
import { getAllPhones, getPhonesByType } from '../../api/phones';
import { Phone } from '../../components/types/types';

type Props = {
  className?: string;
}

export const CategoryPage: FC<Props> = ({ className }) => {
  const { selectedCategory } = useParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  
  useEffect(() => {
    getAllPhones({
      page: 8
    })
      .then((response) => {
        setPhones(response);
      });
  }, []);

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
            options={['Newest', 'Oldest']}
            selected = 'Newest'
            setSelected={() => {return;}}
          />

          <SettingsSelect 
            className={styles.select}
            title="Items per page"
            options={['8', '16', '24', '32']}
            selected = '8'
            setSelected={() => {return;}}
          />
        </div>

        <List 
          className={styles.list}
          products={phones} 
        />

        <Pagination
          className={styles.pagination}
          currentPage={1} 
        />
      </div>
    </main>
  );
};