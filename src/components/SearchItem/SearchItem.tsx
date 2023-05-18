import classNames from 'classnames';
import React from 'react';
import productItemStyle from '../ProductItem/ProductItem.module.scss';
import { ProductItem } from '../../types/ProductItem';
import additionalStyle from './SearchItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  productItem: ProductItem;
};

export const SearchItem: React.FC<Props> = ({ productItem }) => {
  const { image, name, price, category, itemId } = productItem;

  const itemPath = `/${category}/${itemId}`;

  const BASE_URL = 'https://nice-store-api.onrender.com';
  const imageURL = BASE_URL + '/' + image;

  return (
    <Link
      to={itemPath}
      className={classNames(productItemStyle.container, additionalStyle.item)}
    >
      <div className={productItemStyle.header}>
        <div className={productItemStyle.imageContainer}>
          <img className={productItemStyle.image} src={imageURL} alt="phone" />
        </div>

        <div className={productItemStyle.title}>{name}</div>
      </div>

      <div className={productItemStyle.price}>{`${price}$`}</div>
    </Link>
  );
};
