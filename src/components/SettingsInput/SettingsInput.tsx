import React, { FC, useEffect, useState } from 'react';
import settingsInput from './SettingsInput.module.scss';
import classNames from 'classnames';

import { useDebouncedCallback } from 'use-debounce';

type Props = {
  className?: string;
  title: string;
  placeholder?: string;
  setQuery?: (input: string) => void;
}

export const SettingsInput: FC<Props> = ({
  className,
  title,
  setQuery,
  placeholder,
  ...formProps
}) => {
  const [text, setText] = useState('');

  const handleSpaces = (text: string) => {
    const modifiedValue = text.replace(/ /g, '-');
    return modifiedValue;
  };

  const debouncedQuery = useDebouncedCallback((input: string) => {
    if (setQuery) {
      setQuery(input);
    }
  }, 1000);

  const handleChangeParams = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setText(inputValue);
    debouncedQuery(handleSpaces(inputValue));
  };

  useEffect(() => {
    return debouncedQuery.cancel;
  }, [debouncedQuery]);

  return (
    <div className={classNames(className, settingsInput.main)} >
      <p className={settingsInput.title} >{title}</p>
      <input
        {...formProps}
        type="text" 
        placeholder={placeholder}
        className={settingsInput.input}
        value={text}
        onChange={handleChangeParams}
      />
    </div>
  );
};
