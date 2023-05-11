import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../CategoryCard';
import categoryBlock from './CategoryBlock.module.scss';
import categoryPhones from '../../images/categories/categoryPhones.png';
import categoryTablets from '../../images/categories/categoryTablets.png';
import categoryAccessories from '../../images/categories/categoryAccessories.png';

export const CategoryBlock: FC = () => (
  <section className={categoryBlock.container}>
    <div className={categoryBlock.cardContainer}>
      <div className={categoryBlock.card}>
        <Link to="categories/phones">
          <CategoryCard
            imageUrl={categoryPhones}
            imageAlt='Phones category'
            categoryName='Phones'
            categoryLink='categories/phones'
          />
        </Link>
      </div>

      <div className={categoryBlock.card}>
        <Link to="categories/tablets">
          <CategoryCard
            imageUrl={categoryTablets}
            imageAlt='Tablets category'
            categoryName='Tablets'
            categoryLink='categories/tablets'
          />
        </Link>
      </div>

      <div className={categoryBlock.card}>
        <Link to='categories/accessories'>
          <CategoryCard
            imageUrl={categoryAccessories}
            imageAlt='Accessories category'
            categoryName='Accessories'
            categoryLink='categories/accessories'
          />
        </Link>
      </div>
    </div>
  </section>
);