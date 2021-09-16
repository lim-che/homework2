import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CSCI E-39! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello CSCI E-39!/i);
  expect(linkElement).toBeInTheDocument();
});
