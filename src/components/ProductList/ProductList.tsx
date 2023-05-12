import React, { FC } from 'react';
import productList from './ProductList.module.scss';
import { Button } from '../Button';
import { ProductCard } from '../ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { Phone } from '../../components/types/types';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

type ProductListProps = {
  title: string;
  products: Phone[];
};

export const ProductList: FC<ProductListProps> = ({ title, products }) => {
  return (
    <section className={productList.productList}>
      <h2 className={productList.title}>
        {title}
      </h2>

      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className={productList.products}
        slidesPerView={'auto'}
      >
        {products.map((product) => (
          <SwiperSlide className={productList.item} key={product.id}>
            <ProductCard phone={product} />
          </SwiperSlide>
        ))}

      </Swiper>

      <Link to='category/phones'>
        <Button
          text={'Shop Now'}
          size={'large'}
          type={'secondary'}
        />
      </Link>
    </section >
  );
};