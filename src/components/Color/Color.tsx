import React from 'react';
import colorStyles from './Color.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  color : string,
  isActive?: boolean,
}

export const Color: React.FC<Props> = ( 
  {
    color,
    isActive, 
  }) => (
  <Link to='/' className={classNames(
    colorStyles.color,
    {
      [colorStyles.colorActive]: isActive,
    }
  )} style={{backgroundColor: `${color}`}}>

  </Link>
);

