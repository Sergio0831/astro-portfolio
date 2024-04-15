export const loadTheme = (theme: string | null) => {
  const themeBtn = document.getElementById('themeBtn') as HTMLButtonElement;
  const root = document.querySelector(':root') as HTMLElement;

  const isDark = theme === 'dark';
  // Update the button's icon, ARIA label and logo image based on the current theme
  themeBtn.setAttribute('aria-label', `${isDark ? 'Dark' : 'Light'} Theme`);
  themeBtn.setAttribute('aria-checked', `${isDark}`);

  // Set the 'color-scheme attribute of the 'root' element to the specified theme
  root.setAttribute('color-scheme', `${theme}`);
};
