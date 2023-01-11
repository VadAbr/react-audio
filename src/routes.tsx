import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Filters, Home, Visualizer } from './pages';
import { RouterErrorBoundary } from './components';
import { Routes } from './constants';

const NOT_INCLUDED_ROUTES = [Routes.NOT_FOUND, Routes.HOME];

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    handle: {
      linkName: 'Главная',
    },
  },
  {
    path: Routes.KARAOKE,
    element: <RouterErrorBoundary />,
    handle: {
      linkName: 'Караоке',
    },
  },
  {
    path: Routes.FLAPPY,
    element: <RouterErrorBoundary />,
    handle: {
      linkName: 'Flappy',
    },
  },
  {
    path: Routes.SPATIAL_SOUND,
    element: <RouterErrorBoundary />,
    handle: {
      linkName: 'Пространственный звук',
    },
  },
  {
    path: Routes.FILTERS,
    element: <Filters />,
    handle: {
      linkName: 'Наложение фильтров',
    },
  },
  {
    path: Routes.VISUALIZER,
    element: <Visualizer />,
    handle: {
      linkName: 'Визуализатор',
    },
  },
  {
    path: Routes.NOT_FOUND,
    element: <RouterErrorBoundary />,
  },
]);

export const routes = router.routes.filter(
  (el) => !NOT_INCLUDED_ROUTES.includes(el.path as Routes),
);
