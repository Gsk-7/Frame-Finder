import React from 'react';
import { Clapperboard, Upload, History, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme, isTransitioning } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clapperboard className="w-8 h-8 text-amber-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">
            Frame Finder
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#upload" className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-500">
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </a>
          <a href="#history" className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-500">
            <History className="w-4 h-4" />
            <span>History</span>
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-amber-900/30"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className={`w-5 h-5 theme-toggle-icon ${isTransitioning ? 'rotate' : ''}`} />
            ) : (
              <Moon className={`w-5 h-5 theme-toggle-icon ${isTransitioning ? 'rotate' : ''}`} />
            )}
          </button>
        </nav>
        
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className={`w-5 h-5 theme-toggle-icon ${isTransitioning ? 'rotate' : ''}`} />
            ) : (
              <Moon className={`w-5 h-5 theme-toggle-icon ${isTransitioning ? 'rotate' : ''}`} />
            )}
          </button>
          <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;