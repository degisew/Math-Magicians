/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Did component changed', () => {
  const tree = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should throw 6  for (1+5)', () => {
  render(
    <Calculator />,
  );
  const display = screen.getByTestId('display');
  const one = screen.getByText('1');
  const five = screen.getByText('5');
  const plus = screen.getByText('+');
  const equal = screen.getByText('=');
  fireEvent.click(one);
  fireEvent.click(plus);
  fireEvent.click(five);
  fireEvent.click(equal);
  expect(display.textContent).toBe('6');
});
