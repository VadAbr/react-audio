import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home, Filters, Visualizer } from './pages';
import { RouterErrorBoundary } from './components';
import { Routes } from './constants';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.KARAOKE,
    element: <RouterErrorBoundary />,
  },
  {
    path: Routes.FLAPPY,
    element: <RouterErrorBoundary />,
  },
  {
    path: Routes.SPATIAL_SOUND,
    element: <RouterErrorBoundary />,
  },
  {
    path: Routes.FILTERS,
    element: <Filters />,
  },
  {
    path: Routes.VISUALIZER,
    element: <Visualizer />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <RouterErrorBoundary />,
  },
]);
