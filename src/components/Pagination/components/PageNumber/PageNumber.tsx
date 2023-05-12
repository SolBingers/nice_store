import React, { FC, useEffect } from 'react';
import styles from './PageNumber.module.scss';
import classNames from 'classnames';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

type Props = {
  page: number;
  isActive?: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const PageNumber: FC<Props> = ({ 
  page, 
  isActive = false,
  setPageNumber,
}) => {
  const [, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setPageNumber(page);
  };

  useEffect(() => {
    isActive && setSearchParams({ page: `${page}` });
  }, [isActive]);

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
