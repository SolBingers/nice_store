import React, { FC } from 'react';
import settingsInput from './SettingsInput.module.scss';

type Props = {
  className?: string;
  title: string;
}

export const SettingsInput: FC<Props> = ({ className, title }) => {
  return (
    <div className={className} >
      <p className={settingsInput.title} >{title}</p>
      <input 
        type="text" 
        placeholder="..."
        className={settingsInput.input} 
      />
    </div>
  );
};
