import card from '../ProductCard/ProductCard.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';
import { ProductItem, Product } from '../../types/types';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { FavoriteContext } from '../../contexts/favoriteContext';
import classNames from 'classnames';

interface Props {
  phone: ProductItem;
}

const BASE_URL = 'https://nice-store-api.onrender.com';

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { 
    itemId, 
    image, 
    name, 
    screen, 
    capacity, 
    price, 
    fullPrice,
    category,
    ram 
  } = phone;
  
  const imageURL = BASE_URL + '/' + image;

  const itemPath = `/${category}/${itemId}`;

  const [isButtonDissabled, setIsButtonDissabled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { phones, addPhone, removePhone } = useContext(FavoriteContext);
  const { cart, addToCart } = useContext(CartContext);


  const handleFavoritePhone = () => {
    if (isFavorite) {
      removePhone(itemId);
    } else {
      addPhone(phone);
    }

  };

  useEffect(() => {
    if(phones.find((phone: ProductItem) => phone.itemId === itemId)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  },[phones]);

  useEffect(() => {
    if (cart.find((product: Product) => product.itemId === itemId)) {
      setIsButtonDissabled(true);
    } else {
      setIsButtonDissabled(false);
    }
  }, [cart]);

  const handleAddToCart = () => {
    setIsButtonDissabled(true);
    const newProduct = {
      ...phone,
      count: 1,
    };

    addToCart(newProduct);
  };

  return (
    <div className={card.card}>
      <div className={card.imageBackground}>
        <button 
          className={card.iconContainer}
          onClick={handleFavoritePhone}
        >
          <Favorite className={classNames(card.heart, {
            [card.heart__active]: isFavorite === true,
          })} />
        </button>
        <Link to={itemPath} className={card.image}>
          <img className={card.image} src={imageURL} alt='phone'/>
        </Link>
      </div>

      <div className={card.infoContainer}>
        <h3 className={card.title}>
          <Link to={itemPath} className={card.link}>
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
            {!isButtonDissabled ? (
              <Button
                text={'Add to cart'}
                size="small"
                type={'primary'}
                onClick={handleAddToCart}
              />
            ) : (
              <div className={card.disabled}>
                <Button
                  text={'In cart'}
                  size="small"
                  type={'secondary'}
                  onClick={handleAddToCart}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
