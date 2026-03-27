import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './pages/LandingPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}
