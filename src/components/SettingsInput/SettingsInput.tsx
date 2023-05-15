import React, { FC } from 'react';
import settingsInput from './SettingsInput.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
  query?: string;
  setQuery?: (input: string) => void | undefined;
}

export const SettingsInput: FC<Props> = ({ 
  className,
  title,
  query,
  setQuery,
}) => {
  return (
    <div className={classNames(className, settingsInput.main)} >
      <p className={settingsInput.title} >{title}</p>
      <input 
        type="text" 
        placeholder="..."
        className={settingsInput.input}
        value={query}
        // onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};
