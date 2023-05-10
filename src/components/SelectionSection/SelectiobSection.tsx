import React from 'react';
import selection from './SeleectionSection.module.scss';
import { Button } from '../Button';
import classNames from 'classnames';
import { Color } from '../Color';

export const SelectionSection: React.FC = () => {
  return (
    <div className={selection.selectiobSection}>
      <div className={selection.productName}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </div>

      <div className={selection.colorSelect}>
        <div className={selection.selectText}>
          Color
        </div>

        <div className={selection.colors}>
          <Color color='#5F7170' isActive={true} />

          <Color color='#5F7157' />

          <Color color='#5F7112' />

          <Color color='#5F7187' />

        </div>
      </div>

      <div className={selection.capacitySelect}>
        <div className={selection.selectText}>
          Capacity
        </div>

        <div className={selection.capacitys}>
          <div className={classNames(
            selection.capacity,
            selection.capacityActive,
          )}>
            64GB
          </div>
          
          <div className={selection.capacity}>
            256GB
          </div>

          <div className={selection.capacity}>
            512GB
          </div>
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

      <div className={selection.button}>
        <Button text='Shop Now' type='primary' size='small' />
      </div>
    </div>
  );
};