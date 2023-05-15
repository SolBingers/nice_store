import React, { FC, useEffect } from 'react';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { Color } from '../types/Color';

export const ThemeToggler: FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--color-grey', Color.Grey);
    root.style.setProperty('--color-primary', Color.Primary);
    root.style.setProperty('--hover-primary', Color.Hover_Primary);
    root.style.setProperty('--hover-secondary', Color.Hover_Secondary);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.style.setProperty(
      '--color-main-background',
      isDark ? Color.Semi_Dark : Color.Light_Grey,
    );

    root.style.setProperty(
      '--color-semi-background',
      isDark ? Color.Dark : Color.Light,
    );

    root.style.setProperty(
      '--color-contrast',
      isDark ? Color.Light : Color.Dark,
    );
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev: string) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return <div onClick={handleToggleTheme}>ThemeToggler</div>;
};
