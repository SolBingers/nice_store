import React, { FC } from 'react';
import classNames from 'classnames';
import button from './Button.module.scss';

type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary';
  size: 'small' | 'large' | 'extraLarge';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ text, type, size, onClick, disabled }) => {
  const buttonClass = classNames(button.button, {
    [button.primary]: type === 'primary',
    [button.secondary]: type === 'secondary',
    [button.small]: size === 'small',
    [button.large]: size === 'large',
    [button.extraLarge]: size === 'extraLarge',
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};