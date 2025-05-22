import React, { useState, useEffect } from 'react';
import { Star, Clock, Calendar, Film, Award, User, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MovieDetailsProps {
  movie: any;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!movie) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm ${isDarkMode ? 'dark' : ''}`}>
      <div 
        className={`relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="md:flex">
          <div className="relative md:w-1/3">
            <div className="aspect-[2/3] bg-slate-200 dark:bg-slate-800">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-400 mr-1" />
                <span className="text-white font-bold">{movie.rating}/10</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{movie.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{movie.runtime}</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Film className="w-4 h-4 mr-1" />
                  <span>{movie.genre}</span>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                {movie.plot}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Cast</h3>
                  <ul className="space-y-2">
                    {movie.cast.map((actor: string, index: number) => (
                      <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                        <User className="w-4 h-4 mr-2 text-slate-400" />
                        {actor}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Details</h3>
                  <div className="space-y-2">
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Director:</span> {movie.director}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Writer:</span> {movie.writer}
                    </div>
                    {movie.awards && (
                      <div className="flex items-start text-slate-600 dark:text-slate-300">
                        <Award className="w-4 h-4 mr-2 mt-1 text-amber-500" />
                        <span>{movie.awards}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;