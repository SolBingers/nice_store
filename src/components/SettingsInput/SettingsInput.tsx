import React, { FC, useEffect, useRef, useState } from 'react';
import settingsInput from './SettingsInput.module.scss';
import classNames from 'classnames';
import { useDebounce } from 'use-debounce';

type Props = {
  className?: string;
  title: string;
  setQuery?: (input: string) => void;
}

export const SettingsInput: FC<Props> = ({ 
  className,
  title,
  setQuery,
}) => {
  const [text, setText] = useState('');

  const handleSpaces = (text: string) => {
    const modifiedValue = text.replace(/ /g, '-');
    return modifiedValue;
  };

  const [debouncedQuery] = useDebounce(handleSpaces(text), 1000);

  const handleChangeParams = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setText(inputValue);
  };

  useEffect(() => {
    if (setQuery) {
      setQuery(debouncedQuery);
    }
  }, [debouncedQuery]); 

  return (
    <div className={classNames(className, settingsInput.main)} >
      <p className={settingsInput.title} >{title}</p>
      <input 
        type="text" 
        placeholder="..."
        className={settingsInput.input}
        value={text}  
        onChange={handleChangeParams}
      />
    </div>
  );
};
