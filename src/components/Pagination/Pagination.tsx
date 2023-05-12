import React, { FC, useState } from 'react';
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
  const maxPage = 10;
  let pages: number[] = []; 
  
  if (pageNumber === 1) pages = [pageNumber, pageNumber + 1, pageNumber + 2];
  if (pageNumber > 1) pages = [pageNumber - 1, pageNumber, pageNumber + 1];
  if (pageNumber === maxPage) pages = [pageNumber - 2, pageNumber - 1, pageNumber];

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
        disabled={pageNumber === maxPage}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
