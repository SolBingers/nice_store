import React, { FC } from 'react';
import settingsInput from './SettingsInput.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
};

export const SettingsInput: FC<Props> = ({ className, title }) => {
  return (
    <div className={classNames(className, settingsInput.main)}>
      <p className={settingsInput.title}>{title}</p>
      <input type="text" placeholder="..." className={settingsInput.input} />
    </div>
  );
};
