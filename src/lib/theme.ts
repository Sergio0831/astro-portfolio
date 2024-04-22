/**
 * Toggles between light and dark themes and updates aria-checked attribute accordingly.
 * @param {HTMLElement} root
 * @param {HTMLButtonElement} themeBtn
 */

export const toggleTheme = (root: HTMLElement, themeBtn: HTMLButtonElement) => {
  // Get the current theme from dataset
  const theme = root.dataset.theme;
  // Get the current value of aria-checked attribute
  const currentChecked = themeBtn.getAttribute('aria-checked');
  // Determine the next theme based on the current theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  // Determine the next value for aria-checked attribute
  const isChecked = currentChecked === 'true' ? 'false' : 'true';

  // Update the theme in dataset
  root.dataset.theme = nextTheme;
  // Set the theme in a cookie (assuming this is for persistence)
  document.cookie = `theme=${nextTheme}`;
  // Update the aria-checked attribute of the theme button
  themeBtn.setAttribute('aria-checked', isChecked);
};
