import { Link } from 'react-router';
import { useState } from 'react';
import { BookDemoDialog } from './BookDemoDialog';
import { Linkedin } from 'lucide-react';
import logo from 'figma:asset/f05cd56ad70dcc00ad42222212576e439dc26ee5.png';

export function Footer() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  return (
    <footer className="relative border-t border-white/10 py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={logo} alt="Fancard Logo" className="h-8 mb-4" />
            <p className="text-gray-400 text-sm mb-6 font-medium">THE FAN ENGAGEMENT PLATFORM</p>
            <a 
              href="https://www.linkedin.com/company/fancard/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#BEF264] transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Follow us on LinkedIn</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-white mb-5 font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/for-your-club" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-5 font-bold text-sm uppercase tracking-wider">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => setDemoDialogOpen(true)} className="text-gray-400 hover:text-[#BEF264] text-sm font-medium transition-colors">
                  Book a Demo
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © 2025 Fancard. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <Link to="/terms-and-conditions" className="text-gray-600 hover:text-gray-400 text-xs font-medium transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-400 text-xs font-medium transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </footer>
  );
}