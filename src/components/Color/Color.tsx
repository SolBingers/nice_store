import React from 'react';
import colorStyles from './Color.module.scss';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  color: string,
  isActive?: boolean,
  namespaceId: string,
  capacity: string,
}

export const Color: React.FC<Props> = ({
  color,
  isActive,
  namespaceId,
  capacity,
}) => {

  const location = useLocation();
  const linkStart = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
  return (
    <Link
      to={`${linkStart}/${namespaceId}-${capacity.toLowerCase()}-${color}`}
      className={classNames(
        colorStyles.color,
        {
          [colorStyles.colorActive]: isActive,
        }
      )} style={{ backgroundColor: `${color}` }}
    />
  );
};
