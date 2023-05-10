import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Button from '../components/Button';
import React from 'react';

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button />);
    const buttonElement = screen.getByText(/Press me/i); //i stand for ignore case
    expect(buttonElement).toBeInTheDocument(); // use toBeInTheDocument function
  });
});

