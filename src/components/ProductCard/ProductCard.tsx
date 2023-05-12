import card from '../ProductCard/ProductCard.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as Favorite } from '../../images/emptyHeart.svg';
import { Button } from '../Button';
import { Phone, Product } from '../types/types';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { 
    phoneId, 
    image, 
    name, 
    screen, 
    capacity, 
    price, 
    fullPrice, 
    ram 
  } =
    phone;

  const [isButtonDissabled, setIsButtonDissabled] = useState(false);

  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    if (cart.find((product: Product) => product.phoneId === phoneId)) {
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
      <div className={card.iconBackground}>
        <div className={card.iconContainer}>
          <Favorite className={card.heart} />
        </div>

        <Link to={phoneId} className={card.icon}>
          <img className={card.icon} src={image} alt="phone" />
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
