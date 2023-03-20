import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Visualizer } from './Visualizer';
import '@testing-library/jest-dom';

describe('Visualizer page', () => {
  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    render(<Visualizer />, { wrapper: BrowserRouter });
  });

  it('Page is rendered', () => {
    const element = screen.getByTestId('visualizer');

    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
  });
});
