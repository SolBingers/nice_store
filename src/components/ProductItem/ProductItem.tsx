import React from 'react';
import productItemStyle from './ProductItem.module.scss';
import { Product } from '../../types/Product';
import minus from '../../images/minus.svg';
import plus from '../../images/Plus.svg';
import classNames from 'classnames';

type Props = {
  productItem: Product,
  onRemove: () => void,
  onIncrese: () => void,
  onDecrease: () => void, 
}

export const ProductItem: React.FC<Props> = ({
  productItem,
  onRemove,
  onIncrese,
  onDecrease,
}) => {
  const {
    image,
    title,
    count,
    price,
  } = productItem;

  const isDisabledMinus = count === 1;
  const isDisabledPlus = count === 9;

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
            onClick={onDecrease}
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
            onClick={onIncrese}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>

      <div className={productItemStyle.price}>
        {`${price}$`}
      </div>

      <button 
        className={productItemStyle.closeButton}
        onClick={onRemove}
      />
    </div>  
  );
};
