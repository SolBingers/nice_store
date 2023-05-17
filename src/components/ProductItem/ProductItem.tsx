import React from 'react';
import productItemStyle from './ProductItem.module.scss';
import { Product } from '../../types/types';
import minus from '../../images/minus.svg';
import plus from '../../images/Plus.svg';
import classNames from 'classnames';

type Props = {
  productItem: Product,
  className?: string,
  onRemove: (productName: string) => void,
  onIncrese: (productName: string) => void,
  onDecrease: (productName: string) => void, 
}

export const ProductItem: React.FC<Props> = ({
  productItem,
  onRemove,
  onIncrese,
  onDecrease,
  className,
}) => {
  const {
    image,
    name,
    id,
    count,
    price,
  } = productItem;

  const BASE_URL = 'https://nice-store-api.onrender.com';
  const imageURL = BASE_URL + '/' + image;

  const isDisabledMinus = count === 1;
  const isDisabledPlus = count === 9;

  return (
    <div className={classNames(
      productItemStyle.container,
      className
    )}>
      <div className={productItemStyle.header}>
        <div className={productItemStyle.imageContainer} >
          <img 
            className={productItemStyle.image}
            src={imageURL} 
            alt="phone"
          />
        </div>

        <div className={productItemStyle.title}>
          {name}
        </div>
      </div>

      <div className={productItemStyle.counterContainer}>
        <div className={productItemStyle.productsCounter}>
          <button 
            className={classNames(
              productItemStyle.decrease,
              productItemStyle.countButton, {
                [productItemStyle.disabledButton]: isDisabledMinus,
              }
            )}
            onClick={() => onDecrease(id)}
          >
            <img src={minus} alt="minus"/>
          </button>

          <div className={productItemStyle.count}>
            {count}
          </div>

          <button 
            className={classNames(
              productItemStyle.increase,
              productItemStyle.countButton,{
                [productItemStyle.disabledButton]: isDisabledPlus,
              }
            )}
            onClick={() => onIncrese(id)}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>

      <div className={productItemStyle.price}>
        {`${Number(price) * count}$`}
      </div>

      <button 
        className={productItemStyle.closeButton}
        onClick={() => onRemove(id)}
      />
    </div>  
  );
};
