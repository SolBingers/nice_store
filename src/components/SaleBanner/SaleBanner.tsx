import React from 'react';
import saleBanner from './SaleBanner.module.scss';
import { Button } from '../Button';
import rock from '../../images/rock.svg';

export const SaleBanner: React.FC = () => {

  return (
    <div className= {saleBanner.saleBanner}>
      <div className={saleBanner.bannerBlack}>
        <h3 className={saleBanner.big}>
          BIG
        </h3>

        <h2 className={saleBanner.sale}>
          SALE
        </h2>

        <div className={saleBanner.button}>
          <Button 
            text='Shop Now' 
            type='secondary' 
            size='large'
          />
        </div>
      </div>

      <div className={saleBanner.bannerWhite}>
        <img 
          src={rock} 
          className={saleBanner.rock} 
          alt='rock'
        />
  
        <div className={saleBanner.saleInfo}>
          save up to <span className={saleBanner.yellowBold}>50%</span> off
        </div>
      </div>
    </div>
  );
};