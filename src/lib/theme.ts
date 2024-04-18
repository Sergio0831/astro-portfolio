import type { Theme } from 'src/types';

export const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const changeTheme = (theme: Theme) => {
  document.documentElement.setAttribute('color-scheme', theme);
};

export const saveTheme = (theme: Theme) => {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 86400000);
  document.cookie = `theme=${theme};expires=${date.toUTCString()}`;
};
