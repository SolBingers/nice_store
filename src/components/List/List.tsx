import React from 'react';
import listStyle from './List.module.scss';
import { ProductCard } from '../ProductCard';
import { Phone } from '../types/types';
import classNames from 'classnames';

interface Props {
  products: Phone[];
  favComp?: boolean;
}

export const List: React.FC<Props> = ({ 
  products,
  favComp,
}) => (
  <div className={classNames(listStyle.list,{
    [listStyle.fourItem]: favComp,
  })}>
    {products.map(product => (
      <div className={listStyle.card} key={product.id}>
        <ProductCard
          phone={product}
        />
      </div>
    ))}
  </div>
);
