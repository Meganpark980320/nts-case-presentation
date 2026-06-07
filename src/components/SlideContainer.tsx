'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';

interface SlideContainerProps {
  children: ReactNode[];
}

export default function SlideContainer({ children }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = children.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark-900">
      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children[currentSlide]}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass-card transition-opacity ${
          currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-70 hover:opacity-100'
        }`}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass-card transition-opacity ${
          currentSlide === totalSlides - 1 ? 'opacity-0 pointer-events-none' : 'opacity-70 hover:opacity-100'
        }`}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'bg-accent-blue w-8'
                  : 'bg-dark-600 hover:bg-dark-500'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
}
