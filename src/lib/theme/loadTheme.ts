import { moonIcon, sunIcon } from '../svgIcons/themeIcons';

export const loadTheme = (theme: string | null) => {
  const themeBtn = document.getElementById('themeBtn') as HTMLButtonElement;
  const root = document.querySelector(':root') as HTMLElement;

  // Update the button's icon, ARIA label and logo image based on the current theme
  if (theme === 'light') {
    themeBtn.innerHTML = moonIcon;
    themeBtn.setAttribute('aria-label', 'Dark Theme');
    themeBtn.setAttribute('aria-checked', 'false');
  } else {
    themeBtn.innerHTML = sunIcon;
    themeBtn.setAttribute('aria-label', 'Light Theme');
    themeBtn.setAttribute('aria-checked', 'true');
  }
  // Set the 'color-scheme attribute of the 'root' element to the specified theme
  root.setAttribute('color-scheme', `${theme}`);
};
