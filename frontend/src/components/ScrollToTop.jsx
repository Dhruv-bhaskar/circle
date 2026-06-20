import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);
  }, []);

  return null; 
}
