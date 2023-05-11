import React from 'react';
import productItemStyle from './ProductItem.module.scss';
import cross from '../../images/cross.svg';
import { Product } from '../types/types';

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
        >
          <img 
            src={cross} 
            alt="cross"
            className={productItemStyle.crossImage} 
          />
        </button>
      </div>

      <div className={productItemStyle.info}>
        <div className={productItemStyle.productsCounter}>
          <button 
            className={productItemStyle.decrease}
            onClick={onDecrease}
          />

          <div className={productItemStyle.count}>
            {count}
          </div>

          <button 
            className={productItemStyle.onIncrease}
            onClick={onIncrease}
          />
        </div>

        <div className={productItemStyle.price}>
          {`${price}$`}
        </div>
      </div>
    </div>  
  );
};
