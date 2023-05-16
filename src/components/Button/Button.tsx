import React, { FC } from 'react';
import classNames from 'classnames';
import button from './Button.module.scss';

type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary';
  size: 'small' | 'large';
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  text,
  type,
  size,
  onClick, 
}) => {
  const buttonClass = classNames(button.button, {
    [button.primary]: type === 'primary',
    [button.secondary]: type === 'secondary',
    [button.small]: size === 'small',
    [button.large]: size === 'large',
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
};