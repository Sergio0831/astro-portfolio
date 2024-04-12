export const getCurrentTheme = () => {
  // Determine the theme based on user preferences (dark or light)
  let theme: string | null = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  // Get the current theme from local storage, if available
  localStorage.getItem('theme') ? (theme = localStorage.getItem('theme')) : null;
  return theme;
};
