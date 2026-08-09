"use client";

import { useEffect } from 'react';

/**
 * FontOptimizer component to load fonts asynchronously
 * This prevents render-blocking and improves FCP/LCP scores
 */
export function FontOptimizer() {
  useEffect(() => {
    // Load fonts asynchronously after initial render
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Norwester&family=Poppins:wght@400;700&display=swap';
    link.media = 'print';
    link.onload = function() {
      // @ts-ignore
      this.media = 'all';
    };
    
    // Fallback for browsers that don't support onload
    setTimeout(() => {
      link.media = 'all';
    }, 100);
    
    document.head.appendChild(link);
    
    return () => {
      // Cleanup on unmount
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return null;
}
