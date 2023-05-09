import card from '../ProductCard/ProductCard.module.scss';
import phone from '../../images/phone.png';
import React from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';

export const ProductCard: React.FC = () => (
  <div className={card.card}>
    <div className={card.iconBackground}>
      <div className={card.iconContainer}>
        <a href="/">
          <Favorite className={card.heart} />
        </a>
      </div>

      <a href='/' className={card.icon}>
        <img className={card.icon} src={phone} alt='phone'/>
      </a>
    </div>

    <div className={card.infoContainer}>
      <h3 className={card.title}>
        <div className={card.link}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </div>
      </h3>

      <p className={card.breakLine}></p>

      <div className={card.features}>
        <div className={card.names}>
          <p className={card.info}>screen</p>
          <p className={card.info}>capacity</p>
          <p className={card.info}>ram</p>
        </div>

        <div className={card.chars}>
          <p className={card.info}>5.8” OLED</p>
          <p className={card.info}>64 GB</p>
          <p className={card.info}>4 GB</p>
        </div>
      </div>

      <div className={card.priceBar}>
        <div className={card.prices}>
          <p className={card.price}>79</p>
          <p className={card.fullPrice}>99</p>
        </div>

        <div className={card.button}>
          <Button text={'Add to cart'} size='small' type={'primary'} />
        </div>
      </div>
    </div>
  </div>
);

ProductCard.displayName = 'ProductCard';