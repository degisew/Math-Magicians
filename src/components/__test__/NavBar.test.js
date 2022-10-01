//* eslint-disable */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

it('Did component has changed?', () => {
  const tree = renderer.create(
    <MockNavbar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Checking whether its rendering 3 li elementd', () => {
  render(
    <MockNavbar />,
  );
  const listItems = screen.getAllByTestId('li');

  expect(listItems.length).toBe(3);
});
