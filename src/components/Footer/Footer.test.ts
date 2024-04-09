import { screen } from '@testing-library/dom';
import { describe, expect, test } from 'vitest';

describe('Footer', () => {
  test('renders the current year in the footer', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(`${currentYear}`);
    expect(yearElement).toBeInTheDocument();
  });
});
