import category from './CategoryCard.module.scss';
import React, { FC } from 'react';

interface Props {
  imageUrl: string;
  imageAlt: string;
  categoryLink: string;
  categoryName: string;
}

export const CategoryCard: FC<Props> = ({
  imageUrl,
  categoryName,
  categoryLink, 
  imageAlt,
}) => {
  return (
    <div className={category.container}>
      <div className={category.cardContainer}>
        <img src={imageUrl} alt={imageAlt} className={category.photo} />
      </div>
      
      <div className={category.nameContainer} ></div>
      <h3 className={category.name}>
        <a href={categoryLink} className={category.link}>
          {categoryName}
        </a>
      </h3>
    </div>
  );
};
