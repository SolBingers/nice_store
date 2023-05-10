import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from './CategoryPage.module.scss';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';

export const CategoryPage: FC = () => {
  const { selectedCategory } = useParams();

  return (
    <div className={styles.main}>
      <Header className={styles.header} />

      <div className={styles.content}>
        <p className={styles.title}>
          {selectedCategory}
        </p>

        <div className={styles.settings}>
          <SettingsInput title="Product name" />
          <SettingsSelect 
            title="Sort by"
            options={['Newest', 'Oldest']}
            selected = 'Newest'
            setSelected={() => {return;}}
          />
        </div>
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};