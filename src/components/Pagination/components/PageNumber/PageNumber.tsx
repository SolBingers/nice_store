import React, { FC, useEffect } from 'react';
import styles from './PageNumber.module.scss';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const stringPage = page.toString();
  const handleClick = () => {
    setPageNumber(page);
  };

  useEffect(() => {
    if (isActive) {
      searchParams.delete('page');
      searchParams.append('page', stringPage);
      setSearchParams(searchParams);
    }
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
