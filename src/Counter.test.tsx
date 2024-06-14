import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Counter App/i);
  expect(counterElement).toBeInTheDocument();
});

test('initial count value is 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});

test('increment button increases count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  const countElement = screen.getByText(/0/i);

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('2');
});

test('decrement button decreases count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  const countElement = screen.getByText(/0/i);

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-2');
});