import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import '@testing-library/jest-dom';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  });

  it('Page is rendered ', () => {
    const element = screen.getByTestId('home');

    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
  });

  it('Links is rendered ', () => {
    const linksElements = screen.getAllByTestId('link');

    expect(linksElements).toBeTruthy();
    expect(linksElements).not.toHaveLength(0);
  });
});
