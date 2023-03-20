import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('Successfully rendered ', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByTestId('home')).toBeTruthy();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
