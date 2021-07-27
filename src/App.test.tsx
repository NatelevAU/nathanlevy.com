import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders source code link', () => {
  render(<App />);
  const linkElement = screen.getByText(/source code/i);
  expect(linkElement).toBeInTheDocument();
});
