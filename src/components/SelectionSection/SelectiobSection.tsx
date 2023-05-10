import React from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';

export const SelectionSection: React.FC = () => {
  return (
    <div className={selection.selectiobSection}>
      <div className={selection.productName}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </div>

      <div className={selection.colorSelect}>
        <div className={selection.colorText}>
          Color
        </div>

        <div className={selection.colors}>
          <div className={selection.color}></div>

          <div className={selection.color}></div>
        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.capacityText}>
          Capacity
        </div>

        <div className={selection.capacitys}>
          <div className={selection.capacity}></div>
          
          <div className={selection.capacity}></div>
        </div>
      </div>

      <div className={selection.prices}>
        <div className={selection.newPrice}>
          1199$
        </div>

        <div className={selection.oldPrice}>
          599$
        </div>
      </div>

      <Button text='Shop Now' type='primary' size='small' />
    </div>
  );
};