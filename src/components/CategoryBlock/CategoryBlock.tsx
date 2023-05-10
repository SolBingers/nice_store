import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../CategoryCard';
import grids from '../../styles/grid.module.scss';
import classNames from 'classnames';
import categoryBlock from './CategoryBlock.module.scss';
import categoryPhones from '../../images/categories/categoryPhones.png';
import categoryTablets from '../../images/categories/categoryTablets.png';
import categoryAccessories from '../../images/categories/categoryAccessories.png';

export const CategoryBlock: FC = () => (
  <section className={categoryBlock.container}>
    <div className={classNames(
      grids.grid,
      grids.tablet,
      grids.desktop
    )}>
      <div className={classNames(
        grids.item,
        grids.item__tablet_1_8,
        grids.item__desktop_1_8
      )
      }>
        <Link to="categories/phones">
          <CategoryCard
            imageUrl={categoryPhones}
            imageAlt='Phones category'
            categoryName='Phones'
            categoryLink='categories/phones'
          />
        </Link>
      </div>

      <div className={classNames(
        grids.item,
        grids.item__tablet_1_8,
        grids.item__desktop_9_16
      )
      }>
        <Link to="categories/tablets">
          <CategoryCard
            imageUrl={categoryTablets}
            imageAlt='Tablets category'
            categoryName='Tablets'
            categoryLink='categories/tablets'
          />
        </Link>
      </div>

      <div className={classNames(
        grids.item,
        grids.item__tablet_1_8,
        grids.item__desktop_17_24
      )
      }>
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