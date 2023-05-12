import React, { FC, useEffect } from 'react';
import styles from './PageNumber.module.scss';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const { hash } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setPageNumber(page);
  };

  useEffect(() => {
    isActive && navigate({
      pathname: hash,
      search: `?page=${page}`,
    });
  }, [isActive]);

  return (
    <Link
      to={{
        pathname: hash,
        search: `?page=${page}`,
      }}
      className={classNames(styles.main, {
        [styles.active]: isActive
      })}
      onClick={handleClick}
    >
      {page}
    </Link>
  );
};
