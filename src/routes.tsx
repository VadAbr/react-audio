import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home } from './pages';
import { RouterErrorBoundary } from './components/RouterErrorBoundry';
import { Routes } from './constants';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.KARAOKE,
    element: <>karaoke</>,
  },
  {
    path: Routes.FLAPPY,
    element: <>flappy</>,
  },
  {
    path: Routes.SPATIAL_SOUND,
    element: <>spatial-sound</>,
  },
  {
    path: Routes.FILTERS,
    element: <>filters</>,
  },
  {
    path: Routes.NOT_FOUND,
    element: <RouterErrorBoundary />,
  },
]);
