import React from 'react';
import listStyle from './List.module.scss';
import { ProductCard } from '../ProductCard';
import { Phone } from '../types/types';
import classNames from 'classnames';

type Props = {
  className?: string;
  products: Phone[]
}

export const List: React.FC<Props> = ({ products, className }) => (
  <div className={classNames(className, listStyle.list)}>
    {products.map(product => (
      <div className={listStyle.card} key={product.id}>
        <ProductCard
          phone={product}
        />
      </div>
    ))}
  </div>
);
