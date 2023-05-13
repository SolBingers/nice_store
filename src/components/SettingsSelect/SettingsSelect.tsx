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
};

export const SettingsSelect: FC<Props> = ({
  className,
  title,
  apiTitle,
  options,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get(apiTitle) || options[0];
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    setIsActive((state) => !state);
  };

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    setIsActive(false);

    searchParams.delete(apiTitle);
    searchParams.append(apiTitle, option.toLowerCase());
    setSearchParams(searchParams);
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
    <div className={className} onClick={(event) => event.stopPropagation()}>
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
