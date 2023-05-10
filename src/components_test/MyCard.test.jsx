import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyCard from '../components/MyCard';

describe('MyCard component', () => {
    it('renders the correct content', () => {
      const title = 'Card title';
      const imageSrc = 'http://example.com/image.jpg';
      const text = 'Card text';
  
      const { getByText, getByRole } = render(
        <MyCard title={title} imageSrc={imageSrc} text={text} />
      );
  
      expect(getByRole('img')).toHaveAttribute('src', imageSrc);
      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(text)).toBeInTheDocument();
    });
  });