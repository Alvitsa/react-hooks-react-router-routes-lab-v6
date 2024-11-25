import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movie from './Movie';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: '/movie/:id',
      element: (
        <div>
          <NavBar />
          <Movie />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;