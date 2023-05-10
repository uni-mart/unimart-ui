import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchField from '../components/SearchField';

describe('SearchField component', () => {
  test('renders correctly', () => {
    const onSearchTextChange = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchField onSearchTextChange={onSearchTextChange} />
    );
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('handles search text change', () => {
    const onSearchTextChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchField onSearchTextChange={onSearchTextChange} />
    );
    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'new search text' } });
    expect(onSearchTextChange).toHaveBeenCalledWith('new search text');
  });
});






