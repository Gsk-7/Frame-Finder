import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 dark:from-black dark:to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Identify Any Movie<br />From a Single Frame
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 animate-fade-in animation-delay-200">
          Upload a screenshot or photo from any film and our AI instantly recognizes
          the movie, providing you with comprehensive details and information.
        </p>
        
        <a 
          href="#upload" 
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-400"
        >
          Try It Now
        </a>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-amber-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;