import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { register } from 'swiper/element/bundle';

import Layout from './components/Layout/Layout.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import routes from './routes/index.js';

function App() {
  register();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
