import React from 'react';

const ScanAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="relative w-full h-full">
        {/* Scanning line animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 animate-scan-vertical"></div>
        
        {/* Corners for futuristic scanner effect */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-amber-500"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-500"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-amber-500"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-amber-500"></div>
        
        {/* Processing indicators */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-lg font-medium">Analyzing Frame</div>
          <div className="text-sm text-slate-300 mt-2">Identifying movie data...</div>
        </div>
      </div>
    </div>
  );
};

export default ScanAnimation;