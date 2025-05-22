import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { detectMovie } from '../utils/movieDetection';
import ScanAnimation from './ScanAnimation';

interface FileUploadProps {
  onMovieDetected: (movieData: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onMovieDetected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const processFile = (file: File) => {
    if (file && file.type.match('image.*')) {
      setFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setImagePreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {
    setFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDetection = async () => {
    if (!file) return;
    
    setIsScanning(true);
    
    // Simulate API call with delay
    setTimeout(async () => {
      try {
        const movieData = await detectMovie(file);
        onMovieDetected(movieData);
      } catch (error) {
        console.error('Error detecting movie:', error);
      } finally {
        setIsScanning(false);
      }
    }, 3000); // Simulate a 3-second processing time
  };

  return (
    <section id="upload" className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Upload a Movie Frame</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Drag and drop or upload a screenshot from any movie. Our AI will analyze it and provide you with detailed information.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {!imagePreview ? (
            <div 
              className={`border-2 border-dashed ${isDragging ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'border-slate-300 dark:border-slate-700'} rounded-xl p-10 text-center transition-all duration-200 cursor-pointer`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
              />
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200 mb-2">
                  Drag &amp; Drop your image here
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  or click to browse your files
                </p>
                <span className="text-sm text-slate-400">
                  Supports: JPG, PNG, WEBP (Max 10MB)
                </span>
              </div>
            </div>
          ) : (
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 transition-all duration-300">
              <div className="relative aspect-video bg-slate-200 dark:bg-slate-700">
                <img 
                  src={imagePreview} 
                  alt="Movie frame preview" 
                  className="w-full h-full object-contain"
                />
                {isScanning && <ScanAnimation />}
                <button 
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-2 bg-slate-800/60 hover:bg-red-500/80 text-white rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                      {file?.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {(file?.size ? (file.size / 1024 / 1024).toFixed(2) : 0)} MB
                    </p>
                  </div>
                  
                  <button
                    onClick={handleDetection}
                    disabled={isScanning}
                    className={`px-6 py-2 rounded-full font-medium text-white ${
                      isScanning 
                        ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                        : 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700'
                    } transition-colors`}
                  >
                    {isScanning ? 'Detecting...' : 'Detect Movie'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FileUpload;