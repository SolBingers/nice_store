import card from '../ProductCard/ProductCard.module.scss';
import React, { FC } from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';
import { Phone } from '../types/types';
import { Link } from 'react-router-dom';

interface Props {
  phone: Phone;
}

const BASE_URL = 'https://nice-store-api.onrender.com';

export const ProductCard: FC<Props> = ({ phone }) => {
  const { 
    phoneId,
    image,
    name,
    screen,
    capacity,
    price,
    fullPrice,
    ram
  } = phone;
  const imageURL = BASE_URL + '/' + image;

  return (
    <div className={card.card}>
      <div className={card.imageBackground}>
        <div className={card.imageContainer}>
          <Favorite className={card.heart} />
        </div>

        <Link to={phoneId} className={card.image}>
          <img className={card.image} src={imageURL} alt='phone'/>
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
            <p className={card.info}>Screen</p>
            <p className={card.info}>Capacity</p>
            <p className={card.info}>Ram</p>
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
