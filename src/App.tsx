import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { ForYourClub } from './pages/ForYourClub';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CaseStudyCascais } from './pages/CaseStudyCascais';
import { CaseStudySportworx } from './pages/CaseStudySportworx';
import { CaseStudyLifeAfterFootball } from './pages/CaseStudyLifeAfterFootball';
import { CaseStudyNYGiants } from './pages/CaseStudyNYGiants';
import { HowItWorks } from './pages/HowItWorks';
import { useEffect } from 'react';
import faviconUrl from 'figma:asset/d3af5ffa94190404d55bc9b16c5135c7285fa901.png';

export default function App() {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/for-your-club" element={<ForYourClub />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/case-study/cascais" element={<CaseStudyCascais />} />
          <Route path="/case-study/sportworx" element={<CaseStudySportworx />} />
          <Route path="/case-study/life-after-football" element={<CaseStudyLifeAfterFootball />} />
          <Route path="/case-study/ny-giants" element={<CaseStudyNYGiants />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}