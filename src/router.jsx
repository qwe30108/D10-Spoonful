import { createHashRouter } from 'react-router';
import FrontendLayout from './layout/FrontendLayout';
import Home from './pages/front/home';
import About from './pages/front/About';
import SearchResult from './pages/front/SearchResult';
import MealsDetails from './pages/front/MealsDetails';

export const router = createHashRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'searchResult',
        element: <SearchResult />,
      },
      {
        path: 'mealsDetails',
        element: <MealsDetails />,
      },
    ],
  },
]);
