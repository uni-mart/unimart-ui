import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from '../Pages/LandingPage';

describe('LandingPage component', () => {
  test('renders "SAVE THE OCEANS" text', () => {
    render(<LandingPage />);
    const headingElement = screen.getByText(/SAVE THE OCEANS/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders "SELL OR BUY SECOND HAND ITEMS" text', () => {
    render(<LandingPage />);
    const subheadingElement = screen.getByText(/SELL OR BUY SECOND HAND ITEMS/i);
    expect(subheadingElement).toBeInTheDocument();
  });

  test('renders "Shop Now" button', () => {
    render(<LandingPage />);
    const buttonElement = screen.getByRole('button', { name: /Shop Now/i });
    expect(buttonElement).toBeInTheDocument();
  });
});