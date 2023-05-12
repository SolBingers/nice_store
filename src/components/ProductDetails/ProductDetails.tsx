import details from './ProductDetails.module.scss';
import React, { FC } from 'react';
import { SelectionSection } from '../SelectionSection';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { PhoneSpec } from '../types/types';

interface Props {
  info: PhoneSpec
}

export const ProductDetails: FC<Props> = ({ info }) => {
  const {
    name,
    priceDiscount,
    priceRegular,
    colorsAvailable,
    capacityAvailable,
    images,
  } = info;
  return (
    <div className={details.details}>
      <article className={details.gallery}>
        <ProductGallery images={images} />
      </article>

      <article className={details.sellection}>
        <SelectionSection
          name={name}
          price={priceRegular}
          fullPrice={priceDiscount}
          aviableColors={colorsAvailable}
          aviableCapacities={capacityAvailable}
          selectedColor={'white'}
          selectedCapacity={''}
        />
      </article>

    </div>
  );
};
