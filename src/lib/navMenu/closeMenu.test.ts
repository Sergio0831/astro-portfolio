import { describe, expect, it, vi } from 'vitest';
import { toggleMenu } from './toggleMenu';
import { closeMenu } from './closeMenu';

describe('closeMenu', () => {
  const navBtn = document.createElement('button');

  it('should call toggleMenu when navBtn attribute "aria-pressed" is "true"', () => {
    navBtn.setAttribute('aria-pressed', 'true');
    const toggleMenuSpy = vi.fn(toggleMenu);

    closeMenu(navBtn);

    // expect(toggleMenuSpy).toHaveBeenCalledOnce();
    expect(toggleMenuSpy).toHaveBeenCalled();
  });
});
