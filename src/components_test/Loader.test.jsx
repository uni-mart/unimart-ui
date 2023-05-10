import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../components/Loader';

describe('Loader component', () => {
    test('renders "Loader" text', () => {
      const { getByText } = render(<Loader />);
      const loaderText = getByText(/Loader/i);
      expect(loaderText).toBeInTheDocument();
    });
  });