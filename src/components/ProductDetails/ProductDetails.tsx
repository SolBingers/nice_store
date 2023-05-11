import details from './ProductDetails.module.scss';
import React, { FC } from 'react';
import { SelectionSection } from '../SelectionSection';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import images from '../../api/gallery.json';

export const ProductDetails: FC = () => {
  return (
    <div className={details.details}>
      <article className={details.gallery}>
        <ProductGallery images={images.imageList} />
      </article>

      <article className={details.sellection}>
        <SelectionSection
          name={'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)'}
          price={1199}
          fullPrice={599}
          aviableColors={['white', 'black', 'red']}
          aviableCapacities={[64, 256, 128]}
          selectedColor={'white'}
          selectedCapacity={256}
        />
      </article>

    </div>

  );
};
