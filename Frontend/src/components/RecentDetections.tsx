import React from 'react';
import { Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

interface RecentDetectionsProps {
  movies: Movie[];
  onViewDetails: (movie: Movie) => void;
}

const RecentDetections: React.FC<RecentDetectionsProps> = ({ movies, onViewDetails }) => {
  const { isDarkMode } = useTheme();
  
  if (!movies.length) return null;

  return (
    <section id="history" className="py-16 bg-slate-100 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Recently Detected</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {movies.map((movie) => (
            <div 
              key={movie.id}
              className="group relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[2/3] bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <button
                  onClick={() => onViewDetails(movie)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center justify-center p-2 bg-amber-500 rounded-full">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
              
              <div className="p-3">
                <h3 className="font-medium text-slate-800 dark:text-white line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentDetections;