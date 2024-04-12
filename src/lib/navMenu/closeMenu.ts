import { toggleMenu } from './toggleMenu';

export const closeMenu = (navBtn: HTMLButtonElement) => {
  if (navBtn.getAttribute('aria-pressed') === 'true') {
    toggleMenu(navBtn);
  }
};
