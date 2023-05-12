import React from 'react';
import listStyle from './List.module.scss';
import { ProductCard } from '../ProductCard';
import { Phone } from '../types/types';
import classNames from 'classnames';

interface Props {
  className?: string;
  products: Phone[];
  favComp?: boolean;
}

export const List: React.FC<Props> = ({ 
  className,
  products,
  favComp,
}) => (
  <div className={classNames(listStyle.list,className,{
    [listStyle.fourItem]: favComp,
  })}>
    {products && products.length > 0 && products.map(product => (
      <div className={listStyle.card} key={product.id}>
        <ProductCard
          phone={product}
        />
      </div>
    ))}
  </div>
);
