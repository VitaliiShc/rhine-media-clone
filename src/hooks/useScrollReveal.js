import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-a]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-vis', '1');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    revealEls.forEach((revealEl) => observer.observe(revealEl));
    return () => observer.disconnect();
  }, []);
}
