import React, { FC } from 'react';
import { ReactComponent as Left } from '../../../../images/chevron-left.svg';
import { ReactComponent as Right } from '../../../../images/chevron-right.svg';
import arrowStyle from './Arrow.module.scss';
import classNames from 'classnames';

type ArrowProps = {
  type: 'left' | 'right';
  disabled?: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Arrow: FC<ArrowProps> = ({
  type,
  disabled = false,
  setPageNumber,
}) => {
  const arrow = type === 'left' ? <Left /> : <Right />;

  const handleClick = () => {
    setPageNumber((prev) => (type === 'left' ? prev - 1 : prev + 1));
  };

  return (
    <div
      className={classNames(arrowStyle.arrowContainer, {
        [arrowStyle.disabled]: disabled,
      })}
      onClick={handleClick}
    >
      {arrow}
    </div>
  );
};
