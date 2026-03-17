import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router';
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
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './components/ui/button';
import faviconUrl from 'figma:asset/d3af5ffa94190404d55bc9b16c5135c7285fa901.png';
import { FancardBackground } from './components/FancardBackground';
import { BookDemoDialog } from './components/BookDemoDialog';
import menuBgCard from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      {/* Hamburger menu — all pages */}
      <button
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        style={{
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 9999,
          padding: 12,
          borderRadius: '50%',
          backgroundColor: isHome ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.08)',
          backdropFilter: 'blur(12px)',
          border: isHome ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(0,0,0,0.1)',
          color: isHome ? 'white' : '#2A2A2A',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <motion.div
          style={{
            position: 'fixed',
            top: 72,
            right: 24,
            zIndex: 9998,
            width: 'min(280px, calc(100vw - 48px))',
            aspectRatio: '3 / 4',
            borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Fancard background image */}
          <img
            src={menuBgCard}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Dark overlay — 90% opacity so card is barely visible */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(42,42,42,0.9)',
            }}
          />
          <nav style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' as const, gap: 16, padding: '32px 28px' }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'How It Works', path: '/how-it-works' },
              { name: 'Use Cases', path: '/for-your-club' },
              { name: 'Features', path: '/features' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
            ].map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-semibold hover:text-[#6FE866] transition-colors duration-200 block"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.2 }}
            style={{ position: 'relative', zIndex: 1, padding: '0 28px 32px' }}
          >
            <Button
              size="sm"
              className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 w-full py-3 text-sm font-semibold"
              onClick={() => { setMenuOpen(false); setDemoDialogOpen(true); }}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />
            </Button>
          </motion.div>
        </motion.div>
      )}

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />

      <div className="relative min-h-screen" style={{ backgroundColor: '#f7f7f8' }}>
        <FancardBackground />
        <div className="relative" style={{ zIndex: 1 }}>
        {!isHome && <Navigation />}
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
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
