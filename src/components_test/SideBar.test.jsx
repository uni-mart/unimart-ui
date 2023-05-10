import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../components/Sidebar';

jest.mock('../css/Sidebar.css', () => ({}));
describe('Sidebar component', () => {
  test('renders username correctly', () => {
    const username = 'John Doe';
    const { getByText } = render(<Sidebar username={username} />);
    expect(getByText(username)).toBeInTheDocument();
  });
});
