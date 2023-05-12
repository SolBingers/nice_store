import React, { FC, useEffect, useState } from 'react';
import settingsSelect from './SettingsSelect.module.scss';
import { ReactComponent as Arrow } from '../../images/chevron-down.svg';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

type Props = {
  className?: string;
  title: string;
  apiTitle: string;
  options: string[];
  selected?: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const SettingsSelect: FC<Props> = ({
  className,
  title,
  apiTitle,
  options,
  selected = 'Choose One',
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleBtnClick = () => {
    setIsActive((state) => !state);
  };

  const handleSelection = (option: string) => {
    setSelected(option);
    setSelectedOption(option);
    setIsActive(false);
  };

  useEffect(() => {
    searchParams.delete(apiTitle);
    searchParams.append(apiTitle, selectedOption.toLowerCase());
    setSearchParams(searchParams);
  }, [selectedOption]);

  return (
    <div className={className}>
      <p className={settingsSelect.title}>{title}</p>

      <div className={settingsSelect.main}>
        <div
          className={classNames(settingsSelect.btn, {
            [settingsSelect.isActive]: isActive,
          })}
          onClick={handleBtnClick}
        >
          <span>{selectedOption}</span>
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
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
