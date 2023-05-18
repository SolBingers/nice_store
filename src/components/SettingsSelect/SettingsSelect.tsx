import React, { FC, useEffect, useState } from 'react';
import settingsSelect from './SettingsSelect.module.scss';
import { ReactComponent as Arrow } from '../../images/chevron-down.svg';
import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
  options: string[];
  selectedValue: string;
  setSelected: (value: string) => void;
};

export const SettingsSelect: FC<Props> = ({
  className,
  title,
  options,
  selectedValue,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    setIsActive((state) => !state);
  };

  const handleSelection = (option: string) => {
    setSelected(option);
    setIsActive(false);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsActive(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div 
      className={className}
      onClick={(event) => event.stopPropagation()}
    >
      <p className={settingsSelect.title}>{title}</p>

      <div className={settingsSelect.main}>
        <div
          className={classNames(settingsSelect.btn, {
            [settingsSelect.isActive]: isActive,
          })}
          onClick={handleBtnClick}
        >
          <span>{toPresentableString(selectedValue)}</span>
          <Arrow
            className={classNames(settingsSelect.arrow, {
              [settingsSelect.isActive]: isActive,
            })}
          />
        </div>

        {isActive && (
          <div className={settingsSelect.content}>
            {options.map((option) => (
              <div
                key={option}
                className={settingsSelect.item}
                onClick={() => handleSelection(option)}
              >
                {toPresentableString(option)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function toPresentableString(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
