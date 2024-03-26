import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

const Footer = lazy(() => import('./Footer/footer'));

export default function Layout() {
  return (
    <ScrollToTop>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Footer />
      </Suspense>
    </ScrollToTop>
  );
}
