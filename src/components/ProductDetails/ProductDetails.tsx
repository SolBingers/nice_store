import details from './ProductDetails.module.scss';
import React, { FC } from 'react';
import { SelectionSection } from '../SelectionSection';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductItemSpec } from '../../types/ProductItemSpec';

interface Props {
  phoneData: ProductItemSpec;
}

export const ProductDetails: FC<Props> = ({ phoneData }) => {
  const {
    id,
    name,
    namespaceId,
    priceDiscount,
    priceRegular,
    colorsAvailable,
    capacityAvailable,
    color,
    capacity,
    images,
  } = phoneData;

  const BASE_URL = 'https://nice-store-api.onrender.com';

  const imageURLs = images.map((element) => {
    const fullPath = BASE_URL + '/' + element;

    return fullPath;
  });

  return (
    <div className={details.details}>
      <article className={details.gallery}>
        <ProductGallery images={imageURLs} />
      </article>

      <article className={details.sellection}>
        <SelectionSection
          id={id}
          name={name}
          namespaceId={namespaceId}
          price={priceRegular}
          fullPrice={priceDiscount}
          aviableColors={colorsAvailable}
          aviableCapacities={capacityAvailable}
          selectedColor={color}
          selectedCapacity={capacity}
          capacity={capacity}
          color={color}
          image={images[0]}
        />
      </article>
    </div>
  );
};
