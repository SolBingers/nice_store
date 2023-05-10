import classNames from 'classnames';
import React from 'react';
import capacityStyles from './Capacity.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  capacity: number;
  isActive?: boolean;
}

export const Capacity:React.FC<Props> = ({
  capacity,
  isActive,
}
) => (
  <Link 
    to='/'  
    className={classNames(
      capacityStyles.capacity,
      {
        [capacityStyles.capacityActive] : isActive 
      }
    )}>
    {`${capacity} GB`}
  </Link>
);
