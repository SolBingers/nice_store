import classNames from 'classnames';
import React from 'react';
import capacityStyles from './Capacity.module.scss';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  capacity: string;
  isActive?: boolean;
  color: string;
  namespaceId: string;
}

export const Capacity: React.FC<Props> = ({
  capacity,
  isActive,
  color,
  namespaceId
}
) => {
  const location = useLocation();
  const linkStart = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

  return (
    <Link
      to={`${linkStart}/${namespaceId}-${capacity.toLowerCase()}-${color}`}
      className={classNames(
        capacityStyles.capacity,
        {
          [capacityStyles.capacityActive]: isActive
        }
      )}>
      {capacity}
    </Link>
  );
};

