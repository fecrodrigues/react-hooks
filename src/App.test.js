import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My Finances/i);
  expect(linkElement).toBeInTheDocument();
});


function mult(a, b) {
  return a * b;
}

test('Teste de multiplicacao', () => {
  expect(mult(3, 2)).toBe(6);
})