import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import { BookDemoDialog } from './BookDemoDialog';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/f05cd56ad70dcc00ad42222212576e439dc26ee5.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/for-your-club' },
    { name: 'Features', path: '/features' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.img 
              src={logo} 
              alt="Fancard Logo" 
              className="h-7 md:h-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm font-semibold transition-all duration-300 ${
                  isActivePath(link.path) 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}>
                  {link.name}
                </span>
                {isActivePath(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6FE866] to-[#8FF888] rounded-full shadow-lg shadow-[#6FE866]/50"
                  />
                )}
                {!isActivePath(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
                )}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-6 py-2.5 font-bold text-sm shadow-lg shadow-[#6FE866]/30 hover:shadow-[#6FE866]/50 transition-all duration-300 hover:scale-105"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden pt-6 pb-4 border-t border-white/10 mt-5"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold transition-colors py-2 ${
                    isActivePath(link.path) 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="sm" 
                className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 py-3 font-bold shadow-lg shadow-[#6FE866]/30 w-full mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoDialogOpen(true);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </motion.nav>
  );
}