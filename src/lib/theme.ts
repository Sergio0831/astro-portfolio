export const toggleTheme = (root: HTMLElement) => {
  const theme = root.dataset.theme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  document.cookie = `theme=${nextTheme}`;
};
