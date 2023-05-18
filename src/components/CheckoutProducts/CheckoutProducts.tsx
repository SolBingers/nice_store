import React, { FC } from 'react';
import { Product } from '../../types/Product';
import productItemStyle from './CheckoutProduct.module.scss';

interface Props {
  product: Product;
}

export const CartItems: FC<Props> = ({ product }) => {
  const { id, name, count, price, image } = product;
  const BASE_URL = 'https://nice-store-api.onrender.com';
  const imageURL = BASE_URL + '/' + image;

  return (
    <div className={productItemStyle.container} key={id}>
      <div className={productItemStyle.header}>
        <div className={productItemStyle.imageContainer}>
          <img className={productItemStyle.image} src={imageURL} alt="phone" />
        </div>

        <div className={productItemStyle.title}>{name}</div>
      </div>

      <div className={productItemStyle.counterContainer}>
        <div className={productItemStyle.productsCounter}>
          <div className={productItemStyle.count}>{count}</div>
        </div>
      </div>

      <div className={productItemStyle.price}>
        {`${Number(price) * count}$`}
      </div>
    </div>
  );
};
