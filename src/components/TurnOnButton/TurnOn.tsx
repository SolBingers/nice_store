import React from 'react';
import buttonStyles from './TurnOn.module.scss';
import classNames from 'classnames';

type Props = {
  isActive: boolean,
  setIsActive: () => void,
}

export const TurnOn: React.FC<Props> = ({ isActive, setIsActive }) => {
  return (
    <button 
      className={classNames(
        buttonStyles.container,{
          [buttonStyles.containerActive]: isActive,
        }
      )}
      onClick={setIsActive}
    >

    </button>
  );
};