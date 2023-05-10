import card from '../ProductCard/ProductCard.module.scss';
import React, { FC } from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';
import { Phone } from '../types/types';
import { Link } from 'react-router-dom';

interface Props {
  phone: Phone;
}

export const ProductCard: FC<Props> = ({ phone }) => {
  const { 
    phoneId,
    image,
    name, 
    screen, 
    capacity, 
    price, 
    fullPrice,
    ram } = phone;
  return (
    <div className={card.card}>
      <div className={card.iconBackground}>
        <div className={card.iconContainer}>
          <Favorite className={card.heart} />
        </div>

        <Link to={phoneId} className={card.icon}>
          <img className={card.icon} src={image} alt='phone'/>
        </Link>
      </div>

      <div className={card.infoContainer}>
        <h3 className={card.title}>
          <Link to={phoneId} className={card.link}>
            {name}
          </Link>
        </h3>

        <p className={card.breakLine}></p>

        <div className={card.features}>
          <div className={card.names}>
            <p className={card.info}>screen</p>
            <p className={card.info}>capacity</p>
            <p className={card.info}>ram</p>
          </div>

          <div className={card.chars}>
            <p className={card.info}>{screen}</p>
            <p className={card.info}>{capacity}</p>
            <p className={card.info}>{ram}</p>
          </div>
        </div>

        <div className={card.priceBar}>
          <div className={card.prices}>
            <p className={card.price}>{price}</p>
            <p className={card.fullPrice}>{fullPrice}</p>
          </div>

          <div className={card.button}>
            <Button text={'Add to cart'} size='small' type={'primary'} />
          </div>
        </div>
      </div>
    </div>
  );
};
