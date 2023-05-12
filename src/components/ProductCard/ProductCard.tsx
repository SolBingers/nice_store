import card from '../ProductCard/ProductCard.module.scss';
import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';
import { useLocalStoragePhones } from '../../customHooks/useLocalStorage';
import classNames from 'classnames';

interface Props {
  phone: Phone;
}

export const ProductCard: FC<Props> = ({ phone }) => {
  const { 
    id,
    phoneId,
    image,
    name, 
    screen, 
    capacity, 
    price, 
    fullPrice,
    ram,
  } = phone;

  const [isFavorite, setIsFavorite] = useState(false);
  const [ ,setPhones ] = useLocalStoragePhones('phones');

  const handleFavoritePhone = () => {
    if (isFavorite) {
      setPhones.removePhone(id);
    } else {
      setPhones.addPhone(phone);
    }
    setIsFavorite(!isFavorite);
  };

  const isPhoneInLocalStorage = (id: string): boolean => {
    const storedPhones = localStorage.getItem('phones');
    if (!storedPhones) {
      return false;
    }
    const parsedPhones: Phone[] = JSON.parse(storedPhones);
    return parsedPhones.some((phone: Phone) => phone.id === id);
  };

  useEffect(() => {
    setIsFavorite(isPhoneInLocalStorage(id));
  }, [isFavorite]);

  return (
    <div className={card.card}>
      <div className={card.iconBackground}>
        <button 
          className={card.iconContainer}
          onClick={handleFavoritePhone}
        >
          <Favorite className={classNames(card.heart, {
            [card.heart__active]: isFavorite === true,
          })} />
        </button>

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
