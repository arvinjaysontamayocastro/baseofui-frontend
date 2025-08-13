import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Tutorials from './routes/Tutorials';
import QuickBytes from './routes/QuickBytes';
import FunBubble from './routes/FunBubble';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/tutorials', element: <Tutorials /> },
  { path: '/quick-bytes', element: <QuickBytes /> },
  { path: '/fun-bubble', element: <FunBubble /> },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
