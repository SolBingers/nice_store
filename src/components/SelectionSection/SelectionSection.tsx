import React, { useContext, useEffect, useState } from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import { Color } from '../Color';
import { Capacity } from '../Capacity/Capacity';
import { Product } from '../../types/Product';
import { CartContext } from '../../contexts/CartContext';
import classNames from 'classnames';
import { FavoriteContext } from '../../contexts/favoriteContext';
import { ProductItemSpec } from '../../types/ProductItemSpec';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Favourites } from '../../images/favourites.svg';

type Props = {
  phoneData: ProductItemSpec;
}

export const SelectionSection: React.FC<Props> = ({
  phoneData
}) => {

  const {
    id,
    name,
    namespaceId,
    priceDiscount,
    screen,
    ram,
    priceRegular,
    colorsAvailable,
    capacityAvailable,
    capacity,
    color,
    images,
  } = phoneData;

  function getNormalColor(str: string) {
    const colors: { [key: string]: string } = {
      black: '#000000',
      gold: '#ffd700',
      midnightgreen: '#004953',
      yellow: '#ffff00',
      green: '#008000',
      spacegray: '#757575',
      silver: '#c0c0c0',
      red: '#ff0000',
      white: '#ffffff',
      purple: '#800080',
      coral: '#ff7f50',
      rosegold: '#b76e79',
      midnight: '#191970',
      spaceblack: '#0a0a0a',
      pink: '#ffc0cb',
      sierrablue: '#006994',
      'space gray': '#737373',
      'space-gray': '#737373',
      'sky-blue': '#87ceeb',
      graphite: '#383838',
      'rose gold': '#b76e79',
      blue: '#0000ff',
      starlight: '#adadad',
      'sky blue': '#87ceeb',
    };

    return colors[str];
  }

  function convertColor(str: string) {
    const color = getNormalColor(str);

    const red = parseInt(color.substr(1, 2), 16);
    const green = parseInt(color.substr(3, 2), 16);
    const blue = parseInt(color.substr(5, 2), 16);

    const inverseRed = (red - 10) < 16 ? '00' : red - 50;
    const inverseGreen = (green - 10) < 16 ? '00' : green - 50;
    const inverseBlue = (blue - 10) < 16 ? '00' : blue - 50;

    const inverseColor = `#${inverseRed.toString(16)}${inverseGreen.toString(16)}${inverseBlue.toString(16)}`;

    return inverseColor;
  }

  const [isButtonDissabled, setIsButtonDissabled] = useState(false);
  const { cart, addToCart } = useContext(CartContext);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const { addPhone, removePhone, phones } = useContext(FavoriteContext);
  const { pathname }= useLocation();

  const category = pathname.split('/')[1];

  console.log(category);

  useEffect(() => {
    if((phones.findIndex(phone => phone.itemId === id) !== -1)) {
      setIsHeartActive(true);
    }
  }, []);


  useEffect(() => {
    if (cart.find((product: Product) => product.itemId === id)) {
      setIsButtonDissabled(true);
    } else {
      setIsButtonDissabled(false);
    }
  }, [cart]);

  const handleOnHeart = () => {
    if (!isHeartActive) {
      const newProduct = {
        id,
        itemId: id,
        category,
        name,
        fullPrice: priceRegular.toString(),
        price: priceDiscount.toString(),
        screen,
        capacity,
        color,
        ram,
        image: images[0],
      };

      if(phones.findIndex(phone => phone.itemId === newProduct.itemId) === -1) {
        setIsHeartActive(true);
        addPhone(newProduct);
      } else {
        setIsHeartActive(false);
        removePhone(id);
      }
 
    } else {
      setIsHeartActive(false);
      removePhone(id);
    }
  };

  const handleAddToCart = () => {
    setIsButtonDissabled(true);
    const newProduct = {
      count: 1,
      id,
      name,
      price: priceDiscount.toString(),
      image: images[0],
      itemId: id,
    };

    addToCart(newProduct);
  };

  return (
    <div className={selection.selectiobSection}>
      <div className={selection.productName}>
        {name}
      </div>

      <div className={selection.colorSelect}>
        <div className={selection.selectText}>
          Color
        </div>

        <div className={selection.colors}>
          {colorsAvailable.map(col => {
            return (
              <Color
                color={col}
                NormalColor={getNormalColor(col)}
                isActive={color === col}
                key={col}
                namespaceId={namespaceId}
                capacity={capacity}
                backgroundColor={convertColor(col)}
              />
            );
          })}

        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.selectText}>
          {namespaceId.includes('watch') ? 'Size' : 'Capacity'}
        </div>

        <div className={selection.capacitys}>
          {capacityAvailable.map(cap => (
            <Capacity
              capacity={cap}
              isActive={capacity === cap}
              key={cap}
              color={color}
              namespaceId={namespaceId}
            />
          ))}

        </div>
      </div>

      <div className={selection.prices}>
        <div className={selection.newPrice}>
          {`${priceDiscount}$`}
        </div>

        <div className={selection.oldPrice}>
          {`${priceDiscount}$`}
        </div>
      </div>

      <div className={selection.addingToContainer}>
        <div className={selection.button}>
          {!isButtonDissabled ? (
            <Button
              text={'Add to cart'}
              size="small"
              type={'primary'}
              onClick={handleAddToCart}
            />
          ) : (
            <div className={selection.disabled}>
              <Button
                text={'In cart'}
                size="small"
                type={'secondary'}
                onClick={handleAddToCart}
              />
            </div>
          )}
        </div>
        <button 
          className={selection.heart__container}
          onClick={handleOnHeart}
        >
          <Favourites
            className={classNames(selection.heart, {
              [selection.heart__active]: isHeartActive
            })}
          />
        </button>
      </div>
    </div>
  );
};