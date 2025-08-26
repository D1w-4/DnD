import { App } from '@/modules/app';
import React from 'react';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
];

