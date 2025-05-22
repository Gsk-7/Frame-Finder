import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  isTransitioning: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Prevent transitions on page load
  useEffect(() => {
    document.documentElement.classList.add('preload');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setIsDarkMode((prev) => !prev);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === null) {
        setIsDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};