import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PokemonSearchTool from './pages/PokemonSearchTool.jsx';
import PageNotFound from './pages/PageNoteFound.jsx';
import App from './App.jsx';
import PlayStylesPage from './pages/PlayStylesPage.jsx';
import PokemonGenerator from './pages/PokemonRandomizerPage.jsx';
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <PageNotFound />,
  },
  {
    path:'/PlayStylesPage',
    element: <PlayStylesPage />,
  },
  {
    path:'/Tool',
    element: <PokemonSearchTool />,
  },
  {
    path:'/Random',
    element: <PokemonGenerator />,
  },
  {
    path:'/Login',
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
);
