import React from 'react';
import productItemStyle from './ProductItem.module.scss';
import { Product } from '../types/types';
import minus from '../../images/minus.svg';
import plus from '../../images/Plus.svg';

type Props = {
  productItem: Product,
}

export const ProductItem: React.FC<Props> = ({productItem}) => {
  const  {
    image,
    title,
    onRemove,
    onDecrease,
    count,
    onIncrease,
    price,
  } = productItem;
  return (
    <div className={productItemStyle.container}>
      <div className={productItemStyle.header}>
        <div className={productItemStyle.imageContainer} >
          <img 
            className={productItemStyle.image}
            src={image} 
            alt="phone"
          />
        </div>

        <div className={productItemStyle.title}>
          {title}
        </div>

        <button 
          className={productItemStyle.closeButton}
          onClick={onRemove}
        />
      </div>

      <div className={productItemStyle.info}>
        <div className={productItemStyle.productsCounter}>
          <button 
            className={productItemStyle.decrease}
            onClick={onDecrease}
          >
            <img src={minus} alt="minus" />
          </button>

          <div className={productItemStyle.count}>
            {count}
          </div>

          <button 
            className={productItemStyle.increase}
            onClick={onIncrease}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>

        <div className={productItemStyle.price}>
          {`${price}$`}
        </div>
      </div>
    </div>  
  );
};
