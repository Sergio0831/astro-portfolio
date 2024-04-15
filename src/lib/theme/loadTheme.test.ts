import { describe, expect, it } from 'vitest';
import { loadTheme } from './loadTheme';

describe('loadTheme', () => {
  it('should update button icon, aria-label, aria-checked, and color-scheme when theme is light', () => {
    const theme = 'light';
    const themeBtn = document.createElement('button');
    const root = document.createElement('div');
    themeBtn.id = 'themeBtn';
    root.setAttribute('color-scheme', 'light');
    document.body.appendChild(themeBtn);
    document.body.appendChild(root);

    loadTheme(theme);

    expect(themeBtn).toBeInTheDocument();
    expect(themeBtn.getAttribute('aria-label')).toBe('Dark Theme');
    expect(themeBtn.getAttribute('aria-checked')).toBe('false');

    document.body.removeChild(themeBtn);
    document.body.removeChild(root);
  });
});
