import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/common/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const FormPage = lazy(() => import('./pages/FormPage'));
const ProfilesList = lazy(() => import('./pages/ProfilesList'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/profiles" element={<ProfilesList />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;