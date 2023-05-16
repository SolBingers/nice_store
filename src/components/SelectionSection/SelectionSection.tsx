import React, { useContext, useEffect, useState } from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import { Color } from '../Color';
import { Capacity } from '../Capacity/Capacity';
import { Phone, PhoneSpec, Product } from '../types/types';
import { CartContext } from '../../contexts/CartContext';

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
            />
          ))}

        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.selectText}>
          Capacity
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