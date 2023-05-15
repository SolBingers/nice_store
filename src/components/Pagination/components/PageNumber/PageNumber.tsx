import React, { FC } from 'react';
import styles from './PageNumber.module.scss';
import classNames from 'classnames';

type Props = {
  page: number;
  isActive?: boolean;
  setPageNumber: (page: string) => void;
}

export const PageNumber: FC<Props> = ({ 
  page, 
  isActive = false,
  setPageNumber,
}) => {
  const handleClick = () => {
    setPageNumber(page.toString());
  };

  return (
    <div
      className={classNames(styles.main, {
        [styles.active]: isActive
      })}
      onClick={handleClick}
    >
      {page}
    </div>
  );
};
