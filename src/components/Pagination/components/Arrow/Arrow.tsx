import React, { FC } from 'react';
import { ReactComponent as Left } from '../../../../images/chevron-left.svg';
import { ReactComponent as Right } from '../../../../images/chevron-right.svg';
import arrowStyle from './Arrow.module.scss';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

type ArrowProps = {
  type: 'left' | 'right';
  disabled?: boolean;
  setPageNumber: (page: string) => void;
}

export const Arrow: FC<ArrowProps> = ({ 
  type, 
  disabled = false,
  setPageNumber,
}) => {
  const arrow = type === 'left' ? (
    <Left />
  ) : (
    <Right />
  );
  const [searchParams,] = useSearchParams();

  const handleClick = () => {
    const current = searchParams.get('page') || '1';
    const newPage = type === 'left' 
      ? +current - 1 
      : +current + 1;

    setPageNumber(newPage.toString());
  };

  return (
    <div 
      className={classNames(
        arrowStyle.arrowContainer, 
        {
          [arrowStyle.disabled] : disabled,
        }
      )}
      onClick={handleClick}
    >
      {arrow}
    </div>
  );
};