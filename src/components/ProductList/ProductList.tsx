import React, { FC } from 'react';
import productList from './ProductList.module.scss';
import { Button } from '../Button';
import { ProductCard } from '../ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
//import { Product } from '../types';

import 'swiper/css';
import 'swiper/css/scrollbar';

type ProductListProps = {
  title: string;
  //products: Product[];
};

export const ProductList: FC<ProductListProps> = ({ title }) => {
  return (
    <section className={productList.productList}>
      <h2 className={productList.title}>
        {title}
      </h2>

      {/* {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))} */}

      <Swiper
        freeMode={true}
        slidesPerView={1.5}
        grabCursor={true}
        modules={[FreeMode]}
        className={productList.products}
        spaceBetween={32}
        breakpoints={{
          490: {
            slidesPerView: 1.9,
          },

          650: {
            slidesPerView: 2.5,
          },

          768: {
            spaceBetween: 20,
            slidesPerView: 2.9,
          },

          900: {
            slidesPerView: 3.5,
          },

          1200: {
            slidesPerView: 5,
          }
        }}
      >
        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className={productList.swiper}>
          <div className={productList.item}>
            <ProductCard />
          </div>
        </SwiperSlide>

      </Swiper>

      <Button text={'Shop Now'} size={'large'} type={'secondary'} />
    </section >
  );
};
