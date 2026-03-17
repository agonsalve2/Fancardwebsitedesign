import { Link } from 'react-router';
import { useState } from 'react';
import { BookDemoDialog } from './BookDemoDialog';
import { Linkedin } from 'lucide-react';
import logo from 'figma:asset/f05cd56ad70dcc00ad42222212576e439dc26ee5.png';

export function Footer() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <footer className="relative border-t border-gray-200 py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Fancard Logo" className="h-6" />
          <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} Fancard. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
          <Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors">About</Link>
          <Link to="/how-it-works" className="text-gray-500 hover:text-gray-900 transition-colors">How It Works</Link>
          <Link to="/features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</Link>
          <Link to="/terms-and-conditions" className="text-gray-500 hover:text-gray-900 transition-colors">Terms</Link>
          <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy</Link>
          <a
            href="https://www.linkedin.com/company/fancard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#6FE866] transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </footer>
  );
}
