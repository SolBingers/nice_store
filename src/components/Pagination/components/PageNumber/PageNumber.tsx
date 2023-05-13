import React, { FC } from 'react';
import styles from './PageNumber.module.scss';
import classNames from 'classnames';

type Props = {
  page: number;
  isActive?: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const PageNumber: FC<Props> = ({
  page,
  isActive = false,
  setPageNumber,
}) => {
  return (
    <div
      className={classNames(styles.main, {
        [styles.active]: isActive,
      })}
      onClick={() => setPageNumber(page)}
    >
      {page}
    </div>
  );
};
