// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
