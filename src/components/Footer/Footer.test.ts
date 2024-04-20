import { describe, expect, test } from 'vitest';

describe('Footer', () => {
  test('renders the current year in the footer', () => {
    const currentYear = new Date().getFullYear();
    document.body.innerHTML = `<p class="footer__copy">
      Copyright &copy; <span data-testid="current-year" id='currentYear'>${currentYear}</span>. Made by Sergejs
      Ivcenko
    </p>`;
    const yearElement = document.getElementById('currentYear') as HTMLSpanElement;

    expect(yearElement?.innerHTML).toBe('2024');
  });
});
