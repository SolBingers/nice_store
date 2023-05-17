import classNames from 'classnames';
import React, { FC, useState, useEffect } from 'react';
import gallery from './ProductGallery.module.scss';
import { toast } from 'react-toastify';

type ProductGalleryProps = {
  images: string[];
};

const handleError = () => {
  toast.error('Cant load some data');
};

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  const [mainPhoto, setMainPhoto] = useState(images[0]);

  useEffect(() => {
    setMainPhoto(images[0]);
  }, [images]);

  return (
    <div className={gallery.gallery}>
      <div className={gallery.mainPhotoContainer}>
        <img
          src={mainPhoto}
          alt="phone__image"
          className={gallery.mainImage}
          onError={handleError}
        />
      </div>

      <div className={gallery.images}>
        {images.map((image) => {
          const imageId = image.split('/').reverse()[0];

          return (
            <div
              key={imageId}
              className={classNames(gallery.imagesContainer, {
                [gallery.isActive]: image === mainPhoto,
              }
              )}
            >
              <img
                src={image}
                alt="phone__image"
                className={gallery.image}
                onClick={() => setMainPhoto(image)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
