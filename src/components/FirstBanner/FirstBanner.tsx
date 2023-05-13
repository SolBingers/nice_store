import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import { Button } from '../Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import mobileSlide2 from '../../images/firstBanner/secondSlide.png';
import firstBanner from './FirstBanner.module.scss';

export const FirstBanner: React.FC = () => {
  return (
    <div className={firstBanner.firstBanner}>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        speed={600}
        loop
        className={firstBanner.mySwiper}
      >
        <SwiperSlide className={firstBanner.swiperSlide}>
          <div className={firstBanner.firstSlide}>
            <div className={firstBanner.firstSlide__content}>
              <h2 className={firstBanner.firstSlide__title}>
                the best choice of 2023
              </h2>
              <p className={firstBanner.firstSlide__product}>Iphone 11</p>
              <p className={firstBanner.firstSlide__info}>
                Still fast. Still unique. Still one of the best.
              </p>

              <Button text={'Shop Now'} size={'small'} type={'primary'} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={firstBanner.secondSlide}>
            <div className={firstBanner.secondSlide__content}>
              <h2 className={firstBanner.secondSlide__title}>
                Now availible in our store
              </h2>
              <p className={firstBanner.secondSlide__info}>Be the first!</p>

              <Button text={'Shop Now'} size={'small'} type={'primary'} />
            </div>
            <img
              className={firstBanner.secondSlide__img}
              src={mobileSlide2}
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={firstBanner.thirdSlide}>
            <h2 className={firstBanner.thirdSlide__title}>
              CHOOSE WHATEVER YOU WANT
            </h2>
            <p className={firstBanner.thirdSlide__info}>IPad Air</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
