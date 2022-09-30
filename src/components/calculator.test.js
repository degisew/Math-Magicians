import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './calculator';

test('Test numbers of button', () => {
  render(<Calculator />);
  const buttons = screen.queryAllByRole('Rows');
  expect(buttons).toHaveLength(0);
});
test('Test AC button', () => {
  render(<Calculator />);
  const button = screen.queryByText('AC');
  const inner = screen.queryByTestId('res');
  fireEvent.click(button, () => {
    inner.innerHTML = '';
  });
  expect(inner).toHaveTextContent('');
});