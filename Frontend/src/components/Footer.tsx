import React from 'react';
import { Clapperboard, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Clapperboard className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">
                Frame Finder
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
              The ultimate movie identification tool. Upload any frame
              from a film and get instant information about the movie.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#upload" className="text-slate-400 hover:text-amber-500 transition-colors">Upload</a></li>
                <li><a href="#history" className="text-slate-400 hover:text-amber-500 transition-colors">History</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-amber-500 transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: This is a demo application. No real user data is collected or stored.'); }} className="text-slate-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: This is a demo application for educational purposes only.'); }} className="text-slate-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" onClick={(e) => { e.preventDefault(); alert('Cookie Policy: This demo does not use any cookies.'); }} className="text-slate-400 hover:text-amber-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:demo@example.com" className="text-slate-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Frame Finder. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: This is a demo application. No real user data is collected or stored.'); }} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy</a>
            <a href="/terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: This is a demo application for educational purposes only.'); }} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms</a>
            <a href="/cookies" onClick={(e) => { e.preventDefault(); alert('Cookie Policy: This demo does not use any cookies.'); }} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;