import { lazy } from 'react';

const TemplateSelection = lazy(() => import('./pages/TemplateSelection'));
const FormPage = lazy(() => import('./pages/FormPage'));
const ProfilesList = lazy(() => import('./pages/ProfilesList'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

const routes = [
  { path: '/', element: <TemplateSelection /> },
  { path: '/form', element: <FormPage /> },
  { path: '/profiles', element: <ProfilesList /> },
  { path: '/portfolio/:id', element: <PortfolioPage /> }
];

export default routes;