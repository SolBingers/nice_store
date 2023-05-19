import React, { useContext, useEffect, useState } from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import { Color } from '../Color';
import { Capacity } from '../Capacity/Capacity';
import { Product } from '../../types/Product';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  id: string;
  name: string;
  namespaceId: string;
  price: number;
  fullPrice: number;
  aviableColors: string[],
  aviableCapacities: string[],
  selectedColor: string,
  selectedCapacity: string,
  capacity: string,
  color: string,
  image: string,
}

export const SelectionSection: React.FC<Props> = ({
  id,
  name,
  namespaceId,
  price,
  fullPrice,
  aviableColors,
  aviableCapacities,
  selectedColor,
  selectedCapacity,
  capacity,
  color,
  image,
}) => {

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


  useEffect(() => {
    if (cart.find((product: Product) => product.itemId === id)) {
      setIsButtonDissabled(true);
    } else {
      setIsButtonDissabled(false);
    }
  }, [cart]);

  const handleAddToCart = () => {
    setIsButtonDissabled(true);
    const newProduct = {
      count: 1,
      id,
      name,
      price: price.toString(),
      image,
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
          {aviableColors.map(col => (
            <Color
              color={col}
              NormalColor={getNormalColor(col)}
              isActive={selectedColor === col}
              key={col}
              namespaceId={namespaceId}
              capacity={capacity}
              backgroundColor={convertColor(col)}
            />
          ))}

        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.selectText}>
          {namespaceId.includes('watch') ? 'Size' : 'Capacity'}
        </div>

        <div className={selection.capacitys}>
          {aviableCapacities.map(cap => (
            <Capacity
              capacity={cap}
              isActive={selectedCapacity === cap}
              key={cap}
              color={color}
              namespaceId={namespaceId}
            />
          ))}

        </div>
      </div>

      <div className={selection.prices}>
        <div className={selection.newPrice}>
          {`${price}$`}
        </div>

        <div className={selection.oldPrice}>
          {`${fullPrice}$`}
        </div>
      </div>

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
    </div>
  );
};