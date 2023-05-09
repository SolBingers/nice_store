import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary';
  size: 'small' | 'large';
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ text, type, size, onClick }) => {
  const buttonClass = classNames(styles.button, {
    [styles['button--primary']]: type === 'primary',
    [styles['button--secondary']]: type === 'secondary',
    [styles['button--small']]: size === 'small',
    [styles['button--large']]: size === 'large',
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