import { describe, expect, it } from 'vitest';
import { toggleMenu } from './navMenu';

describe('toggleMenu', () => {
  const navBtn = document.createElement('button');

  it('should update the "aria-pressed" attribute when toggling the menu button', () => {
    navBtn.setAttribute('aria-pressed', 'false');

    toggleMenu(navBtn);

    expect(navBtn.getAttribute('aria-pressed')).toBe('true');
  });

  it('should update the "aria-label" attribute when toggling the menu button', () => {
    navBtn.setAttribute('aria-label', 'Close Navigation');

    toggleMenu(navBtn);

    expect(navBtn.getAttribute('aria-label')).toBe('Open Navigation');
  });

  it('should set the "aria-expanded" attribute whit value "true" when toggling the menu button', () => {
    const navBg = document.createElement('div');
    navBg.id = 'navBg';
    document.body.appendChild(navBg);

    toggleMenu(navBtn);

    expect(navBg.getAttribute('aria-expanded')).toBe('true');
  });

  it('should toggle the body scroll from "auto" to "hidden" when toggling the menu button', () => {
    navBtn.setAttribute('aria-pressed', 'false');
    document.body.style.overflow = 'auto';

    toggleMenu(navBtn);

    expect(document.body.style.overflow).toBe('hidden');
  });
});
