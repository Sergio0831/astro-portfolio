import { describe, expect, it, vi } from 'vitest';
import { getCurrentTheme } from './getCurrentTheme';

describe('getCurrentTheme', () => {
  it('should return "dark" when user preferences is dark and local storage is empty', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });
    localStorage.getItem = vi.fn().mockReturnValue(null);

    const result = getCurrentTheme();

    expect(result).toBe('dark');
  });

  it('should return "light" when user preferences is light and local storage is empty', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });
    localStorage.getItem = vi.fn().mockReturnValue(null);

    const result = getCurrentTheme();

    expect(result).toBe('light');
  });
});
