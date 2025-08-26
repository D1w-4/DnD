import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { routes } from '@/routes';
import '@/styles/global.scss';
import '@mantine/core/styles.css';

const router = createBrowserRouter(routes);

console.log('[bootstrap] App starting...');

const root = createRoot(document.getElementById('root')!);
console.log(root);
root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
