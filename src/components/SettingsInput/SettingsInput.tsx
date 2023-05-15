import React, { FC } from 'react';
import settingsInput from './SettingsInput.module.scss';
import classNames from 'classnames';
type Props = {
  className?: string;
  title: string;
  placeholder?: string;
}

export const SettingsInput: FC<Props> = ({
  className,
  title,
  placeholder,
  ...formProps
}) => {
  return (
    <div className={classNames(className, settingsInput.main)} >
      <p className={settingsInput.title}>{title}</p>

      <input
        {...formProps}
        type="text"
        placeholder={placeholder}
        className={settingsInput.input}
      />
    </div>
  );
};
