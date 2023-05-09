import React from 'react';
import firstBanner from './FirstBanner.module.scss';
import mobileSlide2 from '../../images/firstBanner/secondSlide.png';

export const FirstBanner: React.FC = () => {
  return (
    <>
      <div className={firstBanner.firstSlide}>
        <div className={firstBanner.firstSlideContent}>
          <h2 className={firstBanner.firstSlideTitle}>the best choice of 2023</h2>
          <p className={firstBanner.firstSlideProduct}>Iphone 11</p>
          <p className={firstBanner.firstSlideInfo}>Still fast. Still unique. Still one of the best.</p>
        </div>
      </div>

      <div className={firstBanner.secondSlide}>
        <div className={firstBanner.secondSlideContent}>
          <h2 className={firstBanner.secondSlideTitle}>Now availible in our store</h2>
          <p className={firstBanner.secondSlidInfo}>Be the first!</p>
        </div>
        <img className={firstBanner.secondSlideImg} src={mobileSlide2} alt="" />
      </div>

      <div className={firstBanner.thirdSlide}>
        <h2 className={firstBanner.thirdSlideTitle}>CHOOSE WHATEVER YOU WANT</h2>
        <p className={firstBanner.thirdSlideInfo}>IPad Air</p>
      </div>
    </>
  );
};