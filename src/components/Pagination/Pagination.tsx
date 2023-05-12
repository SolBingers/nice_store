import React, { FC, useState } from 'react';
import pagination from './Pagination.module.scss';
import { Arrow } from './components/Arrow';
import { PageNumber } from './components/PageNumber/PageNumber';
import classNames from 'classnames';

type Props = {
  currentPage: number;
  className?: string;
  maxPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<Props> = ({ 
  className,
  currentPage,
  maxPage,
  setSelectedPage,
}) => {
  const pages = getPageNumbers(currentPage, maxPage);

  return (
    <div className={classNames(className, pagination.main)}>
      <Arrow 
        type="left" 
        disabled={currentPage === 1}
        setPageNumber={setSelectedPage}
      />
      {pages.map(number => (
        <PageNumber 
          key={number}
          page={number} 
          isActive={currentPage === number}
          setPageNumber={setSelectedPage}
        />
      ))}
      <Arrow 
        type="right" 
        disabled={currentPage === maxPage}
        setPageNumber={setSelectedPage}
      />
    </div>
  );
};

function getPageNumbers(currentPage: number, maxPage:number) {
  const result = [];

  if (currentPage > maxPage) currentPage = maxPage;

  if (currentPage === 1) {
    while (currentPage < maxPage && result.length < 3) {
      result.push(currentPage);
      currentPage++;
    }

    return result;
  }

  if (currentPage === maxPage) {
    while (currentPage > 0 && result.length < 3) {
      result.unshift(currentPage);
      currentPage--;
    }

    return result;
  }

  return [currentPage - 1, currentPage, currentPage + 1];
}
