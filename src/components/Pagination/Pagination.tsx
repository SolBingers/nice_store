import React, { FC, useEffect, useState } from 'react';
import pagination from './Pagination.module.scss';
import { Arrow } from './components/Arrow';
import { PageNumber } from './components/PageNumber/PageNumber';
import classNames from 'classnames';

type Props = {
  currentPage: number;
  className?: string;
}

export const Pagination: FC<Props> = ({ currentPage, className }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);
  const pages = [pageNumber, pageNumber + 1, pageNumber + 2];

  return (
    <div className={classNames(className, pagination.main)}>
      <Arrow 
        type="left" 
        disabled={pageNumber === 1}
        setPageNumber={setPageNumber}
      />
      {pages.map(number => (
        <PageNumber 
          key={number}
          page={number} 
          isActive={pageNumber === number}
          setPageNumber={setPageNumber}
        />
      ))}
      <Arrow 
        type="right" 
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
