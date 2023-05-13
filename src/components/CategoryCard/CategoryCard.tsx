import category from './CategoryCard.module.scss';
import React, { FC } from 'react';

interface Props {
  imageUrl: string;
  imageAlt: string;
  categoryName: string;
}

export const CategoryCard: FC<Props> = ({
  imageUrl,
  categoryName,
  imageAlt,
}) => {
  return (
    <div className={category.container}>
      <div className={category.cardContainer}>
        <img src={imageUrl} alt={imageAlt} className={category.photo} />
      </div>

      <div className={category.nameContainer}>
        <h3 className={category.name}>{categoryName}</h3>
      </div>
    </div>
  );
};
