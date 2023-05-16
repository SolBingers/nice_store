import React, { FC } from 'react';
import pagination from './Pagination.module.scss';
import { Arrow } from './components/Arrow';
import { PageNumber } from './components/PageNumber/PageNumber';
import classNames from 'classnames';

type Props = {
  className?: string;
  currentPage: string;
  maxPage: number;
  setSelectedPage: (page: string) => void;
}

export const Pagination: FC<Props> = ({ 
  className,
  currentPage,
  maxPage,
  setSelectedPage,
}) => {
  const pages = getPageNumbers(currentPage, maxPage);
  const numberPage = +currentPage;

  return (
    <div className={classNames(className, pagination.main)}>
      <Arrow 
        type="left" 
        disabled={numberPage === 1}
        setPageNumber={setSelectedPage}
      />
      {pages.map(number => (
        <PageNumber 
          key={number}
          page={number} 
          isActive={numberPage === number}
          setPageNumber={setSelectedPage}
        />
      ))}
      <Arrow 
        type="right" 
        disabled={numberPage === maxPage}
        setPageNumber={setSelectedPage}
      />
    </div>
  );
};

function getPageNumbers(page: string, maxPage:number) {
  let numberPage = +page;
  const result = [];

  if (numberPage > maxPage) numberPage = maxPage;

  if (numberPage === 1) {
    while (numberPage <= maxPage && result.length < 3) {
      result.push(numberPage);
      numberPage++;
    }

    return result;
  }

  if (numberPage === maxPage) {
    while (numberPage >= 0 && result.length < 3) {
      result.unshift(numberPage);
      numberPage--;
    }

    return result;
  }

  return [numberPage - 1, numberPage, numberPage + 1];
}
