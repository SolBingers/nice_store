import React from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import { Color } from '../Color';
import { Capacity } from '../Capacity';

type Props = {
  name: string;
  price: number;
  fullPrice: number;
  aviableColors: string[];
  aviableCapacities: string[];
  selectedColor: string;
  selectedCapacity: string;
};

export const SelectionSection: React.FC<Props> = ({
  name,
  price,
  fullPrice,
  aviableColors,
  aviableCapacities,
  selectedColor,
  selectedCapacity,
}) => {
  return (
    <div className={selection.selectiobSection}>
      <div className={selection.productName}>{name}</div>

      <div className={selection.colorSelect}>
        <div className={selection.selectText}>Color</div>

        <div className={selection.colors}>
          {aviableColors.map((col) => (
            <Color color={col} isActive={selectedColor === col} key={col} />
          ))}
        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.selectText}>Capacity</div>

        <div className={selection.capacitys}>
          {aviableCapacities.map((cap) => (
            <Capacity
              capacity={cap}
              isActive={selectedCapacity === cap}
              key={cap}
            />
          ))}
        </div>
      </div>

      <div className={selection.prices}>
        <div className={selection.newPrice}>{`${price}$`}</div>

        <div className={selection.oldPrice}>{`${fullPrice}$`}</div>
      </div>

      <div className={selection.button}>
        <Button text="Shop Now" type="primary" size="small" />
      </div>
    </div>
  );
};
