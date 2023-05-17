import React from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import { Color } from '../Color';
import { Capacity } from '../Capacity/Capacity';

type Props = {
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
}

export const SelectionSection: React.FC<Props> = ({
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
}) => {
  function convertColor (str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colo = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      colo += ('00' + value.toString(16)).substr(-2);
    }
    

    const red = parseInt(colo.substr(1, 2), 16);
    const green = parseInt(colo.substr(3, 2), 16);
    const blue = parseInt(colo.substr(5, 2), 16);

    const inverseRed = 255 - red;
    const inverseGreen = 255 - green;
    const inverseBlue = 255 - blue;

    const inverseColor = `#${inverseRed.toString(16)}${inverseGreen.toString(16)}${inverseBlue.toString(16)}`;

    return inverseColor;
  }

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
        <Button text='Add to cart' type='primary' size='small' />
      </div>
    </div>
  );
};