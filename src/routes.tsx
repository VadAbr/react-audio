import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home, Filters } from './pages';
import { RouterErrorBoundary } from './components';
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
    element: <Filters />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <RouterErrorBoundary />,
  },
]);
