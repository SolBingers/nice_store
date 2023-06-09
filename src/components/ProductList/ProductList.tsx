import React, { FC } from 'react';
import productList from './ProductList.module.scss';
import { Button } from '../Button';
import { ProductCard } from '../ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { ProductItem } from '../../types/ProductItem';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

type ProductListProps = {
  title: string;
  products: ProductItem[];
};

export const ProductList: FC<ProductListProps> = ({ title, products }) => {
  return (
    <section className={productList.productList}>
      <h2 className={productList.title}>{title}</h2>

      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className={productList.products}
        slidesPerView={'auto'}
      >
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <SwiperSlide className={productList.item} key={product.id}>
              <ProductCard phone={product} />
            </SwiperSlide>
          ))}
      </Swiper>

      <Link to="/phones">
        <Button text={'Shop Now'} size={'large'} type={'secondary'} />
      </Link>
    </section>
  );
};
